import Layout from "@/components/ui/Layout";
import React from "react";

const PremiumWash: React.FC = () => {
  return (
    <div className="w-full">
      <Layout>
        {/* Hero Section */}
        <section className="relative w-full h-64 md:h-96 lg:h-[500px] bg-gray-800 text-white flex items-center justify-center">
          <img
            src="/images/other/foam.webp" // Replace with your hero image
            alt="Premium Car Wash"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              Premium Car Wash Services In Montreal
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Proper washing methods for a clean car (and no swirls)
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Swirl-Free Hand Car Wash To Keep Your Paint in Great Condition
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            It’s not rocket science to wash a car, but there are methods that
            produce better results than your typical $10 car wash.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg">
            If you’re looking for a fast and cheap option to get your car washed
            in Montreal, we most likely won’t be a great fit for you. We take
            the wash process further to provide a higher quality level of
            service and results.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg">
            We call it our Premium Wash. We’ll wash the vehicle to remove
            everyday dirt/grime, bird poo, and dust using proper washing and
            drying methods. This will greatly reduce the chances of surface
            scratching and causing swirls.
          </p>
          <p className="mt-4 text-gray-700 md:text-lg">
            Other services we offer:
          </p>
          <ul className="list-disc list-inside ml-4 text-blue-600">
            <li>Mini Interior CLeaning</li>
            <li>Full Interior Cleaning</li>
          </ul>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-8">
              Here’s what you get:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">1</span>
                <p>Clean wheels, tires, and gas cap</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">2</span>
                <p>Remove bugs and bird poo from vehicle</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">3</span>
                <p>Wash vehicle with quality mitts, products, and methods</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">4</span>
                <p>
                  Apply a spray wax for extra shine and protection (lasts a few
                  weeks)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">5</span>
                <p>
                  Dry vehicle with soft microfiber towel and air blower to blow
                  water out of crevices and wheels
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">6</span>
                <p>Clean exterior glass and windows</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 text-3xl font-bold">7</span>
                <p>Dress tires to make them shine</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700">
              The end product? A clean and shiny vehicle you’ll be happy to turn
              around and look at when you’re walking away from it.
            </p>
            <p className="mt-4 text-gray-700">
              There won’t be tire dressing all over your fenders when you drive
              off or water running down the door panels.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-8">Simple Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <h4 className="text-xl font-bold">Small (Miata/GTI)</h4>
              <p className="text-2xl font-semibold mt-2">$50 - $90</p>
            </div>
            <div className="p-4 border-2 border-gray-300 rounded-lg bg-blue-600 text-white">
              <h4 className="text-xl font-bold">
                Medium (Toyota Camry/Range Rover)
              </h4>
              <p className="text-2xl font-semibold mt-2">$60 - $100</p>
            </div>
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <h4 className="text-xl font-bold">Large (Large SUV/truck)</h4>
              <p className="text-2xl font-semibold mt-2">$90 - $140</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-8">Premium Wash FAQs</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold">Do you come to me?</h4>
                <p className="text-gray-700">
                  Yes, we’re a fully mobile detailing unit. We only need access
                  to a hose and a power outlet. We service Kikrland,
                  Pierrefonds, Vaudreuil, Nun's Island, Brossard, Dorval, Laval,
                  Beaconsfield, and many more.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Does this include a wax?</h4>
                <p className="text-gray-700">
                  Yep! This wash includes a spray wax that will provide a shine
                  and protection that’ll last a few weeks. If you’d like to add
                  a deeper level of shine and protection to your paint, then I
                  suggest you check out our Wash and Wax service.
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  How long does the wash process take?
                </h4>
                <p className="text-gray-700">
                  It depends on the size and condition of the vehicle, but
                  generally speaking between 45 to 90 minutes.
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
                <h4 className="font-bold">Do you do group washes?</h4>
                <p className="text-gray-700">
                  At this time, we do not offer group washes or maintain fleets
                  of vehicles.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-12">
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
        </section>
      </Layout>
    </div>
  );
};

export default PremiumWash;
