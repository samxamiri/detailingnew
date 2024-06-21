import React from "react";
import {
  TrophyIcon as AwardIcon,
  WrenchIcon,
  SparklesIcon as SparkleIcon,
  ClockIcon,
} from "@heroicons/react/20/solid"; // Correct path for Heroicons v2

function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Benefits of Booking with Us
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the advantages of choosing Pristine Auto Detailing for
              your car care needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center min-h-[200px]">
            <AwardIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our team of experienced professionals are dedicated to delivering
              exceptional results.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center min-h-[200px]">
            <WrenchIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Advanced Techniques</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We use the latest tools and techniques to ensure a flawless
              finish.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center min-h-[200px]">
            <SparkleIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can trust us to transform your vehicle to showroom condition.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center min-h-[200px]">
            <ClockIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Convenient Scheduling</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Book your appointment at a time that works best for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
