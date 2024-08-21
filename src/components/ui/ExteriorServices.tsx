import React from "react";
import Link from "next/link";

const ExteriorServices: React.FC = () => {
  const services = [
    {
      title: "Hand Wash",
      description:
        "Our hand wash service goes beyond the typical car wash, using premium products and techniques to gently cleanse your vehicle's exterior without causing any damage.",
      image: "/images/other/carwash.webp",
      link: "/hand-wash",
    },
    {
      title: "Paint Decontamination",
      description:
        "Paint decontamination is a crucial step in maintaining your vehicle's finish. We use specialized tools and products to remove contaminants that standard washes can't handle, such as industrial fallout, tar, and tree sap.",
      image: "/images/other/decontamination (1).webp",
      link: "/paint-decontamination",
    },
    {
      title: "Paint Protection",
      description:
        "Protect your investment with our paint protection service. We apply a high-quality spray protection that shields your vehicle's paint from harsh environmental elements, helping it stay vibrant and pristine for months.",
      image: "/images/other/paintprotection.webp",
      link: "/paint-protection",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl mb-8">
            Exterior Detailing In Montreal
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Auto Detailing Is More Than Just A Regular Wash...
          </h2>
        </div>
        <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
          Discover the range of services we offer to keep your vehicle looking
          its best.
        </p>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block">
              <div className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-950 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Link to the Exterior Cleaning FAQ */}
      <div className="mt-8 flex justify-center">
        <Link href="/wash-and-wax-faq">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-all">
            View Exterior Cleaning FAQs
          </button>
        </Link>
      </div>

      <section
        className="w-full"
        style={{ marginTop: "50px", padding: "50px 0" }} // Custom padding here
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Image on the left */}
            <div className="order-last lg:order-first">
              <img
                alt="Hyundai Veloster after wash and spray wax"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                src="/images/other/IMG_7584.jpg"
              />
            </div>
            {/* Text content on the right */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-gray-100 mb-6">
                Exterior Detailing Services
              </h2>
              <ul className="text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-4">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  <Link href="/hand-wash" passHref>
                    <span className="hover-link cursor-pointer">Hand Wash</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  <Link href="/paint-decontamination" passHref>
                    <span className="hover-link cursor-pointer">
                      Paint Decontamination
                    </span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  <Link href="/paint-protection" passHref>
                    <span className="hover-link cursor-pointer">
                      Complete Paint Protection on All Exterior Surfaces
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hover-link {
          color: #1e90ff; /* Link color */
          position: relative;
          text-decoration: none; /* Remove default underline */
          transition: color 0.3s ease;
        }

        .hover-link::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #1e90ff;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .hover-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .hover-link:hover {
          color: #1c86ee; /* Darker blue on hover */
        }
      `}</style>
    </section>
  );
};

export default ExteriorServices;
