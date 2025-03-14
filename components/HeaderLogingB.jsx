"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Us", href: "#about" },
  { name: "Join Us", href: "#join" },
  { name: "News & Events", href: "#news" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 pt-20">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
          <Image
            src="https://i.postimg.cc/nVDKF9WY/xplendev-logo-black.png" // Reemplaza con tu URL de imagen
            alt="Logo Teckware"
            width={100}
            height={50}
            priority
            className="object-contain"
          />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <p className="text-gray-600 hover:text-black transition duration-300">{link.name}</p>
            </Link>
          ))}
          <Link href="#register">
            <p className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
              Register
            </p>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
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
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
          >
            <div className="flex flex-col space-y-4 py-4 px-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <p className="text-gray-600 hover:text-black transition duration-300" onClick={toggleMenu}>
                    {link.name}
                  </p>
                </Link>
              ))}
              <Link href="#register">
                <p className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300" onClick={toggleMenu}>
                  Register
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
