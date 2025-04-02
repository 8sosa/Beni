"use client";
// import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookF, FaXTwitter, FaBehance, FaDribbble } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer mt-auto bg-black text-white">
      {/* Top Row */}
      <div className="footerTop container mx-auto py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Office Column */}
        <div className="footerTopCol">
          <h4 className="font-semibold text-lg mb-4">Office</h4>
          <p className="colItem">2place</p>
          <p className="colItem">Veijuhgfcfghjuik</p>
          <p className="colItem">invbhgfc@wertg.vcpo</p>
          <p className="colItem">+091419419419</p>
        </div>

        {/* Links Column */}
        <div className="footerTopCol">
          <h4 className="font-semibold text-lg mb-4">Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/portfolio" className="colItem">Portfolio</a>
            </li>
            <li>
              <a href="/services" className="colItem">Service</a>
            </li>
            <li>
              <a href="/blog" className="colItem">Blog</a>
            </li>
            <li>
              <a href="/about" className="colItem">About Us</a>
            </li>
            <li>
              <a href="/contact" className="colItem">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="footerTopCol">
          <h4 className="font-semibold text-lg mb-4">Socials</h4>
          <ul className="socials space-y-2">
            <li>
              <a href="#" className="colItem flex items-center">
                <FaFacebookF className="socialsIcon" size={18} /> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="colItem flex items-center">
                <FaXTwitter className="socialsIcon" size={18} /> X
              </a>
            </li>
            <li>
              <a href="#" className="colItem flex items-center">
                <FaDribbble className="socialsIcon" size={18} /> Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="colItem flex items-center">
                <FaBehance className="socialsIcon" size={18} /> Behance
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footerTopCol">
          <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
          <div className="flex items-center">
            <button className="subBtn bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2">
              Subscribe <LiaTelegramPlane size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footerBottom container mx-auto py-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-left">
          © {new Date().getFullYear()} HELIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
