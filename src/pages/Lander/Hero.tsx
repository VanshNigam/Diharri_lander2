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
          className="absolute mt-10 top-0 left-0 w-full h-full object-cover "
          priority
        />

        {/* Hero Image with Darker Left Side */}
        <div className="relative ml-10  overflow-hidden">
          {/* Hero Image */}
          <Image
            src="/Lander/Hero_Image.png"
            alt="Hero"
            width={642}
            height={560}
            className="w-full h-full object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(24,28,85)] via-[rgba(24,28,85,0.7)] to-transparent"></div>        </div>



        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-end pl-16 z-20">
          <h2 className="text-white text-4xl md:text-4xl font-bold leading-tight">
            Connecting talent with visionary startups.
          </h2>
          <p className="text-white text-2xl mt-1">DISCOVER. CONNECT. GROW.</p>
        </div>
      </div>

      {/* Right: Startups Section */}
      <StartupSection />
    </section>
  );
};

export default Hero;
