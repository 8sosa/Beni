// pages/news/index.jsx
import React from "react";
import Image from "next/image";
import './page.css'
import { TfiLayoutLineSolid } from "react-icons/tfi";


const newsPosts = [
  {
    id: 1,
    title: "World’s most famous espresso recipes",
    date: "March 28, 2025",
    excerpt:
      "Discover the art of espresso and the secrets behind its global popularity...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 2,
    title: "The power of people design in marketing",
    date: "March 27, 2025",
    excerpt:
      "Human-centered design is at the core of successful marketing campaigns...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 3,
    title: "What we do to get rid of stress at work",
    date: "March 25, 2025",
    excerpt:
      "Stress management techniques that can improve productivity and morale...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 4,
    title: "Loving UI safety talks from a famous brand",
    date: "March 24, 2025",
    excerpt:
      "How big brands ensure user interface safety and user privacy...",
    imageUrl: "/images/ph.png",
  },
];

const categories = [
  { id: 1, name: "Design" },
  { id: 2, name: "Development" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Business" },
];

const tags = ["UX/UI", "Design", "React", "Next.js", "Tailwind", "SEO"];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20">
      {/* Page Header */}
      <header className="w-full bg-white-100 py-6 mb-10 flex justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Blogs</h1>
          <p className="text-sm font-semibold mt-6 text-center">
            Home . Blogs
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Posts Section */}
        <div className="lg:col-span-8">
          {/* Updated grid layout: two posts per row on medium+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsPosts.map((post) => (
              <a
                href="#"
                key={post.id}
                className="text-black hover:underline font-medium"
              >
                <article className="bg-white rounded-md overflow-hidden">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="py-6">
                    <div className="text-sm text-gray-500 mb-2 flex gap-5">
                    <p className="red">Blog</p> . <p className="">{post.date}</p>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Recent Posts */}
          <div className="p-6 rounded-md">
            <TfiLayoutLineSolid className="red line"/>
            <h3 className="text-xl font-bold mb-7">Recent Posts</h3>
            <ul className="space-y-3">
              {newsPosts.map((post) => (
                <li key={post.id}>
                  <a href="#" className="text-xl font-semi-bold">
                    {post.title}
                  </a>
                    <div className="text-sm text-gray-500 mb-2 flex gap-5">
                        <p className="red">Blog</p> . <p className="">{post.date}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="p-6 rounded-md">
          <TfiLayoutLineSolid className="red line"/>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a href="#" className="text-gray-700 hover:underline">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="p-6 rounded-md">
          <TfiLayoutLineSolid className="red line"/>
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
