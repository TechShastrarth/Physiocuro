'use client';

import React from "react";

interface LocationProps {}

const Location: React.FC<LocationProps> = () => {
  return (
    <div className="flex items-center sm:mx-20 mx-5 gap-20">
      <div className="flex flex-col text-justify lg:w-1/2 items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center text-2xl font-semibold">
            <img src="/mumbai-vector.png" alt="mumbai" />
            <span className="relative -z-10 bottom-3">Mumbai</span>
          </div>
          <div className="flex flex-col items-center text-2xl font-semibold ">
            <img src="/Karnataka-vector.png" alt="mumbai" />
            <span>Karnataka</span>
          </div>
        </div>
        <p className="sm:text-2xl text-lg font-medium">
          <span className="text-[#4DB6AC] font-bold">At Physiocuro</span> we
          deliver personalized, expert physiotherapy care to help you move
          better and heal faster. With 4+ partner clinics in Mumbai and 2 in
          Karnataka, we make quality treatment accessible. Our team uses
          advanced, evidence-based techniques to reduce pain, restore mobility,
          and support your recovery every step of the way.
        </p>
      </div>
      <img src="/india-map.png" alt=" india" className="lg:block hidden" />
    </div>
  );
};

export default Location;
