"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Vimeo Embed Section */}
        <div
          className="order-1 lg:order-1 mx-auto aspect-[16/9] overflow-hidden rounded-xl"
          style={{ position: "relative", paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/999386673?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Genesiscoupeinterior"
          ></iframe>
        </div>
        <div className="order-2 lg:order-2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            The Best Mobile Detailing In Montreal
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            <strong>Experience the ultimate car care</strong> with our
            comprehensive detailing services, brought to your doorstep!
          </p>

          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 w-full"
            aria-label="Book detailing packages now"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
