import Image from "next/image";
import clockIcon from "@/../../public/images/icons8-clock-100.png";
import barChartIcon from "@/../../public/images/bar-chart-3-64.png";
import lightBulbIcon from "@/../../public/images/icons8-light-bulb-96.png";
import brainIcon from "@/../../public/images/icons8-brain-100.png";

export default function Home() {
  return (
    <div className="bg-white py-20 px-5 sm:px-10">
      <div className="max-w-[87rem] mx-auto flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Section: Text Content */}
        <div className="text-left mb-24 lg:-mt-28 md:mb-0 md:pr-10 lg:w-[612px] animate-fade-in-up">
          <h2 className="text-lg sm:text-xl gradient-border font-semibold border-b  w-full max-w-[184px] text-[#031811] uppercase tracking-wide">
            Why Choose Us
          </h2>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl/[3.5rem] font-medium text-[#031811] mt-6 leading-tight">
            Why learn Gen AI from Panaversity
          </h1>
          <p className="mt-6 text-base/[2] sm:text-lg/[2] text-[#031811]/70">
            Embark on a journey of visual innovation as you delve into the realm
            of the AI Image Generator. This revolutionary tool harnesses the
            prowess of advanced algorithms to breathe life into your imagination.
          </p>
          <p className="mt-4 text-base/[2] sm:text-lg/[2] mb-4 text-[#031811]/70">
            Unleash your creativity and witness the power of AI Image Generator
            as it transforms ideas into mesmerizing images.
          </p>
          <button className="mt-5 sm:mt-8 px-8 py-4 md:mb-20 lg:mb-0 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-500 hover:shadow-2xl transition-all duration-300">
            Generate Your Image →
          </button>
        </div>

        {/* Right Section: Features Grid */}
        <div className="grid grid-cols-1 -mt-6 xl:-mt-0 sm:grid-cols-2 hover:cursor-default  gap-x-8 gap-y-8 max-w-3xl">
          {/* Card 1 */}
          <div className="card bg-white px-6 pb-12 pt-12  transform ease-in-out rounded-3xl border-[#000000]/5 border-2 custom-shadow shadow-gray-200 w-full sm:max-w-[318px]  animate-slide-in-up hover:scale-x-150  hover:shadow-2xl transition-transform duration-300">
            <div className="w-full">
            <div className="flex justify-center items-center bg-[#FA7F27] rounded-full w-12 h-12 mb-4">
              <Image src={clockIcon} alt="Clock Icon" width={24} height={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Future-Proof Your Career
            </h3>
            <p className="mt-3 text-[16px]/[2] text-gray-600">
              Stay ahead in a rapidly evolving job market by mastering Generative AI, a key technology shaping the future.
            </p></div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white px-6 pb-12 pt-12 rounded-3xl border-[#000000]/5 border-2 custom-shadow shadow-gray-200 w-full sm:max-w-[318px] animate-slide-in-up hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center items-center bg-[#4B62E6] rounded-full w-12 h-12 mb-4">
              <Image src={barChartIcon} alt="Bar Chart Icon" width={24} height={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              In-Demand Skills
            </h3>
            <p className="mt-3 text-[16px]/[2] text-gray-600">
              Generative AI skills are highly sought after, opening doors to top tech roles and exciting career opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card bg-white px-6 pb-12 pt-12 rounded-3xl border-[#000000]/5 border-2 custom-shadow shadow-gray-200 w-full sm:max-w-[318px] animate-slide-in-up hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center items-center bg-[#F786BE] rounded-full w-12 h-12 mb-4">
              <Image src={lightBulbIcon} alt="Light Bulb Icon" width={26} height={26} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Innovate and Create
            </h3>
            <p className="mt-3 text-[16px]/[2] text-gray-600">
              Push the boundaries of innovation with AI-driven applications and groundbreaking technologies.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card bg-white px-6 pb-12 pt-12 rounded-3xl border-[#000000]/5 border-2 custom-shadow shadow-gray-200 w-full sm:max-w-[318px] animate-slide-in-up hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center items-center bg-[#FFC04C] rounded-full w-12 h-12 mb-4">
              <Image src={brainIcon} alt="Brain Icon" width={24} height={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Personalize Your Learning
            </h3>
            <p className="mt-3 text-[16px]/[2] text-gray-600">
              Tailor your learning and create user-centric AI solutions that adapt to individual needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}