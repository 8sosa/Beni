"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import "./style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold">BENI.</div>
        <nav className="title flex space-x-6">
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <HiOutlineMenuAlt4 />
          </button>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            <BsBag size={24} />
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            <CiSearch size={24} />
          </Link>
        </nav>
      </div>

      {/* Off-Canvas Menu (visible on mobile/tablets) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black transform 
          ${menuOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-end px-4 py-3">
          <button
            className="text-3xl focus:outline-none text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiOutlineX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-center items-end title">
          <NavLink href="/" className="navLink">
            Home
          </NavLink>
          <NavLink href="/portfolio" className="navLink">
            Portfolio
          </NavLink>
          <NavLink href="/services" className="navLink">
            Services
          </NavLink>
          <NavLink href="/blog" className="navLink">
            Blog
          </NavLink>
          <NavLink href="/about" className="navLink">
            About Me
          </NavLink>
          <NavLink href="/contact" className="navLink">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
