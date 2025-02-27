import React from "react";
import Image from "next/image";
import StartupSection from "./StartupSection";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-1 px-9">
      {/* Left: Hero Image with Overlay */}
      <div className="relative w-full max-w-md md:max-w-lg">
        {/* Main Hero Image */}
        <Image
          src="/Lander/Hero_Image.png"
          alt="Hero Image"
          width={642}
          height={560}
          className="ml-10 rounded-lg relative  z-10"
        />

        {/* Dark Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg z-20"></div>

        {/* Overlay Text */}
        <div className="absolute bottom-8 left-8 text-white z-30">
          <h2 className="text-3xl md:text-3xl font-bold leading-tight">
            Connecting talent with visionary startups.
          </h2>
          <p className="text-sm mt-2">DISCOVER. CONNECT. GROW.</p>
        </div>
      </div>

      {/* Right: Startups Section */}
      <StartupSection />
    </section>
  );
};

export default Hero;
