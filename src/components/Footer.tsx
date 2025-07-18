'use client';

import React from "react";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-white pt-10 pb-4 sm:px-20 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full border-[#D9D9D9] border-y-2 py-5 mb-4">
        <img src="/Logo-with-bg.png" alt="physiocurologo" className="w-80" />
        
        {/* Social Media Links Section */}
        <div className="flex justify-center items-center my-6 lg:my-0">
          <div className="flex space-x-6">
            <a
              href="mailto:info@physiocuro.com"
              className="text-[#6C6C6C] hover:text-[#4DB6AC] transition-colors duration-300 text-2xl"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.instagram.com/physiocuro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C6C6C] hover:text-[#4DB6AC] transition-colors duration-300 text-2xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574930018004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C6C6C] hover:text-[#4DB6AC] transition-colors duration-300 text-2xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/PhysioCuro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C6C6C] hover:text-[#4DB6AC] transition-colors duration-300 text-2xl"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="tel:+919967673260"
              className="text-[#6C6C6C] hover:text-[#4DB6AC] transition-colors duration-300 text-2xl"
              aria-label="Phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:items-center">
          <div className="flex gap-10 text-lg sm:mt-0 mt-4 text-[#6C6C6C] font-medium">
            <ul className="flex-col flex">
              <Link href="/about-us" className="hover:underline">
                <li>About-Us</li>
              </Link>
              <Link href="/conditions-we-treat" className="hover:underline">
                <li>conditions we treat</li>
              </Link>
              <Link href="/contact-us" className="hover:underline">
                <li>Contact</li>
              </Link>
            </ul>
            <ul className="flex-col flex">
              <Link href="/contact" className="hover:underline">
                <li>Book Now</li>
              </Link>
              <Link href="/doctors-info" className="hover:underline">
                <li>Our Doctors</li>
              </Link>
            </ul>
          </div>
          <div className="sm:ml-10 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.359320493751!2d73.08667007528601!3d19.179502082046525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950065885e0d%3A0xeea6d8377f3a05c5!2sPhysioCuro%20Physiotherapy%20%26%20Rehab!5e0!3m2!1sen!2sin!4v1750583159783!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg max-w-full"
            ></iframe>
          </div>
        </div>
      </div>
      
      <h3>© 2025 Physiocuro .All rights reserved.</h3>
    </div>
  );
};

export default Footer;
