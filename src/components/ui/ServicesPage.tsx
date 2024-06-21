import React from "react";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the range of services we offer to keep your vehicle
              looking its best.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <img
              src="/images/services/exterior-detailing.jpg"
              alt="Exterior Detailing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Exterior Detailing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our comprehensive exterior detailing service will leave your
              vehicle looking showroom-fresh.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <img
              src="/images/services/interior-detailing.jpg"
              alt="Interior Detailing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Interior Detailing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We'll deep clean and condition your vehicle's interior to restore
              it to pristine condition.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col items-center justify-center text-center">
            <img
              src="/images/services/paint-correction.jpg"
              alt="Paint Correction"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Paint Correction</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our paint correction service will remove swirls, scratches, and
              oxidation to restore your vehicle's shine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
