"use client";

import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const videoElement = document.getElementById(
      "hero-video"
    ) as HTMLVideoElement | null;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.src = videoElement.dataset.src!;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        <video
          id="hero-video"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          autoPlay
          loop
          muted
          preload="metadata"
          width="800"
          height="600"
          data-src="/videos/Ezyzip.mp4"
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            Mobile Auto Detailing In Montreal
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            <strong>Experience the ultimate in car care</strong> with our
            comprehensive detailing services. Transform your vehicle from dull
            to dazzling with our expert touch.
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
