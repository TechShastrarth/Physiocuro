'use client';

import React from "react";
import { TreatmentCardProps } from "@/types";

const TreatmentCard: React.FC<TreatmentCardProps> = ({ service, onLearnMore, className = "" }) => {
  return (
    <div className={`bg-[#DFFEFB] flex flex-col rounded-xl border-2 border-[#6C6C6C]/11 shadow-2xl w-full max-w-sm mx-auto h-[320px] ${className}`}>
      <div className="flex justify-center items-center py-3 bg-[#DFFEFB] rounded-t-xl">
        <img 
          src={service.cardImage} 
          alt={service.title} 
          className="w-24 h-24 object-cover"
        />
      </div>
      <div className="w-full px-4 py-3 text-sm sm:text-base bg-white flex flex-col flex-grow rounded-b-xl">
        <h1 className="text-lg sm:text-xl font-bold mb-2 break-words hyphens-auto leading-tight">{service.title}</h1>
        <p className="mb-3 leading-relaxed break-words text-gray-700 flex-grow text-sm">{service.shortDescription}</p>
        <button
          className="text-[#4DB6AC] font-medium hover:font-bold transition-all duration-200 text-sm self-start"
          onClick={onLearnMore}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default TreatmentCard;
