import React from "react";

const OurServices: React.FC = () => {
  const services = [
    {
      title: "Mini Interior Cleaning",
      description:
        "Our mini interior cleaning is perfect for vehicles that are relatively clean but need a bit of a touch-up. This service includes light vacuuming of the floors and seats, as well as a thorough wipe-down of all interior surfaces to remove dust and minor dirt. It's an ideal maintenance service to keep your car looking fresh between full detailing sessions.",
      image: "/images/other/IMG_7596.PNG",
      alt: "Mini Interior Cleaning",
    },
    {
      title: "Full Interior Cleaning",
      description:
        "Our full interior cleaning service is a deep clean that includes a comprehensive vacuuming of all carpets, seats, and mats, followed by a shampoo and hot water extraction to remove tough stains and odors. This service also includes detailed cleaning of all interior surfaces, including the dashboard, door panels, and center console, ensuring your car’s interior feels like new.",
      image: "/images/other/carpet.png",
      alt: "Full Interior Cleaning",
    },
    {
      title: "Exterior Premium Wash",
      description:
        "Our exterior premium wash is a meticulous hand wash that addresses the toughest contaminants like sap and tar. We use specialized mitts and foam to ensure your vehicle’s paint is thoroughly cleaned without damage. After the wash, we apply a high-quality spray wax to add an extra layer of protection, ensuring your vehicle looks its best and is shielded from the elements.",
      image: "/images/other/IMG_7598.PNG",
      alt: "Exterior Premium Wash",
    },
  ];

  return (
    <section className="w-full py-16 md:py-28 lg:py-36 mb-16">
      <div className="container px-4 md:px-8 flex flex-col items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            Our Detailing Services
          </h2>
        </div>
      </div>

      {services.map((service, index) => (
        <div
          key={service.title}
          className={`container px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                {service.title}
              </h3>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
          <img
            alt={service.alt}
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
            height="600"
            src={service.image}
            width="800"
          />
        </div>
      ))}
    </section>
  );
};

export default OurServices;
