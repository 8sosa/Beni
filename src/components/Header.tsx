"use client";
import Link from "next/link";
import './style.css'

export default function Header () {
    return (
      <header className="flex justify-between items-center px-10 py-10 shadow-sm">
        <div className="text-3xl font-bold">BENI.</div>
        <nav className="flex space-x-6">
            <Link
            href="#"
            className="text-gray-700 hover:text-black transition-colors"
            >
            Home
            </Link>
            <Link
            href="#"
            className="text-gray-700 hover:text-black transition-colors"
            >
            About
            </Link>
            <Link
            href="#"
            className="text-gray-700 hover:text-black transition-colors"
            >
            Services
            </Link>
            <Link
            href="#"
            className="text-gray-700 hover:text-black transition-colors"
            >
            Contact
            </Link>
        </nav>
    </header>
    )
}