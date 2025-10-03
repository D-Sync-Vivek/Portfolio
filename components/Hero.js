import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex mt-15">
        <div className="w-[30vw] text-center">Avatar Image Here</div>

        <div className="HeroSection w-[65vw] bg-gray-100 rounded-3xl p-5 min-h-[60vh] relative shadow-lg overflow-hidden">
          <div className="">
            <div className="flex flex-col gap-5">
              <div className="text-5xl font-bold">Vivek Kumar</div>
              <div className="text-[#868686]">
                Web Developer | Full Stack Developer
              </div>
            </div>
            <div className="buttons absolute bottom-10 flex flex-col gap-5">
              <div className="bg-blue-500 px-2 p-1 rounded-lg text-white font-semibold border-2 border-gray-400 text-center">
                View Projects
              </div>
              <div className="px-2 p-1 rounded-lg font-semibold border-2 border-gray-400 flex justify-center items-center">
                <div>Resume</div>
                <img
                  src="/downloadbutton.svg"
                  alt="download button"
                  height="20"
                  width="20"
                />
              </div>
            </div>

            <div className="profilephoto absolute right-30 top-15">
              <img
                className="rounded-full h-50 w-50 object-cover"
                src="/vivek.jpeg"
                alt="profile picture"
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
