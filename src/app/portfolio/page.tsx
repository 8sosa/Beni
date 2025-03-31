import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Earth Day Ad",
    category: "Advertising",
    description:
      "Showcase environmental awareness with creative, impactful designs.",
    imageUrl: "/images/ph.png", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Digital Store Ad",
    category: "Branding",
    description:
      "Bring your digital storefront to life with a cohesive brand identity.",
    imageUrl: "/images/ph.png",
  },
  {
    id: 3,
    title: "Home Decor Ad",
    category: "Lifestyle",
    description:
      "Elevate living spaces with designs that inspire comfort and style.",
    imageUrl: "/images/ph.png",
  },
];

export default function ListLargeHoverWaves() {
  return (
    <div className="min-h-screen flex flex-col py-20">
      {/* Page Header */}
        <header className="w-full bg-white py-14 sm:py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-thin text-black">Portfolio</h1>
            <p className="text-xs sm:text-sm font-semibold mt-4 text-black">
                Home . Portfolio
            </p>
            </div>
        </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center"
            >
              {/* Image Section */}
              <div className="group relative w-full aspect-[1/1] bg-gray-200 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="space-y-4 flex flex-col justify-end aspect-[1/1] p-20 sm:p-4 sm:justify-start sm:aspect-[16/9]">
                <p className="text-red-400 font-bold uppercase tracking-wide text-sm">
                  {project.category}
                </p>
                <h2 className="text-4xl font-bold text-black pb-20">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href="#"
                  className="justify-self-end mt-4 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                >
                  View All Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
