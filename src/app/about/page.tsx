"use client"

import React, { FormEvent } from 'react';
import Image from 'next/image';
import './page.css'

  
export default function AboutUsPage() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Process form data or send it to an API endpoint
        console.log('Form submitted');
      };
  return (
    <main className="flex flex-col items-center justify-center w-full py-20">
        <header className="w-full bg-white py-14 sm:py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-thin text-black">About Me</h1>
            <p className="text-xs sm:text-sm font-semibold mt-4 text-black">
                Home . About Me
            </p>
            </div>
        </header>

      {/* Hero / Intro Section */}
      <section className="w-full max-w-6xl px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full justify-around flex flex-col aspect-[1/1] p-10">
            <h1 className="text-5xl font-bold mb-4 text-black">
              I can give your business a new creative start right away!
            </h1>
            <p className="text-gray-600">
              Donec hendrerit diam. Pellentesque egestas faucibus arcu nisl aliquam malesuada.
              Donec suscipit posuere ligula. Vivamus tristique, odio non efficitur malesuada, purus
              quam dictum velit, vitae hendrerit ex magna et.
            </p>
          </div>
          <div className="group relative w-full aspect-[1/1] bg-gray-200 overflow-hidden">
                <Image
                    src='/images/ph.png'
                    alt="Mr Ifeanyi"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>
      </section>

      {/* Personal Awards Section */}
      <section className="w-full creamBg py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:py-50 gap-4 sm:gap-8 text-black">
          <p className="text-base sm:text-lg font-thin">Follow Us</p>
          <p className="text-xl sm:text-2xl font-semibold">Facebook X Dribble Behance</p>
          <h1 className="text-3xl sm:text-5xl font-thin">Let’s Work Together</h1>
          <h1 className="text-3xl sm:text-5xl font-thin">
            just drop me a line – <span className="font-semibold">info@example.com</span>
          </h1>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full">
            <p className="text-gray-600 text-base sm:text-lg font-bold text-center pb-4">
              Connect with me
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-black pb-8">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row w-full gap-5">
                <div className="w-full">
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gray-400 text-white px-15 py-5 rounded hover:bg-gray-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
