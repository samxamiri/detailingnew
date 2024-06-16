import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure the path is correct based on your project structure

const Packages = () => {
  // Define package details
  const packageDetails = [
    {
      title: "Basic Detailing",
      price: "$95",
      features: [
        "Exterior hand wash",
        "Rim clean & tire shine",
        "Vacuum",
        "Interior wipe down (dashboard, door panels, center console, cup holders)",
      ],
      description:
        "A thorough exterior wash and interior cleaning to restore your vehicle's shine.",
      additionalPricing: {
        suv: "+$20",
        extraLarge: "+$30",
      },
    },
    {
      title: "Interior Deluxe",
      price: "$150",
      features: [
        "Interior wipe down (dashboard, door panels, center console, cup holders)",
        "Deep vacuum",
        "Carpet & seat shampoo",
        "Leather cleaner and conditioner (if applicable)",
      ],
      description:
        "Deep interior cleaning including shampooing of carpets and seats, plus luxury detailing.",
      additionalPricing: {
        suv: "+$20",
        extraLarge: "+$30",
      },
    },
    {
      title: "Exterior Deluxe",
      price: "$140",
      features: [
        "Hand wash",
        "Tire clean & shine",
        "Paint decontamination with clay",
        "Liquid sealant (6 months of protection)",
      ],
      description:
        "The ultimate package for maintaining a pristine look and adding a long lasting protective coating.",
      additionalPricing: {
        suv: "+$20",
        extraLarge: "+$30",
      },
    },
    {
      title: "The All In One",
      price: "$250",
      features: ["Exterior only package", "Interior Only Package"],
      description:
        "Comprehensive detailing package designed for those who demand the best for their car.",
      additionalPricing: {
        suv: "+$20",
        extraLarge: "+$30",
      },
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Packages
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            Choose from our comprehensive detailing packages to find the perfect
            solution for your vehicle.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          {packageDetails.map((packageDetail, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950"
            >
              <h3 className="text-xl font-bold mb-4">{packageDetail.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {packageDetail.description}
              </p>
              <div className="flex flex-col items-start mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Starts at
                </span>
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {packageDetail.price}
                </span>
                <Link href="#contact" passHref>
                  <Button className="mt-2" variant="outline">
                    Book Now
                  </Button>
                </Link>
              </div>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                {packageDetail.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <p className="text-xs mt-4">
                SUV: {packageDetail.additionalPricing.suv}, Extra Large:{" "}
                {packageDetail.additionalPricing.extraLarge}
              </p>
            </article>
          ))}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-6 mb-12 text-center">
          <p>* Not all carpet stains are guaranteed to be removed.</p>
          <p>
            * All packages require access to a water hose and a power outlet
            near the car.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
