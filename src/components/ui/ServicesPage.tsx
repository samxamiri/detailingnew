import React from "react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Exterior Detailing",
      description:
        "Our comprehensive exterior detailing service will leave your vehicle looking showroom-fresh.",
      image: "/images/services/exterior-detailing.jpg",
    },
    {
      title: "Interior Detailing",
      description:
        "We'll deep clean and condition your vehicle's interior to restore it to pristine condition.",
      image: "/images/services/interior-detailing.jpg",
    },
    {
      title: "Paint Correction",
      description:
        "Our paint correction service will remove swirls, scratches, and oxidation to restore your vehicle's shine.",
      image: "/images/services/paint-correction.jpg",
    },
    {
      title: "Interior Shampoo",
      description:
        "Deep cleaning of your vehicle's interior fabrics to remove stains and odors.",
      image: "/images/services/interior-shampoo.jpg",
    },
    {
      title: "Engine Bay Cleaning",
      description:
        "Thorough cleaning of your engine bay to remove dirt and grime.",
      image: "/images/services/engine-bay-cleaning.jpg",
    },
    {
      title: "Salt Removal",
      description:
        "Effective removal of salt deposits from your vehicle's surfaces.",
      image: "/images/services/salt-removal.jpg",
    },
    {
      title: "Clay Bar and Spray Wax",
      description:
        "Smooth your vehicle's paint and protect it with a high-quality wax.",
      image: "/images/services/clay-bar-wax.jpg",
    },
    {
      title: "Wheel and Tire Cleaning",
      description:
        "Detailed cleaning of your wheels and tires to enhance their appearance.",
      image: "/images/services/wheel-tire-cleaning.jpg",
    },
    {
      title: "Vacuuming",
      description:
        "Complete vacuuming of your vehicle's interior to remove dirt and debris.",
      image: "/images/services/vacuuming.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the range of services we offer to keep your vehicle
              looking its best.
            </p>
          </div>
        </div>
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
    </section>
  );
};

export default ServicesPage;
