"use client";

import Image from "next/image";
// import Link from "next/link";
import "./page.css";
import { LuGem, LuClipboardList } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="homeHero flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-12 bg-gray-50">
        {/* Left Text */}
        <div className="homeHeroText mt-8 md:mt-0">
          <p>Wordsmith</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Creative director
            <br />
            copywriter.
          </h1>
          <button className="homeHeroBtn px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Right Image */}
        <div className="homeHeroImage w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Creative Director"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* About / Book Section */}
      <section className="homeAbout flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-white">
        <div className="homeAboutText md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <span>---- About Me</span>
          <h2 className="text-3xl font-bold mb-4">
            I&apos;m the conversion copywriter for you
          </h2>
          <p className="text-gray-600 mb-4">
            View the range of our services and projects that we perform
            internationally with huge love and care.
          </p>
          <button className="homeAboutBtn px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            About Me
          </button>
        </div>
        <div className="homeAboutImg flex justify-center md:w-1/2">
          <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Book Cover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6 md:px-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <LuGem className="serviceIcon mx-auto mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Direction</h3>
            <p className="text-gray-600">
              We are working with various companies on massive projects. Contact
              us and we’ll discuss all the details.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer">
              More Details
            </span>
          </div>
          {/* Service 2 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <LuClipboardList className="serviceIcon mx-auto mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Copywriting</h3>
            <p className="text-gray-600">
              Our authors can create technical or creative texts on any topic.
              Tell the story of your brand and sell goods with us.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer">
              More Details
            </span>
          </div>
          {/* Service 3 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <TbTargetArrow className="serviceIcon mx-auto mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Coaching</h3>
            <p className="text-gray-600">
              Our team consists of enthusiastic professionals who’ll gladly share
              their knowledge with you.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer">
              More Details
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter / Subscription */}
      {/* <section className="py-12 px-6 md:px-12 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Enter your email</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          Stay up to date with the latest news and updates from my newsletter.
        </p>
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-l-md px-4 py-2 mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          />
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </section> */}

      {/* Who We Are */}
      <section className="homeAbout flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-white">
        <div className="homeAboutImg flex justify-center md:w-1/2">
          <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Book Cover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="homeAboutText md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <span>---- Who We Are</span>
          <h2 className="text-3xl font-bold mb-4">
          A team with vision, conviction and skill.
          </h2>
          <p className="text-gray-600 mb-4">
          We are located in Big City which makes things easier. Visit our office and see the awesome creative team of young copywriters!
          </p>
          <button className="homeAboutBtn px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            Read More
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          “I know I can count on your service if I need my project done fast and
          with the best possible result. I am a regular customer and hope to
          continue our work!”
        </p>
        <div className="flex flex-col items-center mb-6">
          <p className="font-semibold">Brian Smith</p>
          <p className="text-sm text-gray-500">Project Manager</p>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Avatar 1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Avatar 2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Avatar 3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 1. Airbnb */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Airbnb Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Airbnb</span>
          </div>

          {/* 2. Slack */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Slack Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Slack</span>
          </div>

          {/* 3. Nike */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Nike Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Nike</span>
          </div>

          {/* 4. Netflix */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Netflix Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Netflix</span>
          </div>

          {/* 5. Envato */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Envato Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Envato</span>
          </div>

          {/* 6. Google */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Google Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Google</span>
          </div>

          {/* 7. Apple */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Apple Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Apple</span>
          </div>

          {/* 8. Amazon */}
          <div className="partner partner-logo flex items-center space-x-3">
            <Image
                src="/images/ph.png"
                alt="Amazon Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <span className="font-medium">Amazon</span>
          </div>
        </div>
      </section>
    </main>
  );
}
