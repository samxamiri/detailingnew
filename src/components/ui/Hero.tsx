"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/other/hero.jpg')" }}
      ></div>

      {/* Overlay to darken the background for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center p-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl text-white">
          The Best Mobile Detailing In Montreal
        </h1>
        <p className="text-gray-200 md:text-xl mt-4 max-w-md mx-auto">
          <strong>Experience the ultimate car care</strong> with our
          comprehensive detailing services, brought to your doorstep!
        </p>

        <Link
          href="/contact"
          className="inline-flex mt-6 h-14 items-center justify-center rounded-md bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto"
          aria-label="Book detailing packages now"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
