import { DocCard, Navbar } from "@/components";
import { h1 } from "framer-motion/client";

export default function doctorinfo () {
    return (
        <div className="max-w-screen min-h-screen bg-[#DFFEFB] font-rajdhani text-[#102A43]">
              <div className="bg-[url('/docinfo-bg.png')] bg-center bg-cover bg-no-repeat bg-opacity-[64%]">
              <Navbar/>
                <div className="flex lg:flex-row flex-col items-center gap-[4%] mx-[8%] py-[3%]">
                  <img src="/image 26.png" alt="pains" />
                  <p className="text-justify md:text-2xl text-lg mt-6">
                    <span className="md:text-[64px] text-[44px] font-bold text-[#074264]">
                      At PhysioCuro,
                    </span>{" "}
                    our team of experienced and compassionate physiotherapists is
                    dedicated to supporting your recovery and long-term well-being. We
                    specialize in evidence-based, personalized treatment plans for a
                    wide range of conditions, including musculoskeletal injuries,
                    neurological rehabilitation, pediatric care, and sports
                    physiotherapy. Combining clinical expertise with modern techniques
                    and a patient-centered approach, we focus on delivering effective,
                    high-quality care in a friendly and comfortable environment. Our
                    mission is to help you move better, recover faster, and achieve
                    lasting health and confidence.
                  </p>
                </div>
                <h1 className="text-[64px] font-bold text-[#4DB6AC] mx-[8%] underline">
                  Our Doctors
                </h1>
              </div>
              <div>
                <DocCard />
              </div>
              {/* <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-[4%] mx-[8%] py-[3%]">
                <p className="text-justify md:text-2xl text-lg mt-6 md:w-1/2 w-full">
                  <span className="md:text-[64px] text-[44px] font-bold text-[#074264]">
                    PhysioCuro
                  </span>{" "}
                  dolor sit amet, consectetur adipiscing elit. Duis semper dictum massa,
                  eu aliquet magna faucibus id. Fusce molestie, nunc eu laoreet rhoncus,
                  est odio finibus nunc, eu tincidunt sem velit quis odio. Integer
                  mollis commodo ipsum, euismod gravida erat lacinia tincidunt. Aenean
                  consectetur ac nisl sed sagittis.dolor sit amet, consectetur
                  adipiscing elit. Duis semper dictum massa, eu aliquet magna faucibus
                  id. Fusce molestie, nunc eu laoreet rhoncus, est odio finibus nunc, eu
                  tincidunt sem velit quis odio. Integer mollis commodo ipsum, euismod
                  gravida erat lacinia tincidunt. Aenean consectetur ac nisl sed
                  sagittis. 
                </p>
                <img src="/logo-2.png" alt="pains" />
              </div> */}
            </div>
    )
}