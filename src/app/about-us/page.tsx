"use client";
import { Aboutus, Location } from "@/components";

export default function AboutUsPage() {
    return (
        <div className="max-w-screen font-rajdhani bg-gray-200 text-[#074264] min-h-screen ">
              <Aboutus />
              <div className="">
                <Location />
              </div>
              <section className=" py-8 bg-[#D9D9D9]-50">
              <div className="text-center">
                <h1 className="sm:text-8xl text-5xl font-bold">
                  <span className="text-[#49B649]">Our</span> Partners
                </h1>
                <h2 className="text-center font-medium text-xl sm:text-2xl mb-8 mx-4">
                  We are proud to partner with the following organizations to bring our vision to life.
                </h2>
              </div>
              <div className="flex md:flex-row flex-col  items-center md:justify-around gap-20 ">
                <img
                  src="/PainClinic.jpeg"
                  alt="Partner Logo"
                  className="w-96 object-cover"
                />
                <img
                  src="/SpineClinic.jpeg"
                  alt="Partner Logo"
                  className="w-96 object-cover"
                />
              </div>
              </section>
            </div>
    );
}
