"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import "./style.css";

export default function Header() {
  return (
    <header className="header flex justify-between items-center px-6 md:px-10 py-4 md:py-10 shadow-sm">
      <div className="text-2xl md:text-3xl font-bold">BENI.</div>
      <nav className="flex space-x-4 md:space-x-6">
        <Link href="#" className="text-gray-700 hover:text-black transition-colors">
          <HiOutlineMenuAlt3 size={24} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black transition-colors">
          <BsBag size={24} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black transition-colors">
          <CiSearch size={24} />
        </Link>
      </nav>
    </header>
  );
}