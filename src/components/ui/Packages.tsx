import React from "react";
import Link from "next/link";

const Packages: React.FC = () => {
  return (
    <section className="w-full md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
            {/* Pricing Cards */}
            {/* ... your pricing cards here ... */}
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
            {/* Package Details */}
            {/* ... your package details here ... */}
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
            {/* Video Section */}
            <div className="flex justify-center lg:order-2 order-1">
              <div className="w-full h-[315px] lg:w-[560px] overflow-hidden rounded-xl shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Qo887XIzlDQ?si=f1MPxlexxpJb6CIE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
