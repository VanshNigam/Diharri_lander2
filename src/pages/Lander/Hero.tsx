import React from "react";
import Image from "next/image";
import StartupSection from "./StartupSection";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-1 px-9 relative">
      {/* Left: Hero Image with Overlay */}
      <div className="relative w-full max-w-md md:max-w-lg">
        {/* Background Image */}
        <Image
          src="/Lander/ImgBack.png"
          alt="Background"
          width={642}
          height={560}
          className="absolute mt-10 top-0 left-0 w-full h-full object-cover rounded-lg"
          priority
        />
        
        {/* Hero Image */}
        <Image
          src="/Lander/Hero_Image.png"
          alt="Hero"
          width={642}
          height={560}
          className="ml-10  z-10 rounded-lg"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-end pl-10 pt-11 z-20">
          <h2 className="text-white text-3xl md:text-3xl font-bold leading-tight">
            Connecting talent with visionary startups.
          </h2>
          <p className="text-white text-sm mt-1">DISCOVER. CONNECT. GROW.</p>
        </div>
      </div>

      {/* Right: Startups Section */}
      <StartupSection />
    </section>
  );
};

export default Hero;
