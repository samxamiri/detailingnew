import React from "react";

const InteriorServices: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start mb-8"></div>

        <div className="text-center mb-12" style={{ marginBottom: "50px" }}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl mb-16 pt-20">
            Interior Detailing In Montreal
          </h1>
        </div>

        <section
          className="w-full"
          style={{ marginTop: "50px", padding: "50px 0" }} // Custom padding here
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  No More &apos;Halfway&apos; Detailing
                </h2>
                <p className="max-w-[600px] text-gray-800 md:text-2xl dark:text-gray-400">
                  Most of the time, our auto detailing customers here in
                  Montreal don&apos;t want to tell the detailer what they
                  need…They want the detailer to know what their car needs, and
                  give it to them! When we see a dirty interior in need of a
                  complete interior detail… our customers don&apos;t know if
                  they need steaming, chemical cleaning, or extraction. They
                  just want the interior to feel new again! And that is exactly
                  what we do. Rather than making you guess which interior
                  detailing package and price is best for you, we&apos;ll just
                  restore your vehicle&apos;s interior at a simple price point.
                </p>
              </div>
            </div>
            <img
              alt="No More 'Halfway' Detailing"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              height="600"
              src="/images/other/weathermat.webp"
              width="800"
            />
          </div>
        </section>

        <section
          className="w-full"
          style={{ marginTop: "50px", padding: "50px 0" }} // Custom padding here
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            <img
              alt="Interior Detailing"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              height="600"
              src="/images/other/airgun.png"
              width="800"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  What Does An Interior Detail Include?
                </h2>
                <p className="max-w-[600px] text-gray-800 md:text-2xl dark:text-gray-400">
                  Rather than make you pick what service you think you need… we
                  include everything that is necessary to restore your
                  vehicle&apos;s interior to perfection!
                </p>
                <ul className="max-w-[600px] text-gray-800 md:text-2xl dark:text-gray-400 list-disc list-inside">
                  <li>Complete interior chemical clean</li>
                  <li>All cracks and crevices</li>
                  <li>All hard interior plastics</li>
                  <li>All vinyl or rubber surfaces</li>
                  <li>Everywhere the eye can and can&apos;t see</li>
                  {/* <li>Complete interior steam cleaning</li> */}
                  {/* <li>Spot and stain treatment</li> */}
                  <li>Carpet shampoo</li>
                  {/* <li>Interior hot water extraction</li> */}
                  <li>Door jamb detail</li>
                  {/* <li>Headliner detail</li> */}
                  <li>All interior glass</li>
                  <li>Interior vacuuming on every necessary surface</li>
                  <li>Complete interior protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InteriorServices;
