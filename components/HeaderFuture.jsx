"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "NFT Markets", href: "#markets" },
  { name: "Shop", href: "#shop" },
  { name: "About Us", href: "#about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 shadow-sm z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="Teckware Logo" width={50} height={50} />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <p className="text-gray-300 hover:text-white transition duration-300">{link.name}</p>
            </Link>
          ))}
          <Link href="#explore">
            <p className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition duration-300">
              Explore Now
            </p>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 shadow-md md:hidden"
          >
            <div className="flex flex-col space-y-4 py-4 px-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <p className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                    {link.name}
                  </p>
                </Link>
              ))}
              <Link href="#explore">
                <p className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition duration-300" onClick={toggleMenu}>
                  Explore Now
                </p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
