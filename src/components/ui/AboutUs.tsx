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
              ["Sam's Mobile Detailing is run by a passionate one-man team based
              in West Island. Dedicated to cars and detailing, I offer my
              services to help take care of your vehicles, ensuring they last
              longer and look their best."]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
