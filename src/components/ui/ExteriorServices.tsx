import React from "react";

const ExteriorServices: React.FC = () => {
  const services = [
    {
      title: "Car Wash",
      description:
        "A traditional car wash blasts your vehicle’s paint with harsh products and chemicals only to damage the paint long term! Only in DETAILING can we take a nasty car and restore its beautiful finish. Let’s face it... in Montreal our cars are subject to crazy weather... that’s why auto detailing Montreal is HERE!",
      image: "/images/other/carwash.png",
    },
    {
      title: "Paint Decontamination",
      description:
        "If we want to truly detail your car’s paint... car washing won’t be enough. After the car wash stage, it’s necessary to use specific detailing tools and products to clean the paint of everything that won’t come off during the wash process... If you don’t, it’s like a cavity that doesn’t get filled. There will be serious problems down the road.",
      image: "/images/other/decontamination.jpg",
    },
    {
      title: "Paint Protection",
      description:
        "Finally, the paint is protected with a long-term durability coating to ensure that the paint is protected for months and even YEARS depending on the product. Your car is a HUGE investment... don’t drive it unprotected.",
      image: "/images/other/paintprotection.jpg",
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
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Exterior Detailing Services
                </h2>
                <ul className="max-w-[600px] text-gray-800 md:text-2xl dark:text-gray-400 list-disc list-inside">
                  <li>Complete Exterior Car Wash</li>
                  <li>Paint Decontamination</li>
                  <li>Clay Bar Treatment</li>
                  <li>Chemical Decontamination</li>
                  <li>Wheel, Wheel Well, & Tire Detail</li>
                  <li>Bug Detail</li>
                  <li>Complete Paint Protection on All Exterior Surfaces</li>
                </ul>
              </div>
            </div>
            <img
              alt="Exterior Detailing"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              height="600"
              src="/images/other/shiny.jpg"
              width="800"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExteriorServices;
