---
title: "How I fixed OOM kills in a Celery worker processing large PDFs"
date: "2026-05-10"
description: "A production RAG system started crashing silently when users uploaded large PDFs. Here is exactly what was happening and how it was fixed."
tags: ["Python", "Celery", "RAG", "Production", "Engineering"]
---

## The Problem

Users of [swiftciv](https://swiftciv.com) reported that when they tried to upload large files, the upload would take forever and never complete. Deleting the file would also start but never show as completed.

The file size we are talking about here is 30-40MB engineering manuals.

On the surface the system looked fine. No errors came up in the Flask logs.

## Diagnosing the Issue

The first clue came from the Celery worker logs, the worker was exiting with signal 9.

Signal 9 is SIGKILL — the Linux kernel's OOM (Out of Memory) killer.

When the system runs out of RAM it picks the most memory-hungry process and kills it instantly with no warning and no cleanup.

Checking the kernel logs also confirmed it:

celery invoked oom-killer
Out of memory: Killed process 1175738 (celery) total-vm:8861876kB, anon-rss:5197760kB

## Why was this happening?

The document processing pipeline was doing three expensive things at the same time:

**1. Loading the entire PDF into memory at once**

PyPDFLoader reads every page of the document uploaded into a Python list before processing, for a large file the entire text of every page sits in RAM simultaneously.

**2. Running OCR on scanned pages by converting all pages to images at once**

Without page limits every page of the PDF is rendered as a high resolution image, for a 239 page document this generates up to 6GB of image data loaded into RAM at the same time.

**3. Generating all embeddings at once**

The HuggingFace embedding model alone loads 1.5GB into memory. Generating embeddings requires holding every text chunk in memory simultaneously before any can be sent to Pinecone.

Combining this with the PDF text, OCR images and embeddings, the worker hit more than 5GB causing the OOM killer to step in.

## The Right Fix: Two Architectural Changes

### 1. Dedicated Embedding Service

Instead of loading the HuggingFace model inside every Celery worker process, I extracted it into its own dedicated Flask service that loads the model once on startup then stays resident.

Workers call the service via HTTP instead of loading the model themselves, this makes the worker memory drop from 2GB baseline to 200MB.

### 2. Streaming Page-by-Page Processing

Instead of loading the entire PDF and all OCR images into memory at the same time, I chose to process the documents in batches of 20 pages, discarding each batch immediately after processing.

For OCR I chose to convert one page at a time instead of all pages at once.

## The Result

As a result of these changes, peak memory during processing dropped from 5GB to under 400MB regardless of document size.

A 239-page PDF that previously crashed the worker now processes successfully.
