import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who Are We?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pristine Auto Detailing is a family-owned business that has been
              providing top-notch car care services for over 20 years. Our team
              of experienced technicians is dedicated to transforming vehicles
              of all makes and models, restoring them to their showroom-like
              condition. We take pride in our attention to detail and commitment
              to customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
