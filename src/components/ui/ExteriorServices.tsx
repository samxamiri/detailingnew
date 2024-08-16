import React from "react";

const ExteriorServices: React.FC = () => {
  const services = [
    {
      title: "Hand Wash",
      description:
        "Our hand wash service goes beyond the typical car wash, using premium products and techniques to gently cleanse your vehicle's exterior without causing any damage. ",
      image: "/images/other/carwash.webp",
    },
    {
      title: "Paint Decontamination",
      description:
        "Paint decontamination is a crucial step in maintaining your vehicle's finish. We use specialized tools and products to remove contaminants that standard washes can't handle, such as industrial fallout, tar, and tree sap.",
      image: "/images/other/decontamination (1).webp",
    },
    {
      title: "Paint Protection",
      description:
        "Protect your investment with our paint protection service. We apply a high-quality spray protection that shields your vehicle's paint from harsh environmental elements, helping it stay vibrant and pristine for months. ",
      image: "/images/other/paintprotection.webp",
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
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-950 flex flex-col items-center justify-center text-center"
            >
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
          ))}
        </div>
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
                  Foam Bath
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Contact Wash
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Clay Bar Treatment
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Wheel, Wheel Well, & Tire Detail
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Bug Detail
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Complete Paint Protection on All Exterior Surfaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExteriorServices;
