import React from "react";
import Link from "next/link";

const AutoDetailingPrices: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        <div className="flex-1 flex flex-col justify-center space-y-4 text-center lg:text-left lg:ml-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Detailing Prices
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
              <span className="block">
                Wondering how much it costs to get a thorough detail?
              </span>
              <span className="block">
                Click the button below to see our auto detailing prices.
              </span>
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-start">
            <Link
              href="/detailing-prices"
              className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 w-full"
              prefetch={false}
            >
              Prices
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            alt="Auto Detailing Prices"
            className="aspect-[4/3] overflow-hidden rounded-xl object-cover w-full"
            height="600"
            src="/images/other/wax.webp" // Replace with your image path
            width="800"
          />
        </div>
      </div>
    </section>
  );
};

export default AutoDetailingPrices;
