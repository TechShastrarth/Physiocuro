'use client';

import React from "react";
import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({ 
  icon = <i className="fa-solid fa-location-dot"></i>, 
  heading = 'Default Heading', 
  description = 'Default description text goes here.', 
  animation, 
  padding = 'py-8' 
}) => {
  return (
    <div 
      data-aos={animation} 
      className={`flex flex-col max-w-[256px] sm:mt-0 mt-10 text-center text-[#046D5D] hover:bg-[#046D5D] hover:text-white bg-white xl:py-16 ${padding} px-4 rounded-2xl shadow-lg transition duration-300 ease-in-out`}
    >
      {icon}
      <h2 className="text-2xl font-bold mt-4">{heading}</h2>
      <p className="xl:text-base lg:text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default Card;
