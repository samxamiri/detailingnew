// src/components/ui/BeforeAfter.client.tsx
import React from 'react';
// import { ChevronRightIcon } from './Icons'; // Ensure this import path is correct

const BeforeAfter = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Before & After
          </h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            See the incredible transformation our detailing services can achieve.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              alt="Before"
              className="aspect-[3/2] overflow-hidden rounded-xl object-cover h-full w-full"
              src="/path/to/your/before-image.jpg" // Update path to actual image
            />
            <h3 className="mt-2 text-lg font-bold">Before</h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="After"
              className="aspect-[3/2] overflow-hidden rounded-xl object-cover h-full w-full"
              src="/path/to/your/after-image.jpg" // Update path to actual image
            />
            <h3 className="mt-2 text-lg font-bold">After</h3>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {/* <ChevronRightIcon className="w-4 h-4 mr-2" /> */}
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
