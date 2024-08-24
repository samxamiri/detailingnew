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
        <div className="overflow-x-auto mb-8 m-4">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr>
                <th className="px-2 py-2 text-left text-gray-700 dark:text-gray-300 font-bold">
                  Service
                </th>
                <th className="px-2 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">
                  Basic
                </th>
                <th className="px-2 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">
                  Deluxe
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Interior Services */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td
                  className="px-2 py-2 text-left font-bold text-gray-600 dark:text-gray-400"
                  colSpan={3}
                >
                  <a href="interior-car-cleaning-montreal">Interior</a>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Vacuuming
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Upholstery/Carpet Shampoo
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Full Chemical Cleaning of All Surfaces
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Interior Glass Cleaning
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>

              {/* Exterior Services */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td
                  className="px-2 py-2 text-left font-bold text-gray-600 dark:text-gray-400"
                  colSpan={3}
                >
                  <a href="exterior-car-cleaning-montreal">Exterior</a>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Hand Wash
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Paint Decontamination
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Spray Wax
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Wheel & Tire Cleaning
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
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
        <style jsx>{`
          a {
            color: #1e90ff; /* A standard link color */
            text-decoration: underline; /* Underline to indicate it’s a link */
          }
          a:hover {
            color: #1c86ee; /* Slightly darker shade on hover */
            text-decoration: none; /* Remove underline on hover for effect */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Packages;
