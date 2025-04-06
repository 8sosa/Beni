"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";
import "./style.css";

export default function Header() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [portfolioLocked, setPortfolioLocked] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesLocked, setServicesLocked] = useState(false);
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
                  {["Web Development", "UI/UX Design", "Marketing"].map((label) => (
                    <button
                      key={label}
                      onClick={() => handleNavigation("/services")}
                      className="block w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      {label}
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
      </header>

      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-xl font-semibold text-white">Loading...</div>
        </div>
      )}
    </>
  );
}
