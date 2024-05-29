/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ab18FXqmedi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div key="1" className="min-h-[100dvh] flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CarIcon className="h-6 w-6" />
          <span className="sr-only">Pristine Auto Detailing</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Gallery
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12">
            <img
              alt="Freshly Detailed Car"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              height="600"
              src="/placeholder.svg"
              width="800"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Elevate Your Ride with Pristine Auto Detailing
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the ultimate in car care with our comprehensive
                  detailing services. Transform your vehicle from dull to
                  dazzling with our expert touch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Book Now
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Detailing Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From a simple wash to a complete transformation, we offer a
                  range of detailing services to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Exterior Wash</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A thorough hand wash and dry, including wheels, tires, and
                  door jambs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Interior Cleaning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Vacuuming, wiping down surfaces, and shampooing carpets and
                  upholstery.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Paint Decontamination</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Removing contaminants with a clay bar to restore a
                  smooth-to-the-touch texture.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Headlight Restoration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Bringing dull, cloudy headlights back to life for improved
                  visibility and appearance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Sealant Coating</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A long-lasting protective layer that enhances shine and repels
                  dirt and water.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Engine Detailing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cleaning and degreasing the engine compartment for a
                  showroom-ready look.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Before & After
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See the incredible transformation our detailing services can
                  achieve.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <img
                  alt="Before"
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">Before</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A dull and neglected exterior.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  alt="After"
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">After</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A freshly detailed, gleaming exterior.
                  </p>
                </div>
              </div>
              <Button className="ml-auto w-full sm:w-auto" variant="outline">
                <ChevronRightIcon className="w-4 h-4" />
                Next
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Packages
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from our comprehensive detailing packages to find the
                  perfect solution for your vehicle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Basic Detailing</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {
                    "A thorough exterior wash and interior cleaning to restore your vehicle's shine."
                  }
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">$99</span>
                  <Button variant="outline">Book Now</Button>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>Exterior Hand Wash</li>
                  <li>Tire & Wheel Cleaning</li>
                  <li>Interior Vacuum & Wipe Down</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Interior Only</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Interior Wipe Down (dashboard, door panels, center console,
                  cup holders) Deep Vacuum Clean Windows, Floor Mats & Door Jams
                  Carpet & Seat Shampoo + Extraction Leather Cleaner and
                  Conditioner (if applicable)
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">$249</span>
                  <Button variant="outline">Book Now</Button>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>Exterior Hand Wash & Clay Bar</li>
                  <li>Paint Correction & Polishing</li>
                  <li>Interior Deep Clean & Conditioning</li>
                  <li>Ceramic Coating Application</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Ultimate Detailing</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  The ultimate in car care, leaving your vehicle in showroom
                  condition.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">$399</span>
                  <Button variant="outline">Book Now</Button>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>Exterior Hand Wash & Clay Bar</li>
                  <li>Paint Correction & Polishing</li>
                  <li>Interior Deep Clean & Conditioning</li>
                  <li>Ceramic Coating Application</li>
                  <li>Engine Bay Detailing</li>
                  <li>Headlight Restoration</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Deluxe Detailing</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  The ultimate in car care, leaving your vehicle in showroom
                  condition with additional services.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">$499</span>
                  <Button variant="outline">Book Now</Button>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>Exterior Hand Wash & Clay Bar</li>
                  <li>Paint Correction & Polishing</li>
                  <li>Interior Deep Clean & Conditioning</li>
                  <li>Ceramic Coating Application</li>
                  <li>Engine Bay Detailing</li>
                  <li>Headlight Restoration</li>
                  <li>Wheel & Tire Dressing</li>
                  <li>Leather Conditioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Separator className="my-12 md:my-16 lg:my-20" />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get in touch with us to learn more about our services or to
                  schedule an appointment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
