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

// Images from public folder (Next.js)
const Dr_Arjun: string = "/Dr Arjun.JPG";
const Dr_Adarsh: string = "/Dr Adarsh.jpg";


function DocCard(): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  React.useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 1024); // tablet and mobile
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpand = (index: number): void => {
    if (!isMobile) {
      setExpanded(index === expanded ? -1 : index);
    }
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const cardVariants: CardVariants = {
    expanded: {
      width: "300px",
      
    },
    collapsed: {
      width: "180px",
    },
  };

  const doctors: string[] = [Dr_Arjun, Dr_Adarsh];

  // Debug: Log the image paths
  React.useEffect(() => {
    console.log('Doctor image paths:', doctors);
  }, []);

  const doctorNames: string[] = [
    "Dr.Arjun Upadhyay",
    "Dr.Adarsh kugatoli",
  ];

  const doctorDesignations: string[] = [
    "PHYSIOTHERAPIST (cardio respiratory )",
    "BPT COMT (CAPRI) Dry Needling therapist (HPE UK)"
  ];
  
  const doctorDetails: string[] = [
    "A decade of dedication, thousands of recoveries, and one mission — helping you move without pain. Dr. Arjun Upadhyay blends expert techniques with personal care across neuro, ortho, and sports rehab.",
    "Experienced physiotherapist specializing in sports injuries and rehabilitation. Helping patients recover and return to their active lifestyle through personalized treatment plans.",
  ];

  // Check if we have more than 2 doctors for expandable behavior
  const hasMultipleDoctors: boolean = doctors.length > 2;

  return (
    <section className="py-[5%] relative">
      {hasMultipleDoctors ? (
        // Show expandable/carousel behavior for more than 2 doctors
        <>
          {isMobile ? (
            // Carousel for mobile/tablet
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Carousel container */}
              <div className="relative h-[500px] overflow-hidden rounded-2xl mx-[4%]">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {doctors.map((doctor: string, index: number) => (
                    <div
                      key={index}
                      className="min-w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${doctor})` }}
                    >
                      {/* Black overlay with content */}
                      <div className="absolute inset-0  flex flex-col justify-center items-center text-white p-6">
                        <div className="text-left w-full max-w-md">
                          <h3 className="text-3xl font-bold mb-1 text-[#4DB6AC]">{doctorNames[index]}</h3>
                          <p className="text-base text-gray-300 mb-4">{doctorDesignations[index]}</p>
                          <p className="text-sm leading-relaxed text-gray-200">
                            {doctorDetails[index]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Previous button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {doctors.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-[#4DB6AC]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Expandable cards for desktop
            <div className="h-full flex flex-col md:flex-row justify-center items-center gap-5">
              {doctors.map((doctor: string, index: number) => (
                <motion.div
                  key={index}
                  className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-2xl relative overflow-hidden ${index === expanded ? 'expanded': ''}`}
                  variants={cardVariants}
                  initial="collapsed"
                  animate={expanded === index ? "expanded" : "collapsed"}
                  transition={{ duration: 0.3 }}
                  onClick={() => toggleExpand(index)}
                  style={{ backgroundImage: `url(${doctor})` }}
                >
                  {/* Black overlay when expanded */}
                  {expanded === index && (
                    <motion.div
                      className="absolute inset-0  rounded-2xl flex flex-col justify-center items-center text-white p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-left w-full"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <h3 className="text-3xl font-bold mb-1 text-[#4DB6AC]">{doctorNames[index]}</h3>
                        <p className="text-base text-gray-300 mb-4">{doctorDesignations[index]}</p>
                        <p className="text-sm leading-relaxed text-gray-200">
                          {doctorDetails[index]}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Normal hover behavior for 2 or fewer doctors
        <div className="h-full flex flex-col md:flex-row justify-center items-center gap-8">
          {doctors.map((doctor: string, index: number) => (
            <div
              key={index}
              className="group relative h-[500px] w-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Doctor Image */}
              <Image
                src={doctor}
                alt={doctorNames[index]}
                fill
                className="object-cover"
                sizes="350px"
              />
              
              {/* Hover overlay with doctor info */}
              <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-center items-center p-6 z-10">
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
                  <h3 className="text-3xl font-bold mb-3 text-[#4DB6AC]">{doctorNames[index]}</h3>
                  <p className="text-lg text-gray-300 mb-4">{doctorDesignations[index]}</p>
                  <p className="text-sm leading-relaxed text-gray-200 max-w-xs">
                    {doctorDetails[index]}
                  </p>
                </div>
              </div>
              
              {/* Doctor name badge - hidden on hover */}
              <div className="absolute bottom-4 left-4 bg-black/70 bg-opacity-70 px-4 py-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-10">
                <h4 className="text-white font-semibold text-lg">{doctorNames[index]}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default DocCard;
