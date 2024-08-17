import { useEffect, useState } from "react";

export default function AboutComponent() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing on the server
  }

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-100 dark:bg-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl text-center text-gray-900 dark:text-gray-100">
              Mobile Auto Detailing In Montreal
            </h1>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-12 lg:mt-24">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    alt="Audi SQ5 covered in foam during foam bath"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-lg"
                    height="800"
                    src="/images/other/foam.webp"
                    width="800"
                  />
                  <img
                    alt="Audi SQ5 shining in the sun after wash and spray wax"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-lg"
                    height="800"
                    src="/images/other/q5.webp"
                    width="800"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start space-y-6">
                <p className="max-w-[600px] text-lg md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
                  Finding an auto detailer in Montreal who knows what your car
                  needs, and can give it to you at a price that makes sense,
                  should be easy to find right? Well for me…it wasn&apos;t.
                </p>
                <p className="max-w-[600px] text-lg md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
                  I searched high and low throughout Montreal to find a
                  dependable mobile auto detailer who I could trust and all I
                  found were crazy prices, detailers who show up late (if at
                  all), and half-hearted jobs that left me unsatisfied.
                  That&apos;s why Sam&apos;s Mobile Detailing was born.
                </p>
                <p className="max-w-[600px] text-lg md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
                  While I have always had a passion for auto detailing, I knew
                  that we could deliver the very thing that I wanted in the form
                  of a great detailing experience to local customers in Montreal
                  in a way that I couldn&apos;t find. In my experience, our
                  mobile detailing customers want four things:
                </p>
                <ul className="max-w-[600px] text-lg md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed list-disc pl-4 mt-4">
                  <li>A price that won&apos;t hurt their wallet.</li>
                  <li>
                    A clear expectation of what is, and is not possible with
                    their vehicle.
                  </li>
                  <li>On-time service without inconvenient rescheduling.</li>
                  <li>
                    Someone they can call again when they want a detailer they
                    can depend on.
                  </li>
                </ul>
                <p className="max-w-[600px] text-lg md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
                  In our auto detailing world here in Montreal, QC…we take a
                  simple approach; incredible service that is convenient, prices
                  that customers can afford, higher-end detailing than anyone
                  else, and a straightforward service where you know what you
                  are getting.
                </p>
              </div>
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
