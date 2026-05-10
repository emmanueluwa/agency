import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const posts = import.meta.glob("../blog/posts/*.md", {
  query: "?raw",
  import: "default",
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { meta: {}, content: raw };
  const meta = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      let val = rest.join(":").trim().replace(/^"|"$/g, "");
      if (val.startsWith("[")) {
        val = val
          .replace(/[[\]"]/g, "")
          .split(",")
          .map((s) => s.trim());
      }
      meta[key.trim()] = val;
    }
  });
  return { meta, content: raw.replace(/^---[\s\S]*?---\n/, "") };
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      const entry = Object.entries(posts).find(([path]) =>
        path.endsWith(`${slug}.md`),
      );
      if (!entry) {
        setNotFound(true);
        return;
      }
      const raw = await entry[1]();
      const { meta, content } = parseFrontmatter(raw);
      setPost({ meta, content });
    }
    load();
  }, [slug]);

  if (notFound) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="lg:px-24 px-4 pt-32 text-white">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-red-400 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="lg:px-24 px-4 pt-32 text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="lg:px-24 px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="text-gray-400 hover:text-white text-sm mb-8 inline-block transition-colors"
        >
          ← Back to blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(post.meta.tags) &&
            post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          {post.meta.title}
        </h1>
        <p className="text-gray-500 text-sm mb-10">{post.meta.date}</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}
