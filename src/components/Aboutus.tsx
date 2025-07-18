'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { AboutusProps } from "@/types";

const Aboutus: React.FC<AboutusProps> = () => {
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col mx-4">
      <div className="md:w-1/2 h-auto">
        <div className="mx-24 my-10 md:block hidden ">
          <span className="xl:text-2xl lg:text-xl md:text-lg font-semibold">
            At Physiocuro, we believe in healing through movement.
          </span>

          <h1 className="xl:text-8xl lg:text-6xl md:text-5xl font-semibold md:w-[800px] text-[#046D5D]">
            Our Story
          </h1>
          <h2 className="xl:text-5xl lg:text-3xl md:text-2xl font-semibold">
            Empowering Recovery, One Patient at a Time
          </h2>
          <p className="text-justify xl:text-2xl lg:text-xl md:text-lg text-[#102A43] mt-4">
            we are dedicated to empowering your recovery through personalized,
            expert physiotherapy care. Our experienced team combines advanced
            techniques with genuine compassion to help you move better, reduce
            pain, and achieve lasting results. From injury rehabilitation to
            chronic condition management, we tailor every treatment plan to your
            unique needs and goals. Using a range of evidence-based
            therapies—including manual therapy, exercise programs, dry needling,
            and cupping—we're committed to supporting you at every step of your
            journey.
          </p>
          <button
            onClick={() => {
              router.push("/doctors-info");
            }}
            className="flex items-center gap-2 py-2 px-4 rounded-lg bg-[#4DB6AC] my-4 cursor-pointer"
          >
            <span className="xl:text-2xl md:text-xl font-medium text-white">
              More..
            </span>
          </button>
        </div>
        <div className="bg-[url('/about-img.jpg')] bg-opacity-[10%] bg-cover bg-center bg-no-repeat rounded-2xl md:hidden block">
          <div className="py-10 bg-white bg-opacity-[50%] sm:px-20 px-5">
            <span className="xl:text-2xl lg:text-xl md:text-lg sm:text-xl font-semibold">
              At Physiocuro, we believe in healing through movement.
            </span>
            <h1 className="xl:text-8xl lg:text-6xl md:text-5xl sm:text-6xl text-5xl font-semibold md:w-[800px] text-[#046D5D]">
              Our Story
            </h1>
            <h2 className="xl:text-5xl lg:text-3xl md:text-2xl sm:text-4xl text-base font-semibold xl:w-[1000px] lg:w-[800px] md:w-[600px]">
              Empowering Recovery, One Patient at a Time
            </h2>
            <p className="text-justify xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#102A43]">
              we are dedicated to empowering your recovery through personalized,
              expert physiotherapy care. Our experienced team combines advanced
              techniques with genuine compassion to help you move better, reduce
              pain, and achieve lasting results. From injury rehabilitation to
              chronic condition management, we tailor every treatment plan to your
              unique needs and goals. Using a range of evidence-based
              therapies—including manual therapy, exercise programs, dry needling,
              and cupping—we're committed to supporting you at every step of your
              journey.
            </p>
            <button
              onClick={() => {
                router.push("/doctors-info");
              }}
              className="flex items-center gap-2 py-2 px-4 rounded-lg bg-[#4DB6AC] my-4 "
            >
              <span className="xl:text-2xl md:text-xl sm:text-lg text-base font-medium text-white">
                More..
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="xl:mx-20 pl-4 relative top-10 right-4 w-full">
        <img src="/aboutimg-1.png" alt="about" className="md:block hidden" />
      </div>  
    </div>
  );
};

export default Aboutus;
