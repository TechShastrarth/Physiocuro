'use client';

import React, { useState, useEffect } from "react";
import { Navbar, TreatmentCard, ServiceModal, Footer } from "@/components";
import { servicesData } from "@/data/servicesData";

export default function ConditionsWeTreat() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="max-w-screen min-h-screen font-rajdhani text-[#074264]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <div className="pt-20 mx-[4%] sm:mx-[8%] lg:mx-[12%] my-[2%]">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold mb-4">
          Conditions We Treat
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-8">
          We specialize in ACL rehabilitation, acupuncture, consultations,
          cupping therapy, dry needling, electrotherapy, kinesiology taping, and
          manual therapy to help manage pain, improve mobility, and support
          recovery.
        </p>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden lg:flex flex-col gap-4 lg:gap-6">
          {/* First row - 3 cards */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 lg:gap-6">
            {servicesData.slice(0, 3).map((service, index) => (
              <TreatmentCard
                key={`${service.id}-${index}`}
                service={service}
                onLearnMore={() => handleLearnMore(service)}
                className="w-full sm:w-[30%]"
              />
            ))}
          </div>
          
          {/* Second row - 3 cards */}
          {servicesData.length > 3 && (
            <div className="flex flex-col sm:flex-row justify-between gap-4 lg:gap-6">
              {servicesData.slice(3, 6).map((service, index) => (
                <TreatmentCard
                  key={`${service.id}-${index + 3}`}
                  service={service}
                  onLearnMore={() => handleLearnMore(service)}
                  className="w-full sm:w-[30%]"
                />
              ))}
            </div>
          )}
          
          {/* Third row - 2 cards centered */}
          {servicesData.length > 6 && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
              {servicesData.slice(6, 8).map((service, index) => (
                <TreatmentCard
                  key={`${service.id}-${index + 6}`}
                  service={service}
                  onLearnMore={() => handleLearnMore(service)}
                  className="w-full sm:w-[30%]"
                />
              ))}
            </div>
          )}
        </div>

        {/* Tablet and Mobile view - Horizontal scroller */}
        <div className="lg:hidden">
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#4DB6AC] scrollbar-track-gray-200 hover:scrollbar-thumb-[#3a9691]">
            <div className="flex gap-4 min-w-max px-2">
              {servicesData.map((service, index) => (
                <TreatmentCard
                  key={`${service.id}-${index}`}
                  service={service}
                  onLearnMore={() => handleLearnMore(service)}
                  className="w-[280px] sm:w-[320px] flex-shrink-0 transform hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-sm text-[#6C6C6C] bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <svg className="w-4 h-4 text-[#4DB6AC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="font-medium">Swipe to explore all treatments</span>
              <svg className="w-4 h-4 text-[#4DB6AC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal 
        showModal={showModal}
        setShowModal={setShowModal}
        service={selectedService}
      />
      
      <Footer />
    </div>
  );
}
