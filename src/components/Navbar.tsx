"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  // Check if we're on pages that should have transparent navbar (only home page)
  const isTransparentPage = pathname === "/";

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-w-screen sticky top-0 z-30 flex items-center justify-around font-rajdhani px-4 py-2 transition-colors duration-300 ${
        menuOpen || isScrolled || !isTransparentPage
          ? "bg-white shadow text-[#102A43]"
          : "bg-black/20 text-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          className={`text-xl cursor-pointer flex items-center gap-2 font-medium focus:outline-none ${
            menuOpen || isScrolled || !isTransparentPage ? "text-[#102A43]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars fa-md"></i>
          <span className="">Menu</span>
        </button>
      </div>
      <img
        onClick={() => {
          router.push("/");
        }}
        src="/horizontal logo.png"
        alt="physiocuro logo"
        className="md:w-80 w-48 sm:pt-2 cursor-pointer"
      />

      {/* Desktop - Show phone number */}
      <a
        href="tel:+919967673260"
        className={`text-xl lg:flex hidden items-center gap-2 py-2 font-medium ${
          menuOpen || isScrolled || !isTransparentPage ? "text-[#102A43]" : "text-white"
        }`}
      >
        <i className="fa-solid fa-phone fa-md"></i>
        +91 996 767 3260
      </a>

      {/* Mobile - Show Call Us */}
      <a
        href="tel:+919967673260"
        className="text-xl md:flex lg:hidden hidden items-center gap-2 py-2 text-white bg-[#4DB6AC] px-4 rounded-xl hover:bg-[#26A69A] transition-colors duration-300"
      >
        <i className="fa-solid fa-phone fa-md"></i>
        Call Us
      </a>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-t-2 border-[#D9D9D9] bg-white shadow-lg flex flex-col sm:items-center  px-10 py-4 z-40 animate-slide-in-x">
          <ul className="flex flex-col sm:items-center sm:flex-row gap-4 text-xl font-semibold text-[#102A43]">
            <Link href="/">
              <li
                className={`hover:text-[#4DB6AC] cursor-pointer ${
                  pathname === "/" ? "text-[#4DB6AC]" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/about-us">
              <li
                className={`hover:text-[#4DB6AC] cursor-pointer ${
                  pathname === "/about-us" ? "text-[#4DB6AC]" : ""
                }`}
              >
                About Us
              </li>
            </Link>
            <Link href="/doctors-info">
              <li
                className={`hover:text-[#4DB6AC] cursor-pointer ${
                  pathname === "/doctors-info" ? "text-[#4DB6AC]" : ""
                }`}
              >
                Our Doctors
              </li>
            </Link>
            <Link href="/conditions-we-treat">
              <li
                className={`hover:text-[#4DB6AC] cursor-pointer ${
                  pathname === "/conditions-we-treat" ? "text-[#4DB6AC]" : ""
                }`}
              >
                Conditions we treat
              </li>
            </Link>
            <Link href="/contact-us">
              <li
                className={`hover:text-[#4DB6AC] cursor-pointer ${
                  pathname === "/contact-us" ? "text-[#4DB6AC]" : ""
                }`}
              >
                Contact
              </li>
            </Link>
            <a
              href="tel:+919967673260"
              className="text-xl md:hidden sm:ml-20  flex items-center justify-center gap-2 py-2 text-white bg-[#4DB6AC] px-4 rounded-xl hover:bg-[#26A69A] transition-colors duration-300"
            >
              <i className="fa-solid fa-phone fa-md"></i>Call Us
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
