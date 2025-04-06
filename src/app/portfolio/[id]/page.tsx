"use client"

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaTumblr,
  FaPinterest,
} from "react-icons/fa";


// For demo purposes, reusing the same projects array
const projects = [
  {
    id: 1,
    title: "Earth Day Ad",
    category: "Advertising",
    description:
      "Showcase environmental awareness with creative, impactful designs.",
    imageUrl: "/images/ph.png",
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

export default function PortfolioDetail() {
  const { id } = useParams(); // id will be the slug (e.g. "earth-day-ad")
  
  // Find the project based on slug
  const project = projects.find(
    (proj) => proj.title.replace(/\s+/g, "-").toLowerCase() === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>Project not found.</p>
        <Link href="/portfolio">
          <a className="mt-4 text-blue-500 underline">Back to Portfolio</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col py-20">
      {/* Page Header */}
      <header className="w-full bg-white py-14 sm:py-6 mb-8">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-thin text-black">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm font-semibold mt-4 text-black">
            Home . Portfolio . {project.title}
          </p>
        </div>
      </header>

        {/* Main Content */}
       {/* Main two‑column section */}
       <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: title, meta & social */}
        <div className="space-y-6">
          <p className="text-red-500 uppercase tracking-widest font-semibold">
            Graphic
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo.
          </p>

          <div className="space-y-1 text-gray-800">
            <p>
              <span className="font-semibold">Client:</span> Jacob Donowan
            </p>
            <p>
              <span className="font-semibold">Year:</span> 2019
            </p>
            <p>
              <span className="font-semibold">Author:</span> Sandra Jones
            </p>
          </div>

          <ul className="flex space-x-4 text-gray-600">
            <li>
              <FaFacebookF size={18} />
            </li>
            <li>
              <FaTwitter size={18} />
            </li>
            <li>
              <FaTumblr size={18} />
            </li>
            <li>
              <FaPinterest size={18} />
            </li>
          </ul>
          <Link href="/portfolio" className="mt-4 text-sm font-semibold text-gray-700 hover:text-black transition-colors text-left">
            Back to Portfolio &larr;
          </Link>
        </div>

        {/* Right column: 2×2 image grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="relative w-full aspect-square bg-gray-200 overflow-hidden"
            >
              <Image
                src="/images/ph.png"
                alt={`Placeholder ${n}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </main>
          {/* Full‑width text content below */}
          <section className="max-w-6xl mx-auto px-4 pb-20 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Vivamus semper ipsum non mi cursus finibus. Donec vulputate faucibus
              urna porttitor accumsan. Vestibulum bibendum ac ipsum eget ultrices.
              Vestibulum imperdiet massa sit amet massa lacinia, eu consectetur
              nibh tincidunt. Vestibulum egestas, purus et viverra lacinia, tortor
              ipsum aliquam ex, id convallis dui leo a tellus.
            </p>
            <p>
              Nunc scelerisque, nisi sed pretium aliquam, augue lacus viverra
              ligula, id porta sapien diam eget libero. Aliquam varius ipsum dolor,
              sed ornare quam ultricies nec. Donec scelerisque, leo vel interdum
              lacinia, odio nulla blandit ante, non convallis arcu dolor vel
              lorem.
            </p>
            <p>
              Quisque interdum ullamcorper ante eu volutpat. Pellentesque gravida,
              erat quis faucibus viverra, orci enim consectetur magna, non
              imperdiet urna dui et sapien. Phasellus rutrum nunc a leo consectetur
              mattis.
            </p>
          </section>
    </div>
  );
}
