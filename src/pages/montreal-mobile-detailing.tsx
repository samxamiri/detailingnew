import Layout from "@/components/ui/Layout";
import React from "react";

const KirklandMobileDetailing: React.FC = () => {
  return (
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
            Trusted Mobile Detailing in Montreal
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Big or small, Sam's Mobile Detailing is up for the job
          </p>
        </div>
      </section>

      {/* Service Menu Section */}
      <section className="service-menu-section py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sam's Mobile Detailing Service Menu
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Here’s a list of the mobile detailing services we offer:
          </p>
          <ul className="text-lg text-gray-700 space-y-4">
            <li>
              <strong>Full Interior Cleaning:</strong> The goal is to clean your
              interior back to the best condition possible. Everything will be
              vacuumed (including the trunk), the fabric surfaces will be
              shampooed, and all the plastic and leather surfaces will be
              thoroughly cleaned. We’ll open up all the compartments and get
              into all the nooks and crannies to give your car a like-new feel.
            </li>
            <li>
              <strong>Mini Interior Detail:</strong> Our mini interior cleaning
              is perfect for vehicles that are relatively clean but need a bit
              of a touch-up. This service includes light vacuuming of the floors
              and seats, as well as a thorough wipe-down of all interior
              surfaces to remove dust and minor dirt. It's an ideal maintenance
              service to keep your car looking fresh between full detailing
              sessions.
            </li>
            {/* <li>
              <strong>Wash and Wax:</strong> Want to add more shine and
              protection to your paint? This is a great option. Your paint will
              be super slick and shiny once we’re done.
            </li> */}
            {/* <li>
              <strong>Engine Cleaning:</strong> Whether you just purchased the
              vehicle, you want to sell it, or you just want to clean it up.
              Cleaning your engine bay will give it a better appearance and will
              make it easier to spot leaks. We’ll thoroughly clean the engine
              bay, completely dry it, and then dress all plastic and vinyl
              material to make it shine.
            </li> */}
            <li>
              <strong>Premium Wash:</strong> To get your vehicle back to
              standard, we’ll perform our gentle foam wash to remove the bugs,
              grime, and brake dust off your paint and wheels. This is great to
              maintain your level up to proper levels without adding swirls or
              scratches (highly recommend for vehicles that have a{" "}
              <a href="#" className="text-red-600 underline">
                ceramic coating
              </a>
              ).
            </li>
            {/* <li>
              <strong>Headlight Restoration:</strong> Overtime, the clear coat
              on the headlights starts to degrade. This is what turns them hazy
              and foggy. With this service, we can restore them back to a
              like-new condition. You’ll have much better visibility at night
              and the car will look better overall.
            </li> */}
          </ul>
          {/* <p className="text-lg text-gray-700 mt-6">
            We have additional services we offer at our shop:
          </p> */}
          {/* <ul className="text-lg text-gray-700 space-y-4">
            <li>
              <strong>Paint Protection Film:</strong> The most durable form of
              protection for your vehicle. This is a thick, 8mm layer of
              protection that can withstand rock chips, bird etchings, and more.
            </li>
            <li>
              <strong>Color Changing Wraps:</strong> Want to change the color of
              your vehicle? Or maybe just change the color of your hood or roof?
              Vinyl wrapping is a great option to change the appearance of your
              vehicle.
            </li>
            <li>
              <strong>Paint Correction:</strong> Make your car shine like when
              it rolled off the showroom floor. This will bring maximum gloss
              and clarity.
            </li>
            <li>
              <strong>Ceramic Coating:</strong> Whether it’s on your paint,
              vinyl, or PPF, a ceramic coating will make maintaining your
              vehicle so much easier (while adding a ton of gloss).
            </li>
          </ul> */}
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas-section py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Mobile Detailing Service Areas
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            And don’t worry, we have customers all spread out through Houston
            and surrounding areas. So if you live in The Woodlands but work in
            Spring, that’s no problem for us. Whether it’s easier for us to work
            at your home location in The Woodlands or at your work location in
            Spring, you just need to let us know.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Here’s some of our frequent detailing service areas:
          </p>
          <ul className="text-lg text-gray-700 list-disc list-inside">
            <ul>
              <li>Montreal</li>
              <li>Ile-Perrot</li>
              <li>Laval</li>
              <li>Pincourt</li>
              <li>Vaudreuil</li>
              <li>Brossard</li>
              <li>West-Island</li>
              <li>Boisbriand</li>
              <li>Châteauguay</li>
              <li>Bois-Des-Filion</li>
              <li>Saint-Eustache</li>
              <li>Deux-Montagnes</li>
              <li>Beauharnois</li>
              <li>Kahnawake</li>
            </ul>
          </ul>
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
              more areas than just Beaconsfield. We go to Montreal and
              surrounding areas like Pointe-Claire, Dorval, and Kirkland.
            </li>
            <li>
              <strong>Can you detail my car at my job?</strong> No, as of right
              now we need access to a hose and a power outlet to get the job
              done.
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
              by cash or e-trasnfer, whichever you prefer. We’ll accept payment
              once we’re done with the job and you’re happy with the results.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default KirklandMobileDetailing;
