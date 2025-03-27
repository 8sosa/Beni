"use client";

import Image from "next/image";
import "./page.css";
import { LuGem, LuClipboardList } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { ImQuotesLeft } from "react-icons/im";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="homeHero flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-12 bg-gray-50">
        {/* Left Text */}
        <div className="homeHeroText mt-8 md:mt-0">
          <p className="text-lg md:text-xl font-semibold">Wordsmith</p>
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
          <span className="flex items-center gap-2 text-base md:text-lg">
            <TfiLayoutLineSolid /> About Me
          </span>
          <h2 className="text-3xl font-bold mb-4">
            I&apos;m the conversion copywriter for you
          </h2>
          <p className="text-gray-600 mb-4">
            View the range of our services and projects that we perform internationally
            with huge love and care.
          </p>
          <button className="homeAboutBtn px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            About Me
          </button>
        </div>
        <div className="homeAboutImg flex justify-center md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200 overflow-hidden">
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
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <LuGem className="serviceIcon mb-4" />
            <h3 className="text-xl font-semibold mb-2">Direction</h3>
            <p className="text-gray-600">
              We are working with various companies on massive projects. Contact us and we’ll discuss all the details.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer flex items-center justify-center gap-1">
              <HiOutlineArrowLongRight /> More Details
            </span>
          </div>
          {/* Service 2 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <LuClipboardList className="serviceIcon mb-4" />
            <h3 className="text-xl font-semibold mb-2">Copywriting</h3>
            <p className="text-gray-600">
              Our authors can create technical or creative texts on any topic. Tell the story of your brand and sell goods with us.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer flex items-center justify-center gap-1">
              <HiOutlineArrowLongRight /> More Details
            </span>
          </div>
          {/* Service 3 */}
          <div className="service bg-white rounded-md p-6 text-center">
            <TbTargetArrow className="serviceIcon mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coaching</h3>
            <p className="text-gray-600">
              Our team consists of enthusiastic professionals who’ll gladly share their knowledge with you.
            </p>
            <span className="inline-block mt-3 text-blue-600 cursor-pointer flex items-center justify-center gap-1">
              <HiOutlineArrowLongRight /> More Details
            </span>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="wwa flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-white">
        <div className="wwaImage homeAboutImg flex justify-center md:w-1/2">
          <div className="relative w-full h-[300px] md:h-full bg-gray-200 overflow-hidden">
            <Image
              src="/images/ph.png"
              alt="Team Photo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="wwaText md:w-1/2 md:pr-8 mt-8 md:mt-0">
          <span className="flex items-center gap-2 text-base md:text-lg">
            <TfiLayoutLineSolid /> Who We Are
          </span>
          <h2 className="text-3xl font-bold mb-4">
            A team with vision, conviction and skill.
          </h2>
          <p className="text-gray-600 mb-4">
            We are located in Big City which makes things easier. Visit our office and see the awesome creative team of young copywriters!
          </p>
          <button className="wwaBtn px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors inline-flex items-center gap-1">
            Read More <HiOutlineArrowLongRight />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-12 px-6 md:px-12 bg-white text-center">
        <TfiLayoutLineSolid className="testimonialIcon" />
        <h2 className="testimonialsHeader text-3xl font-bold mb-4">Testimonials</h2>
        <ImQuotesLeft className="testimonialIconred testimonialIcon" />
        <div className="testi flex flex-col md:flex-row items-center gap-6">
          <HiOutlineArrowLongLeft className="hideMobile testimonialIcon" />
          <div>
            <p className="testimonialsText text-gray-600 max-w-2xl mx-auto mb-6">
              “I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!”
            </p>
            <div className="flex flex-col items-center mb-6">
              <p className="testimonialsText1">Brian Smith</p>
              <p className="testimonialsText2">Project Manager</p>
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
          </div>
          <HiOutlineArrowLongRight className="hideMobile testimonialIcon" />
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="partners py-12 px-6 md:px-12 bg-white">
        <div className="partnersDiv max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Partner",
            "Partner",
            "Partner",
            "Partner",
            "Partner",
            "Partner",
            "Partner",
            "Partner"
          ].map((label, idx) => (
            <div key={idx} className="partner partner-logo flex items-center justify-center space-x-3">
              <Image
                src="/images/ph.png"
                alt={`${label} Logo`}
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
