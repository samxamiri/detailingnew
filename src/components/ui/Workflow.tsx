import React from "react";
import {
  CheckBadgeIcon as CalendarCheckIcon,
  CalendarDaysIcon as CalendarIcon,
  ClockIcon as TimerIcon,
} from "@heroicons/react/20/solid"; // Correct path for Heroicons v2

function Workflow() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Workflow
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our simple 3-step process makes getting your car detailed a
              breeze.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <CalendarCheckIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Choose a Package</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Select the detailing package that best fits your needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <CalendarIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Schedule a time that works best for you.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <TimerIcon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Relax at Home</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Sit back and let our experts handle the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
