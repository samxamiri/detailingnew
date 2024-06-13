// components/HeroSection.js
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
        <video
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          autoPlay
          loop
          muted
          width="800"
          height="600"
        >
          <source src="/videos/ezyZip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              {"Elevate Your Ride with Sam's Mobile Detailing"}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Experience the ultimate in car care with our comprehensive
              detailing services. Transform your vehicle from dull to dazzling
              with our expert touch.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#packages"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
