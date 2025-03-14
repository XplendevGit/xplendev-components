"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://i.postimg.cc/nVDKF9WY/xplendev-logo-black.png"
            alt="CalendArt Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-600 transition my-auto"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl text-white hover:opacity-90 transition"
          >
            Try Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl text-white hover:opacity-90 transition"
                onClick={() => setIsOpen(false)}
              >
                Try Free
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
