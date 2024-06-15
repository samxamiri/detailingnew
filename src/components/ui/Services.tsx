import React from "react";

const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Detailing Services
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              From a simple wash to a complete transformation, we offer a range
              of detailing services to meet your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <ServiceItem
            title="Exterior Wash"
            description="A thorough hand wash and dry, including wheels, tires, and door jambs."
          />
          <ServiceItem
            title="Interior Cleaning"
            description="Vacuuming, wiping down surfaces, and shampooing carpets and upholstery."
          />
          <ServiceItem
            title="Paint Decontamination"
            description="Removing contaminants with a clay bar to restore a smooth-to-the-touch texture."
          />
          <ServiceItem
            title="Tire and Wheel Cleaning"
            description="Removal of dirt, brake dust, and grime, ensuring enhanced appearance and longevity of your tires."
          />
          <ServiceItem
            title="Sealant Coating"
            description="A long-lasting protective layer that enhances shine and repels dirt and water."
          />
          <ServiceItem
            title="Upholstery and carpet shampooing"
            description="Removal of stains and odors from upholstery and carpets, leaving your car’s interior fresh and meticulously clean."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, description }: any) => {
  return (
    <article className="grid gap-1">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </article>
  );
};

export default Services;
