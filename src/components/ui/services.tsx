import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        <img
          alt="Wheel detailing"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          height="600"
          src="/images/other/wheel.webp" // Replace with your image path
          width="800"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Auto Detailing Services
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Click here to see a comprehensive list of the detailing services
              we provide all around Montreal.
            </p>
          </div>
          <Link
            href="/interior-car-cleaning-montreal"
            className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 w-full"
          >
            View Interior Detailing Services
          </Link>
          <Link
            href="/exterior-car-cleaning-montreal"
            className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 w-full"
          >
            View Exterior Detailing Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
