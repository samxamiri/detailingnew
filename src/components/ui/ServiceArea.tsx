import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceArea: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        <Image
          alt="Service Area Map"
          src="/images/service-area-map.jpg" // Ensure this path is correct
          width={600}
          height={400}
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Are you in Greater Montreal?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              WE COME TO YOU!
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Our team will detail your car at your doorstep
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">📅</span> No more waiting in lines.
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">⌛</span> No more wasting time.
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="mr-2">😌</span> No more stress.
              </li>
            </ul>
            <Link href="/book">
              <button className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white font-bold rounded-md shadow hover:bg-teal-700">
                Book Online Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
