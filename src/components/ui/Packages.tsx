import React from "react";
import Link from "next/link";

const Packages: React.FC = () => {
  return (
    <section className="w-full  md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="text-center mt-16 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl ">
          The Simplest Auto Detailing Prices <br /> In Montreal
        </h1>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        {/* Detailing Prices Section */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Check out our detailing prices for different vehicle types.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Sports/Mini Car"
                className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
                src="/images/types/mini.webp"
              />
              <h3 className="text-xl font-bold mt-4">Sports/Mini</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="text-2xl font-extrabold">Deluxe</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$220</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$140</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$90</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$115</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$70</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$55</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Sedan"
                className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
                src="/images/types/sedan.webp"
              />
              <h3 className="text-xl font-bold mt-4">Sedan</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="text-2xl font-extrabold">Deluxe</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$250</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$180</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$110</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$135</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$90</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$75</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="SUV"
                className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
                src="/images/types/suv.webp"
              />
              <h3 className="text-xl font-bold mt-4">SUV</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="text-2xl font-extrabold">Deluxe</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$275</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$200</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$125</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$180</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$120</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$90</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div className="text-center mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              *Up to $50 extra may be charged depending on the condition of the
              vehicle.
            </p>
          </div>
        </div>

        {/* What Is Removed In The Basic Package Section */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-5xl mb-6">
              What Is Removed In The Basic Package?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">For Interior</h3>
              <div className="text-left">
                <ul className="pl-5 inline-block">
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Upholstery & Carpet
                    shampoo/stain removal
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">For Exterior</h3>
              <div className="text-left">
                <ul className="pl-5 inline-block">
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Paint Decontamination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Introductory and Additional Information Section */}

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Text Section */}
            <div className="flex flex-col justify-center lg:order-1 order-2 text-center lg:text-left lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl mb-6">
                Prefer talking to a real person to get your auto detailing
                questions answered?
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6">
                If you’re like me and you value personal interaction, don’t
                hesitate to call us anytime. I’m here to answer all your pricing
                questions!
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 w-64 items-center justify-center rounded-md bg-blue-600 text-lg sm:text-xl md:text-2xl font-medium text-white shadow-lg transition-transform transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Call Us Anytime!
              </Link>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:order-2 order-1">
              <img
                src="/images/other/IMG_7581.jpg"
                alt="Contact wash on door panel"
                className="w-full h-[400px] rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
