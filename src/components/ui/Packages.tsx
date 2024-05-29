// src/components/Packages.tsx
import { Button } from "@/components/ui/button";  // Ensure the path is correct based on your project structure

const Packages = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Packages
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose from our comprehensive detailing packages to find the perfect solution for your vehicle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          {packageDetails.map((packageDetail, index) => (
            <PackageCard key={index} {...packageDetail} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Data for packages
const packageDetails = [
  {
    title: "Basic Detailing",
    price: "$99",
    features: [
      "Exterior Hand Wash",
      "Tire & Wheel Cleaning",
      "Interior Vacuum & Wipe Down"
    ],
    description: "A thorough exterior wash and interior cleaning to restore your vehicle's shine."
  },
  {
    title: "Interior Only",
    price: "$249",
    features: [
      "Exterior Hand Wash & Clay Bar",
      "Paint Correction & Polishing",
      "Interior Deep Clean & Conditioning",
      "Ceramic Coating Application"
    ],
    description: "Deep interior cleaning including shampooing of carpets and seats, plus luxury detailing."
  },
  {
    title: "Ultimate Detailing",
    price: "$399",
    features: [
      "Full service that covers all aspects of car care for enthusiasts.",
      "Paint Protection",
      "Upholstery Conditioning",
      "High-Performance Coatings"
    ],
    description: "The ultimate package for maintaining a pristine look and adding protective coatings."
  },
  {
    title: "Deluxe Detailing",
    price: "$499",
    features: [
      "Complete service package offering top-tier detailing and restoration services.",
      "Advanced Paint Correction",
      "Engine Bay Detailing",
      "Custom Wax Treatment"
    ],
    description: "Comprehensive detailing package designed for those who demand the best for their car."
  }
];

const PackageCard = ({ title, price, features, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold">{price}</span>
        <Button variant="outline">Book Now</Button>
      </div>
      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;
