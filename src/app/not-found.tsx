'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components";

export default function NotFound() {
  // Set page title
  useEffect(() => {
    document.title = "Page Not Found - PhysioCuro";
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen font-rajdhani bg-gradient-to-br from-[#f8fffe] to-[#e6f7f5] text-[#074264]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen pt-20 px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Animation */}
          <motion.div
            className="mb-8"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-bold text-[#4DB6AC] mb-4"
              variants={itemVariants}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Main Message */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            The page you're looking for seems to have wandered off. Don't worry, 
            even the best physiotherapists sometimes take a wrong turn!
          </motion.p>

          {/* Error Icon with Animation */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-24 h-24 mx-auto bg-[#4DB6AC] rounded-full flex items-center justify-center">
              <i className="fas fa-user-injured text-3xl text-white"></i>
            </div>
          </motion.div>

          {/* Helpful Suggestions */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#074264]">
              Let's get you back on track:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fffe] transition-colors duration-200"
              >
                <i className="fas fa-home text-[#4DB6AC]"></i>
                <span>Go to Homepage</span>
              </Link>
              <Link 
                href="/about-us"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fffe] transition-colors duration-200"
              >
                <i className="fas fa-users text-[#4DB6AC]"></i>
                <span>About Us</span>
              </Link>
              <Link 
                href="/conditions-we-treat"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fffe] transition-colors duration-200"
              >
                <i className="fas fa-stethoscope text-[#4DB6AC]"></i>
                <span>Our Services</span>
              </Link>
              <Link 
                href="/doctors-info"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0fffe] transition-colors duration-200"
              >
                <i className="fas fa-user-md text-[#4DB6AC]"></i>
                <span>Our Doctors</span>
              </Link>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#4DB6AC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a9691] transition-colors duration-300"
              >
                <i className="fas fa-home"></i>
                Back to Home
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border-2 border-[#4DB6AC] text-[#4DB6AC] px-8 py-3 rounded-lg font-semibold hover:bg-[#4DB6AC] hover:text-white transition-all duration-300"
              >
                <i className="fas fa-phone"></i>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <i className="fas fa-crutch text-6xl text-[#4DB6AC]"></i>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <i className="fas fa-wheelchair text-5xl text-[#4DB6AC]"></i>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
