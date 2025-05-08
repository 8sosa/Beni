"use client";

import Image from "next/image";
import "./page.css";
import services from '@/components/content.json';
import { LuGem } from "react-icons/lu";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { ImQuotesLeft } from "react-icons/im";

const PARTNERS = Array(8).fill("Partner");

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partners Section */}
      <PartnersSection />
    </main>
  );
}

function HeroSection() {
  const { headline } = services.homePage;
  return (
    <section className="homeHero flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-12 bg-gray-50">
      <div className="homeHeroText mt-8 md:mt-0">
        <p className="text-lg md:text-xl font-semibold">Wordsmith</p>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{headline}</h1>
        <a href="/contact">
          <button className="homeHeroBtn px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Get In Touch
          </button>
        </a>
      </div>
      <div className="homeHeroImage w-full md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full overflow-hidden">
          <Image src="/images/ph.png" alt="Creative Director" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { subheadline } = services.homePage;
  return (
    <section className="homeAbout flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-white">
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <div className="flex items-center gap-2 text-base md:text-lg mb-2 text-black">
          <TfiLayoutLineSolid /> <span>About Me</span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-black">I&apos;m the conversion copywriter for you</h2>
        <p className="text-gray-600 mb-4">{subheadline}</p>
        <a href="/about">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            About Me
          </button>
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200 overflow-hidden">
          <Image src="/images/ph.png" alt="Book Cover" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold m-5 text-black text-center">Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.services.slice(0, 3).map((svc, idx) => (
          <div key={idx} className="service-card rounded-md p-6 text-center border hover:shadow-lg transition-shadow justify-center">
            <LuGem className="mx-auto mb-4 text-teal-600" size={24} />
            <h3 className="text-xl font-semibold mb-2 text-black">{svc.title}</h3>
            <p className="text-gray-600 mb-4 text-justify">{svc.description}</p>
            <a href="/services" className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-200 hover:underline">
              More Details <HiOutlineArrowLongRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="creamBg wwa flex flex-col md:flex-row items-center py-12 px-6 md:px-12 bg-white">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="group relative w-full aspect-square bg-gray-200 overflow-hidden">
          <Image src="/images/ph.png" alt="Team" fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform" />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <div className="flex items-center gap-2 text-base md:text-lg mb-2 text-black">
          <TfiLayoutLineSolid /> <span>Who We Are</span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-black">A team with vision, conviction and skill.</h2>
        <p className="text-gray-600 mb-4">We are located in Big City which makes things easier. Visit our office and see the awesome creative team of young copywriters!</p>
        <a href="/about">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors inline-flex items-center gap-1">
            Read More <HiOutlineArrowLongRight />
          </button>
        </a>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials py-12 px-6 md:px-12 bg-white text-center">
      <TfiLayoutLineSolid className="mx-auto mb-2" size={32} />
      <h2 className="text-3xl font-bold mb-4 text-black">Testimonials</h2>
      <ImQuotesLeft className="mb-6 mx-auto text-red-500" size={32} />
      <div className="flex items-center justify-center gap-6">
        <HiOutlineArrowLongLeft className="hidden md:block" size={24} />
        <div className="max-w-2xl">
          <p className="text-gray-600 mb-6">“I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!”</p>
          <p className="font-semibold text-black">Brian Smith</p>
          <p className="text-sm text-gray-500 mb-4">Project Manager</p>
          <div className="flex justify-center space-x-4">
            {Array(3).fill('/images/ph.png').map((src, i) => (
              <div key={i} className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={src} alt={`Avatar ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
        <HiOutlineArrowLongRight className="hidden md:block" size={24} />
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="partners py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {PARTNERS.map((label, idx) => (
          <div key={idx} className="flex items-center justify-center space-x-3 text-black">
            <Image src="/images/ph.png" alt={`${label} Logo`} width={40} height={40} style={{ objectFit: "contain" }} />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
