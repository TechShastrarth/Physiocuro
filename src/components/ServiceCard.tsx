'use client';

import React from 'react';
import { ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon = <i className="fa-solid fa-location-dot"></i>, 
  heading = 'Default Heading', 
  description = 'Default description text goes here.', 
  animation 
}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:bg-[#4DB6AC] hover:text-white transition-colors duration-300 max-w-xs text-center">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{heading}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
