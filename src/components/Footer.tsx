"use client";
// import Link from "next/link";

export default function Footer () {
    return (
        <footer className="mt-auto py-6 px-6 md:px-12 bg-black text-white text-center">
            <p className="text-sm">
            © {new Date().getFullYear()} HELIO.
            </p>
            <p className="text-sm">
            All rights reserved.
            </p>
        </footer>
    )
}