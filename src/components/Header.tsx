"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import "./style.css";
import Content from "./content.json"

export default function Header() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [portfolioLocked, setPortfolioLocked] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesLocked, setServicesLocked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // reset on route change
  useEffect(() => {
    setLoading(false);
    setPortfolioOpen(false);
    setPortfolioLocked(false);
    setServicesOpen(false);
    setServicesLocked(false);
  }, [pathname]);

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // outside-click handler for both dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        portfolioOpen &&
        portfolioRef.current &&
        !portfolioRef.current.contains(target)
      ) {
        setPortfolioOpen(false);
        setPortfolioLocked(false);
      }
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(target)
      ) {
        setServicesOpen(false);
        setServicesLocked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [portfolioOpen, servicesOpen]);

  const handleNavigation = (href: string) => {
    setLoading(true);
    router.push(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="hidden lg:flex items-center justify-between mx-auto max-w-7xl px-4 py-3">
          <div
            className="text-2xl md:text-3xl font-bold cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            BENI.
          </div>

          <nav className="flex items-center space-x-8">
            {/* Home */}
            <NavLink href="/" onClick={() => handleNavigation("/")} className="navLink">
              Home
            </NavLink>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              ref={portfolioRef}
              onMouseEnter={() => !portfolioLocked && setPortfolioOpen(true)}
              onMouseLeave={() => !portfolioLocked && setPortfolioOpen(false)}
            >
              <button
                className="navLink"
                onClick={(e) => {
                  e.preventDefault();
                  setPortfolioOpen(true);
                  setPortfolioLocked(true);
                }}
              >
                Portfolio
              </button>

              {portfolioOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
                  {["All Projects", "Advertising", "Branding", "Lifestyle"].map(
                    (label) => (
                      <button
                        key={label}
                        onClick={() => handleNavigation("/portfolio")}
                        className="block w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        {label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => !servicesLocked && setServicesOpen(true)}
              onMouseLeave={() => !servicesLocked && setServicesOpen(false)}
            >
              <button
                className="navLink"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(true);
                  setServicesLocked(true);
                }}
              >
                Services
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
                  {Content.services.slice(0, 9).map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation("/services")}
                      className="block w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            <NavLink href="/blog" onClick={() => handleNavigation("/blog")} className="navLink">
              Blog
            </NavLink>
            <NavLink href="/about" onClick={() => handleNavigation("/about")} className="navLink">
              About Me
            </NavLink>
            <NavLink href="/contact" onClick={() => handleNavigation("/contact")} className="navLink">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between lg:hidden">
          <div className="text-2xl md:text-3xl font-bold" onClick={() => handleNavigation("/")} >BENI.</div>
          <nav className="title flex space-x-6">
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <HiOutlineMenuAlt4 />
            </button>
            <Link
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <BsBag size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <CiSearch size={24} />
            </Link>
          </nav>
        </div>
        {/* Off-Canvas Menu */}
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
            <NavLink
              href="/"
              className="navLink"
              onClick={() => handleNavigation("/")}
            >
              Home
            </NavLink>
            <NavLink
              href="/portfolio"
              className="navLink"
              onClick={() => handleNavigation("/portfolio")}
            >
              Portfolio
            </NavLink>
            <NavLink
              href="/services"
              className="navLink"
              onClick={() => handleNavigation("/services")}
            >
              Services
            </NavLink>
            <NavLink
              href="/blog"
              className="navLink"
              onClick={() => handleNavigation("/blog")}
            >
              Blog
            </NavLink>
            <NavLink
              href="/about"
              className="navLink"
              onClick={() => handleNavigation("/about")}
            >
              About Me
            </NavLink>
            <NavLink
              href="/contact"
              className="navLink"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-xl font-semibold text-white">Loading...</div>
        </div>
      )}
    </>
  );
}
