import React from "react";
import Link from "next/link";

const InteriorServices: React.FC = () => {
  const services = [
    {
      title: "Full Vacuum",
      description:
        "Our full vacuum service covers every inch of your vehicle's interior, removing dirt, dust, and debris from all surfaces, including under the seats and in hard-to-reach areas.",
      image: "/images/other/vacuum.jpg",
      link: "/full-vacuum",
    },
    {
      title: "Carpet Shampoo & Extraction",
      description:
        "Our carpet shampooing service removes dirt, stains, and allergens from your car's carpets, leaving them fresh and clean.",
      image: "/images/other/extraction.png",
      link: "/carpet-shampoo",
    },
    {
      title: "Complete Interior Chemical Clean",
      description:
        "We provide a comprehensive chemical cleaning of all interior surfaces, targeting tough stains and grime on plastics, vinyl, and rubber.",
      image: "/images/other/interiordetail.jpeg",
      link: "/interior-chemical-clean",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center mb-12"
          style={{ marginBottom: "100px" }} // Increased marginBottom to align with other sections
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl mb-8">
            Interior Detailing In Montreal
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Comprehensive Interior Cleaning
          </h2>
        </div>
        <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
          Explore our range of interior detailing services designed to give your
          vehicle’s interior a fresh, like-new feel.
        </p>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block">
              <div
                className={`bg-white rounded-lg shadow-md p-8 dark:bg-gray-950 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 ${
                  index === 1 ? "transform -translate-y-4" : ""
                }`} // Adjust the middle tile (index 1)
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
            </Link>
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
                alt="Interior detailing process"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                src="/images/other/IMG_7579.jpg"
              />
            </div>
            {/* Text content on the right */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-gray-100 mb-6">
                Interior Detailing Services
              </h2>
              <ul className="text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-4">
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Complete Interior Chemical Clean
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  All Cracks and Crevices
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  All Hard Interior Plastics
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  All Vinyl or Rubber Surfaces
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Everywhere the Eye Can and Can’t See
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Carpet Shampoo
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Door Jamb Detail
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  All Interior Glass
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Interior Vacuuming on Every Necessary Surface
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                  Complete Interior Protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InteriorServices;
