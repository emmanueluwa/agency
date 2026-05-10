import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

export default function BlogIndex() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const loaded = await Promise.all(
        Object.entries(posts).map(async ([path, loader]) => {
          const raw = await loader();
          const { meta } = parseFrontmatter(raw);
          const slug = path.split("/").pop().replace(".md", "");
          return { slug, ...meta };
        }),
      );
      loaded.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAllPosts(loaded);
    }
    load();
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="lg:px-24 px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Engineering articles, project breakdowns, and lessons from building in
          production.
        </p>
        <div className="flex flex-col gap-8">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {Array.isArray(post.tags) &&
                  post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{post.description}</p>
              <span className="text-xs text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
