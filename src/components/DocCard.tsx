"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Type definitions
interface Doctor {
  image: string;
  name: string;
  designation: string;
  details: string;
}

interface CardVariants extends Variants {
  expanded: {
    width: string;
  };
  collapsed: {
    width: string;
  };
}

function DocCard(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  // Doctor data - Updated with comprehensive SEO-optimized details
  const doctors: Doctor[] = [
    {
      image: "/Dr Arjun.JPG",
      name: "Dr. Arjun Upadhyay",
      designation: "PHYSIOTHERAPIST (Cardio Respiratory Specialist)",
      details:
        "A decade of dedication, thousands of recoveries, and one mission — helping you move without pain. Dr. Arjun Upadhyay blends expert techniques with personal care across neuro, ortho, and sports rehabilitation.",
    },
    {
      image: "/Dr Adarsh.jpg",
      name: "Dr. Adarsh Kugatoli",
      designation: "BPT COMT (CAPRI) | Dry Needling Therapist (HPE UK)",
      details:
        "Experienced physiotherapist specializing in sports injuries and rehabilitation. Helping patients recover and return to their active lifestyle through personalized treatment plans and advanced dry needling techniques.",
    },
    {
      image: "/DR Aashlesha Desai.jpeg",
      name: "Dr. Aashlesha Desai",
      designation: "PHYSIOTHERAPIST | Osteopathy & Manipulative Therapy (FOMT)",
      details:
        "Specialist in sports rehabilitation, post-operative recovery, and Osteopathy manipulative therapy (FOMT). Provides personalized care using advanced therapies like dry needling, cupping, and kinesio taping for faster, effective recovery.",
    },
    {
      image: "/Dr Sherin Mathew.jpg",
      name: "Dr. Sherin Mathew",
      designation: "Masters in Musculoskeletal Sciences",
      details:
        "Extensive clinical experience in clinic and hospital settings, specializing in orthopedic rehabilitation, women's health physiotherapy, and sports injury management with evidence-based treatment approaches.",
    },
    {
      image: "/Dr Kinal Kothari.png",
      name: "Dr. Kinal Kothari",
      designation: "Master's in Musculoskeletal & Sports Injuries | 8+ Years Experience",
      details:
        "Knee replacement expert & running analysis specialist with 8 years experience. Specializes in manual therapy, McKenzie therapy, myofascial release, IASTM, and Pilates. Offers orthopedic services, pre/post-operative rehabilitation, sports rehab, home visits, online consultations, corporate wellness programs, and sports event physiotherapy coverage for cricket, football & more.",
    },
  ];

  // Add error handling for images
  const handleImageError = (index: number) => {
    console.error(
      `Failed to load image for doctor ${index}: ${doctors[index].image}`
    );
  };

  return (
    <section className="py-[5%] relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#074264]">
          Meet Our Expert Team
        </h2>
        
        {/* Desktop/Tablet Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor: Doctor, index: number) => (
            <motion.div
              key={index}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Doctor Image */}
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.designation} at Physiocuro`}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
                priority={index < 3}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Doctor info - always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 text-[#4DB6AC]">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3 font-medium">
                  {doctor.designation}
                </p>
                
                {/* Details - show on hover */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs leading-relaxed text-gray-300">
                    {doctor.details.length > 150 
                      ? `${doctor.details.substring(0, 150)}...` 
                      : doctor.details}
                  </p>
                </div>
              </div>

              {/* Hover overlay for better readability */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Carousel container */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {doctors.map((doctor: Doctor, index: number) => (
                  <div key={index} className="min-w-full h-full relative">
                    {/* Doctor Image */}
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.designation} at Physiocuro`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(index)}
                      priority={index === 0}
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 text-[#4DB6AC]">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-gray-200 mb-4 font-medium">
                          {doctor.designation}
                        </p>
                        <p className="text-xs leading-relaxed text-gray-300">
                          {doctor.details.length > 200 
                            ? `${doctor.details.substring(0, 200)}...` 
                            : doctor.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Previous doctor"
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Next doctor"
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide indicator */}
              <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                {currentSlide + 1} / {doctors.length}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {doctors.map((_: Doctor, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-[#4DB6AC] scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to doctor ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe instruction */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Swipe or tap arrows to see more doctors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocCard;
