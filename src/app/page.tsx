'use client';

import React from "react";
import Card from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";
import GoogleReviewWidget from "@/components/GoogleReviewWidget";
import Footer from "@/components/Footer";
import OpenCard from "@/components/OpenCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Navbar } from "@/components";

// Client-side rendered page optimized for static export and SEO
export default function Home() {
  return (
    <main className="max-w-screen min-h-screen font-rajdhani scroll-smooth text-[#074264]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/BG-VIDEO.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black opacity-[43%]"></div>

        {/* Hero Text on Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Redefining{" "}
            <span className="text-[#4DB6AC]">Recovery Restoring</span> Life
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl">
            Restore your mobility, reduce pain, and get back to what you love
            with our personalized treatment plans
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact-us"
              className="border-2 border-white hover:bg-white hover:text-[#102A43] text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 inline-block"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Social Media Floater at bottom center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-12 bg-black/10 rounded-full px-6 py-3">
            <a
              href="mailto:info@physiocuro.com"
              className="text-white hover:text-[#4DB6AC] transition-colors duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/physiocuro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6AC] transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574930018004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6AC] transition-colors duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://x.com/PhysioCuro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6AC] transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="h-auto py-10 sm:px-20 px-10 bg-[#efefef] text-start max-w-screen flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <h2 className="xl:text-5xl text-4xl font-semibold">
            Why Choose PHYSIOCURO
          </h2>
          <p className="xl:text-xl text-base">
            Whether you're recovering from an injury, managing a chronic
            condition, or seeking to improve your overall physical performance,
            Physiocuro offers evidence-based treatments designed for your unique
            needs.
          </p>
        </div>
        <div className="sm:flex-row flex flex-col items-center sm:gap-5 w-full">
          <Card
            icon={<i className="fa-solid fa-location-dot fa-xl"></i>}
            heading="Convenient location in Dombivli East"
            description="We provide services at your location for your convenience."
          />
          <Card
            icon={<i className="fa-solid fa-user-md fa-xl"></i>}
            heading="Modern Therapy Equipment"
            description="Our team consists of certified and experienced physiotherapists."
          />
          <Card
            icon={<i className="fa-solid fa-heartbeat fa-xl"></i>}
            heading="Personalized Care and Treatment plan"
            description="Each treatment plan is tailored to your unique needs."
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="exp bg-[url('/review-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat bg-opacity-[90%] h-auto text-white text-center py-10">
        <h1 className="sm:text-4xl text-2xl font-semibold">
          <span className="text-[#FF5E5B] underline">Till date</span> , we have
          seen an overwhelming response to our treatment
        </h1>

        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 mx-20 my-10">
          <div
            data-aos="fade"
            className="border-r-2 border-gray-300 sm:border-b-0 border-b-2 border-opacity-[10%] py-20 px-10 flex flex-col items-center gap-4 justify-center"
          >
            <h1 className="text-7xl font-bold flex items-center">
              <AnimatedCounter end={1200} suffix="+" duration={2500} />
            </h1>
            <h2 className="text-2xl font-medium">Happy Patients</h2>
          </div>
          <div
            data-aos="fade"
            className="border-l-2 border-gray-300 py-10 border-opacity-[10%]  px-10 flex flex-col items-center justify-center "
          >
            <h1 className="text-7xl font-bold">
              <AnimatedCounter end={100} suffix="+" duration={2000} />
            </h1>
            <h2 className="text-2xl font-medium">
              <span className="">Locations Served</span>
            </h2>
          </div>
          <div
            data-aos="fade"
            className="row-start-2 border-t-2 border-r-2 border-opacity-[10%] border-gray-300 py-10 px-10 flex flex-col items-center justify-center"
          >
            <h1 className="text-7xl font-bold">
              <AnimatedCounter end={10} suffix="+" duration={1500} />
            </h1>
            <h2 className="text-2xl font-medium">Clinics</h2>
          </div>
          <div
            data-aos="fade"
            className="row-start-2 border-t-2 border-l-2 border-opacity-[10%] border-gray-300 py-10 px-10 flex flex-col items-center justify-center"
          >
            <h1 className="text-7xl font-bold">
              <AnimatedCounter end={50} suffix="+" duration={1800} />
            </h1>
            <h2 className="text-2xl font-medium">Physiotherapists</h2>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[#D9D9D9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="ACL Rehabilitation"
              description="Helps you get strength and movement back after an ACL injury."
            />
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="Acupuncture"
              description="Traditional acupuncture therapy for pain relief and wellness."
            />
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="Cupping Therapy"
              description="Ancient therapy technique for muscle recovery and pain relief."
            />
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="Advanced Electrotherapy"
              description="Modern electrotherapy treatments for enhanced recovery."
            />
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="Manual Therapy"
              description="Hands-on treatment techniques for improved mobility."
            />
            <ServiceCard
              icon={
                <i className="fa-solid fa-notes-medical text-green-600 text-4xl mb-2"></i>
              }
              heading="Dry Needling"
              description="Targeted treatment for trigger points and muscle tension."
            />
          </div>
          <div className="text-center mt-8">
            <a
              href="/conditions-we-treat"
              className="text-lg text-[#102A43] border-b border-[#102A43] hover:text-[#4DB6AC] transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[url('/location-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed h-auto py-16 lg:px-20 px-4 lg:flex-row flex-col flex lg:items-center lg:justify-center">
        <div className="text-justify lg:w-1/2 text-white lg:pl-10">
          <h1 className="text-6xl font-bold text-white">
            <span className="text-[#49B649]">We</span> Are At
          </h1>
          <article>
            <p>
              We are proud to serve our communities with accessible and expert
              physiotherapy care across multiple locations. You can visit us at
              Pain Clinic Physiotherapy and Rehabilitation Center in Karwar,
              Karnataka, or at the Spine Clinic Physiotherapy and Neuro
              Development Center in Majali, Karnataka. For those in Maharashtra,
              PhysioCuro Physiotherapy & Rehabilitation Center in Dombivli
              offers comprehensive rehabilitation services. Each center is
              equipped with modern facilities and experienced professionals
              dedicated to helping you move better and live pain-free.
            </p>
          </article>
        </div>
        <div className="flex sm:flex-row max-w-full flex-col items-center lg:mx-10 lg:mt-0 mt-5 gap-10 w-full ">
          {/* <OpenCard/> */}

          <a href="https://maps.app.goo.gl/tyP7vETT8Zf2FFpH6">
            <Card
              heading="PhysioCuro Physiotherapy & Rehabilitation Center"
              description="Dombivli, Maharashtra"
            />
          </a>
          <a href="https://maps.app.goo.gl/ggZvNQMYD8M2Q9A18">
            <Card
              heading="Pain Clinic Physiotherapy and Rehabilitation Center"
              description="Karwar,Karnataka"
            />
          </a>
          <a href="https://maps.app.goo.gl/T4YruYGWmcYmyNmNA">
            <Card
              heading="Spine Clinic Physiotherapy, Neuro Development Center"
              description="Majali, Karnataka"
            />
          </a>
        </div>
      </section>
      {/* Google Reviews Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            What Our Patients Say
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Read authentic reviews from our satisfied patients who have
              experienced exceptional care at Physiocuro.
            </p>
            {/* <GoogleReviewWidget /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
