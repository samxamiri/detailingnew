import Layout from "@/components/ui/Layout";
import React from "react";

const WestIslandMobileDetailing: React.FC = () => {
  return (
    <div>
      <Layout>
        {/* Hero Section */}
        <section className="relative w-full h-64 md:h-96 lg:h-[500px] bg-gray-800 text-white flex items-center justify-center">
          <img
            src="/images/other/foam.webp" // Replace with your hero image
            alt="Premium Car Wash"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              Trusted Mobile Detailing in Beauharnois
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Big or small, Sam's Mobile Detailing is up for the job
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section py-16 px-4 bg-white">
          <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dependable Beauharnois Mobile Detailers
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our goal is to be a hassle-free experience for you. We know
                you're busy and we want to respect your time. That's why from
                start to finish, we'll be proactive with communicating with you
                to make sure you always know what's going on. If we're running
                behind on time, we'll be sure to let you know. Here's a few
                other things that make us your preferred choice:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                <li>
                  <strong>Always on time:</strong> We plan our routes to get to
                  your appointment on time (and when we're not, we'll let you
                  know ahead of time)
                </li>
                <li>
                  <strong>Constant communication:</strong> From the first phone
                  call to when we're completing your vehicle, we'll always keep
                  you in the loop of what's going on
                </li>

                <li>
                  <strong>Hassle-free experience:</strong> Our primary goal is
                  to make the entire detailing process, from start to finish, as
                  seamless and headache-free
                </li>
              </ul>

              <p className="text-lg text-gray-700 mb-4">
                Need us to travel somewhere else like{" "}
                <a href="#" className="text-red-600 underline">
                  Brossard
                </a>
                ,{" "}
                <a href="#" className="text-red-600 underline">
                  Nun's Island
                </a>
                , or{" "}
                <a href="#" className="text-red-600 underline">
                  Laval
                </a>
                ? No worries! Please reach out and ask. We do our best to
                accommodate our customers.
              </p>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
              <img
                src="/images/other/hero.jpg" // Replace with your appropriate image
                alt="Mobile Detailing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section py-16 px-4 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Quality Detailing Services
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ul className="text-lg text-gray-700 space-y-4">
                  <li>
                    <strong>Full Interior Cleaning:</strong> The goal is to
                    clean your interior back to the best condition possible.
                    We'll clean the floor mats, door panels, center console,
                    headliner, seats, etc. We'll open up all the compartments
                    and get into all the nooks and crannies to give your car a
                    like-new feel.
                  </li>
                  <li>
                    <strong>Mini Interior Detail:</strong> Our mini interior
                    cleaning is perfect for vehicles that are relatively clean
                    but need a bit of a touch-up. This service includes light
                    vacuuming of the floors and seats, as well as a thorough
                    wipe-down of all interior surfaces to remove dust and minor
                    dirt. It's an ideal maintenance service to keep your car
                    looking fresh between full detailing sessions.
                  </li>
                  <li>
                    <strong>Premium Wash:</strong> The goal is to clean the
                    toughest contaminants like sap and tar. We use specialized
                    mitts and foam to ensure your vehicle’s paint is thoroughly
                    cleaned without damage. After the wash, we apply a
                    high-quality spray wax to add an extra layer of protection,
                    ensuring your vehicle looks its best and is shielded from
                    the elements.
                  </li>
                  {/* <li>
                    <strong>Wash and Wax:</strong> Want to add more shine and
                    protection to your paint? This is a great option. Your paint
                    will be super slick and shiny once we’re done.
                  </li> */}
                  {/* <li>
                    <strong>Headlight Restoration:</strong> Do you have foggy
                    and hazy headlights? This can make your car look less
                    appealing and have an impact on your nighttime visibility.
                    We’ll wet-sand, compound, polish, and protect your
                    headlights back to like-new condition.
                  </li> */}
                  {/* <li>
                    <strong>Engine Cleaning:</strong> Whether you just purchased
                    the vehicle or you want to sell it, an engine cleaning will
                    bring life to your car. We’ll thoroughly clean the engine
                    bay, completely dry it, and then dress all plastic and vinyl
                    material to make it shine.
                  </li> */}
                </ul>
                <div className="text-center mt-8">
                  <a
                    href="#quote-section"
                    className="btn btn-primary text-white bg-red-600 py-3 px-8 rounded-md"
                  >
                    Start Your Quote
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/other/detailing-service.jpg" // Replace with your appropriate image
                  alt="Quality Detailing Services"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section py-16 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Check Out The Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/path/to/image1.jpg"
                alt="Detailing Image 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image2.jpg"
                alt="Detailing Image 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image3.jpg"
                alt="Detailing Image 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image4.jpg"
                alt="Detailing Image 4"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image5.jpg"
                alt="Detailing Image 5"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image6.jpg"
                alt="Detailing Image 6"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image7.jpg"
                alt="Detailing Image 7"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/path/to/image8.jpg"
                alt="Detailing Image 8"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center mt-8">
              <a
                href="#quote-section"
                className="btn btn-primary text-white bg-red-600 py-3 px-8 rounded-md"
              >
                Start Your Quote
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-16 px-4 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>

            <ul className="text-lg text-gray-700 space-y-4">
              <li>
                <strong>What other areas do you cover?</strong> We service a lot
                more areas than just West Island. We go to Montreal and
                surrounding areas like Brossard, Boisbriand, and Vaudreuil.
              </li>
              <li>
                <strong>Can you detail my car at my job?</strong> No, as of
                right now we need access to a hose and a power outlet to get the
                job done.
              </li>
              <li>
                <strong>
                  Do I have to schedule an appointment for a mobile detailing
                  service?
                </strong>{" "}
                90% of the time, we’re by appointment only. Every now and then,
                we’ll be able to get you in the same day or next day. It just
                depends on the workload for that week.
              </li>
              {/* <li>
                <strong>Can I see more of your work?</strong> I’m glad you
                asked. We have a specific gallery for our Engine Cleaning, Full
                Interior Cleaning, Wash and Wax, and Paint Correction.
              </li> */}
              <li>
                <strong>What form of payment do you accept?</strong> You can pay
                by cash or e-trasnfer, whichever you prefer. We’ll accept
                payment once we’re done with the job and you’re happy with the
                results.
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default WestIslandMobileDetailing;
