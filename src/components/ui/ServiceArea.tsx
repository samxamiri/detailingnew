// src/components/ui/ServiceArea.tsx

import React from "react";
import Link from "next/link";

const ServiceArea: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 m dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <img
            src="/images/other/mtlmap.png"
            alt="Service Area Map"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center space-y-4 lg:ml-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Are you in Greater Montreal?
            </h2>
            <p className="text-xl font-semibold">WE COME TO YOU!</p>
            <p className="text-gray-500 dark:text-gray-400">
              Our team will detail your car at your doorstep
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span role="img" aria-label="no more waiting">
                  🚗
                </span>
                <span>No more waiting in lines.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span role="img" aria-label="no more wasting time">
                  ⏳
                </span>
                <span>No more wasting time.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span role="img" aria-label="no more stress">
                  😌
                </span>
                <span>No more stress.</span>
              </li>
            </ul>
            {/* <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Book Online Now
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
