'use client';

import React from "react";
import { ServiceModalProps } from "@/types";

const ServiceModal: React.FC<ServiceModalProps> = ({ showModal, setShowModal, service }) => {
  if (!showModal || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-auto flex bg-black/40"
      onClick={() => setShowModal(false)}
    >
      <div 
        className="bg-[#DFFEFB] backdrop-blur-sm bg-opacity-[63%] my-[2%] sm:my-[4%] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 max-w-screen h-auto mx-[5%] sm:mx-[8%] lg:mx-[10%] relative max-h-[90vh] overflow-y-auto scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-3 sm:top-3 sm:right-4 text-2xl sm:text-3xl lg:text-4xl text-[#4DB6AC] font-bold"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>
        
        <h1 className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold underline mb-4">
          {service.title}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[4%]">
          <img
            src={service.modalImage}
            alt={service.title}
            className="w-full lg:w-[40%] rounded-xl"
          />
          <div className="text-sm sm:text-lg lg:text-xl">
            <p>
              <span className="font-bold">
                {service.description.split(' ')[0]} {service.description.split(' ')[1]} {service.description.split(' ')[2]}
              </span>{" "}
              {service.description.split(' ').slice(3).join(' ')}
            </p>
            {service.benefits && (
              <ul className="list-disc pl-6 mt-4 font-medium">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {service.additionalInfo && Array.isArray(service.additionalInfo) && (
          <>
            {service.additionalInfo.map((info, index) => (
              <div key={index}>
                <h2 className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold mt-6">
                  {info.title}
                </h2>
                <p className="text-sm sm:text-lg lg:text-xl">
                  {info.content}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceModal;
