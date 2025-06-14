import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { title, subtitle, image } = useSelector((state) => state.hero);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-start md:items-end"
      style={{ backgroundImage: "url('./Main.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="z-10 w-full max-w-6xl mx-auto px-4 py-10 sm:py-16 md:py-24 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {title.split("Adventure")[0]}
            <br />
            <span className="text-yellow-400">Adventure</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium mb-6">
            {subtitle}
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full border-none text-sm sm:text-base md:text-lg transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Feature Bar (unchanged) */}
      <div className="absolute bottom-0 w-[50%] bg-black/60 text-white ">
        <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center text-sm sm:text-base font-medium">
          <p className="py-3">Easy Booking</p>
          <p className="py-3">Curated Destinations</p>
          <p className="py-3">Trusted Support</p>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;