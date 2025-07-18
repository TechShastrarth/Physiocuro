"use client";
import React, { useEffect, useRef } from "react";

export default function ContactUsPage() {
  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Note: To enable email functionality, install @emailjs/browser with: npm install @emailjs/browser
    // Then uncomment the code below and add your EmailJS credentials to environment variables
    
    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",    // From EmailJS dashboard
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",   // From your template
    //     form.current,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""     // From EmailJS account
    //   )
    //   .then(
    //     (result: any) => {
    //       alert("Message sent successfully!");
    //       form.current?.reset();
    //     },
    //     (error: any) => {
    //       console.error("Error:", error);
    //       alert("Failed to send message. Please try again.");
    //     }
    //   );
    
    // Temporary alert for demo purposes
    alert("Form submitted successfully! Email functionality can be enabled by installing @emailjs/browser package.");
    form.current?.reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen font-rajdhani min-h-screen text-[#102A43] bg-[url('/contact-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex md:flex-row flex-col-reverse sm:mx-[11%] mx-[4%] mt-10 md:gap-[4%] gap-10">
        <div className="w-full">
          <p className="lg:text-2xl text-xl text-justify">
            <span className="lg:text-[64px] text-4xl font-bold text-[#074264] ">
              At Physicocuro
            </span>
            we’re committed to helping you move better and feel your best.
            Whether you have questions about our services, want to book an
            appointment, or need personalized advice, our team is here to help.
            Reach out to us by phone, email, or the form below—we’ll respond
            promptly and make sure you get the care you need. We look forward to
            hearing from you and supporting your journey to better health and
            mobility.
          </p>
          <div className="my-8 flex flex-col gap-8">
            <i className="fa-solid fa-phone-volume lg:fa-xl fa-lg text-[#49B649] flex items-center gap-2">
              <span className="lg:text-xl text-lg font-rajdhani text-[#074264] font-medium">
                +91 9967673260
              </span>
            </i>
            <i className="fa-solid fa-envelope lg:fa-xl fa-lg text-[#49B649] flex items-center gap-2">
              <span className="lg:text-xl font-rajdhani text-lg text-[#074264] font-medium">
                info@physiocuro.com
              </span>
            </i>
          </div>
        </div>
        <div className="w-full max-h-fit text-center items-center py-[4%] px-[4%] flex flex-col xl:max-w-[513px] border-2 border-gray-200 shadow-xl bg-white rounded-2xl">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-[#4DB6AC]">
            Book Appointment
          </h1>
          <div className="bg-[#D9D9D9] h-1.5 w-[100%] my-4"></div>
          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-5">
            <input
              type="text"
              name="user_name"
              className=" bg-white border-[#6C6C6C]/60 border-2 rounded-2xl px-4 lg:text-xl sm:text-lg text-sm font-medium border-opacity-[16%] shadow-xl  w-full h-[54px] "
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className=" bg-white border-[#6C6C6C]/60 border-2 rounded-2xl px-4 lg:text-xl sm:text-lg text-sm font-medium border-opacity-[16%] shadow-xl  w-full h-[54px] "
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="user_phone"
              className=" bg-white border-[#6C6C6C]/60 border-2 rounded-2xl px-4 lg:text-xl sm:text-lg text-sm font-medium border-opacity-[16%] shadow-xl  w-full h-[54px] "
              placeholder="Phone Number"
              required
            />

            <button 
              type="submit"
              className="bg-[#4DB6AC] w-fit px-[36px] py-[4px] rounded-full lg:text-xl sm:text-lg text-sm font-bold text-white hover:bg-[#26A69A] transition-colors duration-300"
            >
              Book
            </button>

            <p className="text-[#49B649] opacity-[61%] text-[12px] font-bold text-justify">
              P.S. We’re always happy to answer your questions—don’t hesitate to
              get in touch!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
