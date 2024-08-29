import React from "react";

const ServiceArea: React.FC = () => {
  const serviceAreas = [
    "Beaconsfield",
    "Dorval",
    "Île-Bizard",
    "Kirkland",
    "LaSalle",
    "Nun's Island",
    "Le Plateau-Mont-Royal",
    "Notre-Dame-de-Grâce",
    "Pierrefonds",
    "Pointe-Claire",
    "Sainte-Anne-de-Bellevue",
    "Westmount",
    "Laval",
    "Vaudreuil",
    "Île-Perrot",
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <img
            src="/images/other/mtlmap.webp"
            alt="A map of Montreal showcasing our service area"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center space-y-4 lg:ml-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Servicing the Montreal area and surrounding cities - At your home
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We’re a fully mobile detailing service. All we need is access to a
              power outlet and hose, and we’re ready to work. Simple and
              hassle-free.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We service the Greater Montreal area and surrounding areas. There
              might be a few limitations or criteria to meet based on where you
              live. Regardless, we’ll do our best to schedule you in. Here are
              all the areas we service:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 text-red-500">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center space-x-2">
                  <span role="img" aria-label="bullet point">
                    ➤
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            {/* Uncomment the button below to allow online booking */}
            {/* <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Book Online Now
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
