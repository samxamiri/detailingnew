import Layout from "@/components/ui/Layout";
import Link from "next/link";
import React from "react";

const FullInteriorCleaning: React.FC = () => {
  return (
    <div>
      <Layout>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-96"
          style={{ backgroundImage: "url('/images/other/extraction.png')" }}
        >
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Professional Interior Car Detailing In Montreal
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto py-16 text-center">
          <p className="text-xl font-bold">
            Take Your Interior From “It’s so dirty,” to “It looks brand new”
          </p>
          <p className="mt-4 text-gray-600">
            The Full Interior Cleaning service is meant to get your interior
            back to the best condition possible. Your seats, floor mats,
            dashboard, door panels, headliner, carpet, etc... will all be
            thoroughly cleaned, detailed, and shampooed. If it can be cleaned,
            we’ll clean it.
          </p>
          <p className="mt-4 text-gray-600">
            Does that mean every last stain and blemish will be removed?
            Unfortunately, no. Based on the type of stain, how long it’s been
            there, and the material that it’s on, many stains won’t come out
            100%. Nonetheless, we’ll still do our best to reduce the appearance
            of it.
          </p>
          <p className="mt-4 text-gray-600">
            If you’re looking for more of a maintenance upkeep service for your
            interior, and not a deep cleaning, then our{" "}
            <a
              href="mini-interior-detail-montreal"
              className="text-blue-600 underline"
            >
              Mini-Interior Detail
            </a>{" "}
            might be better suited for you.
          </p>
          <div className="container mx-auto px-4 py-6 text-center">
            <Link
              href="#quote"
              className="inline-flex mt-6 h-14 items-center justify-center rounded-md bg-red-600 px-12 text-lg font-medium text-white shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
            >
              Start Your Quote
            </Link>
          </div>
        </section>

        {/* Cleaning Process Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center">
              Sam&apos;s Interior Cleaning Process
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg">
                  <strong>1. Remove All Loose Items:</strong> We’ll remove your
                  personal items and throw away the obvious trash. It does help
                  if you clear out your personal belongings before we get
                  started.
                </p>
                <p className="text-lg">
                  <strong>2. Thorough Vacuum:</strong> In combination with our
                  air compressor, drills, and vacuum, your interior (including
                  trunk) will be thoroughly vacuumed.
                </p>
                <p className="text-lg">
                  <strong>3. Shampoo Seats, Carpet, & Floor Mats:</strong> Using
                  our fabric-specific cleaners and commercial-grade hot water
                  extractor, we’ll shampoo the fabric material to pull out the
                  stains and gunk.
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <strong>4. Clean Plastic & Leather Surfaces:</strong> Using
                  our brushes, pads, and air compressor, we’ll deep clean the
                  leather and plastic surfaces (seats, door panels, dashboard,
                  center console, etc.).
                </p>
                <p className="text-lg">
                  <strong>5. Clean Windows & Mirrors:</strong> All interior
                  windows and mirrors will be streak-free (including the
                  sunroof, visors, and rear windshield).
                </p>
                <p className="text-lg">
                  <strong>6. Final Touch Ups:</strong> A final inspection will
                  be done so we can address any area we may have missed or can
                  improve before delivering the vehicle to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Interior Cleaning Prices
            </h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Small Vehicle
                </h3>
                <p className="text-2xl font-bold text-black-600">$160 - $200</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Medium Vehicle
                </h3>
                <p className="text-2xl font-bold text-black-600">$180 - $240</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Large Vehicle
                </h3>
                <p className="text-2xl font-bold text-black-600">$260 - $340</p>
              </div>
            </div>
            <button className="mt-12 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              <Link href="#quote">Start Your Quote</Link>
            </button>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center">
              Interior Cleaning FAQs
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">
                  How long does this service take?
                </h3>
                <p className="mt-2 text-gray-600">
                  It depends on the size and condition of your vehicle.
                  Generally speaking, it can take between 2 to 5 hours to
                  complete.
                </p>
              </div>
              {/* Additional FAQs */}

              <div>
                <h3 className="text-lg font-semibold">
                  Will I smell chemicals in my car once you’re done?
                </h3>
                <p className="mt-2 text-gray-600">
                  Absolutely not! That would be terrible. We do not use harsh
                  chemicals on your interior. By the time we’re done, you’ll
                  have a clean-dry car.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Can you remove every stain?
                </h3>
                <p className="mt-2 text-gray-600">
                  Due to the nature of stains and the material it’s on, some
                  stains will come off better than others. We have extensive
                  knowledge and experience (combined with a bunch of tools and
                  products) to handle most situations. But even with all that,
                  some stains won’t come out all the way.
                </p>
              </div>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
              <Link href="#quote">Start Your Quote</Link>
            </button>
          </div>
        </section>

        {/* Before and After Section */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold text-center">
            Before and After Shots
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="/images/other/IMG_7579.JPG"
              alt="Before and After"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="/images/other/IMG_7596.png"
              alt="Before and After"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="/images/other/carpet.png"
              alt="Before and After"
              className="rounded-lg shadow-lg object-cover"
            />
            {/* Add more images as needed */}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default FullInteriorCleaning;
