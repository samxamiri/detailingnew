"use client";

import Layout from "@/components/ui/Layout";
import React, { useState } from "react";

const MiniInteriorDetailMontreal: React.FC = () => {
  const images = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/interior3.jpg",
    "/images/interior4.jpg",
    "/images/interior5.jpg",
    "/images/interior6.jpg",
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Layout>
        {/* Hero Section */}
        <section className="relative w-full h-64 md:h-96 lg:h-[500px] bg-gray-800 text-white flex items-center justify-center">
          <img
            src="/images/other/vacuum.jpg" // Replace with your hero image
            alt="Mini Interior Detail"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              Mini-Interior Detail: A Quick And Simple Cleanup
            </h1>
          </div>
        </section>

        {/* Description Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Haven’t Cleaned Your Interior In A Few Weeks? No Worries.
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            The Mini-Interior Detail is our entry-level service that’ll get your
            interior in much better condition without spending too much time or
            money.
          </p>
          <h3 className="mt-6 font-semibold text-lg">Here’s what you get:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 md:text-lg">
            <li>
              Thorough vacuuming of the entire interior (carpet, mats, seats,
              etc.)
            </li>
            <li>Wipe down of light dust and debris on all surfaces</li>
            <li>UV protection on plastic surfaces</li>
            <li>Streak-free interior glass and windows</li>
          </ul>
          <p className="mt-4 text-gray-700 md:text-lg">
            There’s no deep cleaning with this service. If your vehicle has a
            heavy amount of pet hair, stains, and spills you’d like addressed,
            then our Full Interior Cleaning service would be a better option for
            you.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg">
            This is more of a maintenance upkeep service. So if it’s been
            several weeks or so since you’ve last cleaned your interior and the
            condition has gotten a little out of hand, then we can get it back
            to its former glory.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg">
            Depending on the size and condition, this service usually takes
            under two hours to complete.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-8">Simple Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <h4 className="text-xl font-bold">Small (Miata/GTI)</h4>
              <p className="text-2xl font-semibold mt-2">$35 - $55</p>
            </div>
            <div className="p-4 border-2 border-gray-300 rounded-lg bg-blue-500 text-white">
              <h4 className="text-xl font-bold">
                Medium (Toyota Camry/Range Rover)
              </h4>
              <p className="text-2xl font-semibold mt-2">$55 - $95</p>
            </div>
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <h4 className="text-xl font-bold">Large (Large SUV/truck)</h4>
              <p className="text-2xl font-semibold mt-2">$85 - $125</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-8">
              Mini-Interior Detail FAQs
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold">
                  Can you clean something specific like a seat or stain?
                </h4>
                <p className="text-gray-700">
                  Even though this is a maintenance type cleaning, we’re still
                  happy and able to address any specific concerns you may have
                  at an additional cost. Just ask what you need!
                </p>
              </div>
              <div>
                <h4 className="font-bold">Do you come to me?</h4>
                <p className="text-gray-700">
                  Yes, we’re a fully mobile detailing unit. We only need access
                  to a hose and a power outlet.
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Do you need access to water or power?
                </h4>
                <p className="text-gray-700">
                  Yes, we do. Furthermore, it is important that we have access
                  to the vehicle and enough room to work comfortably.
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Will this service remove odors from the interior?
                </h4>
                <p className="text-gray-700">
                  Unfortunately when it comes to removing an odor, it’s a much
                  different process than just cleaning a stain off a seat. This
                  could possibly require a more extensive cleaning process.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Have more questions?</h4>
                <p className="text-gray-700">
                  Visit our in-depth{" "}
                  <a href="/FAQs" className="text-blue-500 underline">
                    FAQ page
                  </a>{" "}
                  where we answer a lot of your questions for our different
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Check Out The Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/images/other/q5.webp"
              alt="Work 1"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/other/polestar.png"
              alt="Work 2"
              className="w-full h-auto rounded-md"
            />

            <img
              src="images/other/genesis.png"
              alt="Work 4"
              className="w-full h-auto rounded-md"
            />
            <img
              src="images/other/IMG_7571.jpg"
              alt="Work 5"
              className="w-full h-auto rounded-md"
            />

            <img
              src="images/other/IMG_7584.jpg"
              alt="Work 7"
              className="w-full h-auto rounded-md"
            />
            <img
              src="images/other/benz.jpg"
              alt="Work 7"
              className="w-full h-auto rounded-md"
            />
          </div>
        </section> */}
      </Layout>
    </div>
  );
};

export default MiniInteriorDetailMontreal;
