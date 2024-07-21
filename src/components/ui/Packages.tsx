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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <img
                alt="Sports/Mini Car"
                className="mx-auto w-full h-[200px] overflow-hidden rounded-lg object-cover"
                src="/images/types/mini.webp"
              />
              <h3 className="text-xl font-bold mt-4">Sports/Mini</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Regular</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $135-$185
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$95-$145</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$80-$120</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $105-$155
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$70-$120</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$55-$105</p>
                  </div>
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
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Regular</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $205-$255
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $135-$185
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$95-$145</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $100-$150
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$80-$120</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$70-$120</p>
                  </div>
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
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Regular</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $275-$325
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $200-$250
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $120-$170
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $115-$165
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $110-$160
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">$80-$130</p>
                  </div>
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
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <h4 className="font-semibold">Regular</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $320-$370
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $230-$280
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $175-$225
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Basic</h4>
                  <div>
                    <h4 className="font-semibold">Complete Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $135-$185
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $135-$185
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exterior Detail</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      $110-$160
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    <span className="mr-2">❌</span>Door jambs
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Headliner
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Upholstery & Carpet
                    shampoo/stain removal
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Interior Glass
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Weather mat wash
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">For Exterior</h3>
              <div className="text-left">
                <ul className="pl-5 inline-block">
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Clay Bar
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Door Jambs
                  </li>
                  <li className="text-red-600 flex items-center">
                    <span className="mr-2">❌</span>Tire Dressing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Introductory and Additional Information Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 ">
          <div className="text-center mb-12 mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl mb-6">
              If you’re like me and you like talking with a real person to get
              your auto detailing questions answered rather than trying to
              figure things out yourself, call us anytime! Answering pricing
              questions is what I do… literally!
            </h2>
          </div>
          <div className="flex justify-center mt-12">
            <img
              src="/images/other/wash.webp"
              alt="Detailing Image 2"
              className="w-full h-[400px] rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            className="inline-flex mt-6 mb-12 h-12 w-64 items-center justify-center rounded-md bg-gray-900 text-lg sm:text-xl md:text-2xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Call Us Anytime!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
