import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure the path is correct based on your project structure
import { FaCheck, FaTimes } from "react-icons/fa";

const Packages = () => {
  // Define package details
  const packageDetails = [
    {
      title: "Basic Interior",
      basePrice: "$50",
      prices: {
        miniSports: "$50",
        sedan: "$70",
        suv: "$90",
        extraLarge: "$110",
      },
      features: [
        { text: "Quick wipe down on all interior surfaces", available: true },
        {
          text: "Complete interior Vacuum",
          available: true,
        },
        { text: "Leather seat cleaning", available: true },
        {
          text: "Interior glass",
          available: true,
        },
        { text: "Leather seat cleaning & conditioning", available: true },
        { text: "Interior glass", available: true },
        { text: "Carpet/Upholstery shampoo", available: false },
        { text: "Door jambs", available: false },
        { text: "Headliner", available: false },
      ],
      description:
        "A basic interior cleaning to keep your vehicle's interior neat and tidy.",
    },
    {
      title: "Interior",
      basePrice: "$70",
      prices: {
        miniSports: "$95",
        sedan: "$135",
        suv: "$200",
        extraLarge: "$230",
      },
      features: [
        { text: "Dash, door panels, cup holders & console", available: true },
        {
          text: "Full wipe down/details of all plastics/vinyls",
          available: true,
        },
        { text: "Vacuum", available: true },
        {
          text: "Interior wipe down (dashboard, door panels, center console, cup holders)",
          available: true,
        },
        { text: "Door jambs", available: true },
        { text: "Headliner", available: true },
        { text: "Upholstery shampoo/stain removal", available: true },
        { text: "Carpet Shampoo/stain removal", available: true },
        { text: "Leather seat cleaning & conditioning", available: true },
        { text: "Interior glass", available: true },
        { text: "Full interior protection", available: true },
      ],
      description:
        "A thorough interior cleaning to ensure every nook and cranny inside your vehicle is spotless.",
    },
    {
      title: "Basic Exterior",
      basePrice: "$80",
      prices: {
        miniSports: "$80",
        sedan: "$100",
        suv: "$120",
        extraLarge: "$170",
      },
      features: [
        { text: "Wheels/tires/wheel wells", available: true },
        { text: "Complete wash", available: true },
        { text: "Bug detail", available: true },
        { text: "Tar removal", available: true },
        { text: "Rinsing Aid/Exterior Protection", available: true },
        { text: "Glass detail", available: true },
        { text: "Clay bar (where needed)", available: true },
        { text: "Paint Decontamination (where needed)", available: false },
        { text: "Complete Clay Bar", available: false },
        { text: "Complete Exterior Protection", available: false },
      ],
      description:
        "A basic exterior cleaning to maintain the appearance of your vehicle.",
    },
    {
      title: "Exterior",
      basePrice: "$150",
      prices: {
        miniSports: "$80",
        sedan: "$100",
        suv: "$120",
        extraLarge: "$170",
      },
      features: [
        { text: "Wheels/tires/wheel wells", available: true },
        { text: "Complete wash", available: true },
        { text: "Clay bar/Paint Decontamination", available: true },
        { text: "Bug detail", available: true },
        { text: "Gas cap degrease and detail", available: true },
        { text: "Tar removal", available: true },
        { text: "Tree sap/Miscellaneous dirt removal", available: true },
        { text: "Long term exterior protection", available: true },
        { text: "Glass detail", available: true },
      ],
      description:
        "An extensive exterior cleaning to make your car shine and protect it from the elements.",
    },
    {
      title: "Complete Detail",
      basePrice: "$140",
      prices: {
        miniSports: "$135",
        sedan: "$205",
        suv: "$270",
        extraLarge: "$320",
      },
      features: [
        { text: "Interior Only", available: true },
        { text: "Exterior Only", available: true },
      ],
      description:
        "Combines our thorough interior and exterior cleaning packages for a complete vehicle transformation.",
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
              className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {packageDetail.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {packageDetail.description}
                </p>
                <div className="flex flex-col items-start mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold">
                    Prices:
                  </span>
                  <div className="dark:bg-gray-700 p-2 rounded-lg text-lg font-bold text-gray-800 dark:text-gray-200 space-y-1">
                    <p>Mini/Sports: {packageDetail.prices.miniSports}</p>
                    <p>Sedan: {packageDetail.prices.sedan}</p>
                    <p>SUV: {packageDetail.prices.suv}</p>
                    <p>Extra Large: {packageDetail.prices.extraLarge}</p>
                  </div>
                  <Link href="/contact" passHref>
                    <Button className="mt-4" variant="outline">
                      Book Now
                    </Button>
                  </Link>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  {packageDetail.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      {feature.available ? (
                        <FaCheck
                          className="text-green-500 mr-2"
                          style={{ flexShrink: 0 }}
                        />
                      ) : (
                        <FaTimes
                          className="text-red-500 mr-2"
                          style={{ flexShrink: 0 }}
                        />
                      )}
                      <span
                        className={`ml-1 ${
                          !feature.available ? "text-red-500" : ""
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
