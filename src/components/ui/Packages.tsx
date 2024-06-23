import React from "react";
import Link from "next/link";

const Packages: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl mb-6">
            The Simplest Auto Detailing Prices <br /> In Montreal
          </h1>
        </div>

        {/* Div 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img
              src="/images/other/rinse.png"
              alt="Detailing Image 1"
              className="w-full h-[400px] rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="max-w-[600px] text-gray-800 md:text-3xl dark:text-gray-400">
              Finding a simple and straightforward price for auto detailing
              should be easy! That’s why we don’t offer 1,000 different pricing
              options with different auto detailing packages. We got tired of
              the endless options of confusing detailing prices and packages
              like: “The Gold Package” “The Express Package” and my personal
              favorite: “The Showroom package!” Why not get the best detail
              every time at a price point that works for you?
            </p>
          </div>
        </div>

        {/* Div 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <p className="max-w-[600px] text-gray-800 md:text-3xl dark:text-gray-400">
              Below you will find 3 options: An interior detail, an exterior
              detail, and a complete detail with average prices associated with
              each. After speaking with our customers, we found that all they
              really wanted was a fantastic auto detailing experience every
              time, so we are simplifying things! Whether you want an interior
              detail, an exterior detail, or a complete detail, we want to raise
              your car to the highest level of perfection that is possible!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/other/wash.png"
              alt="Detailing Image 2"
              className="w-full h-[400px] rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Big Bold Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl mb-6">
            If you’re like me and you like talking with a real person to get
            your auto detailing questions answered rather than trying to figure
            things out yourself, call us anytime! Answering pricing questions is
            what I do… literally!
          </h2>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/contact"
            className="inline-flex mt-6 h-12 w-64 items-center justify-center rounded-md bg-gray-900 text-lg sm:text-xl md:text-2xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Call Us Anytime!
          </Link>
        </div>

        {/* Detailing Prices Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl mb-6">
              Detailing Prices
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Check out our detailing prices for different vehicle types.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Sports/Mini Car"
                className="mx-auto w-full h-[200px] overflow-hidden rounded-lg object-cover"
                src="/images/types/mini.webp"
              />
              <h3 className="text-xl font-bold mt-4">Sports/Mini</h3>
              <div className="grid gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$150</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$80</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$100</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Sedan"
                className="mx-auto w-full h-[200px] overflow-hidden rounded-lg object-cover"
                src="/images/types/sedan.webp"
              />
              <h3 className="text-xl font-bold mt-4">Sedan</h3>
              <div className="grid gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$180</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$100</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$120</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="SUV"
                className="mx-auto w-full h-[200px] overflow-hidden rounded-lg object-cover"
                src="/images/types/suv.webp"
              />
              <h3 className="text-xl font-bold mt-4">SUV</h3>
              <div className="grid gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$220</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$130</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$150</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Pickup/Van"
                className="mx-auto w-full h-[200px] overflow-hidden rounded-lg object-cover"
                src="/images/types/van.webp"
              />
              <h3 className="text-xl font-bold mt-4">Pickup/Van</h3>
              <div className="grid gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$250</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$150</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$180</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
