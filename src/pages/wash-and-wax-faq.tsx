import Layout from "@/components/ui/Layout";
import Head from "next/head";
import React from "react";

const WashAndWaxFAQ: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title> Mobile Hand Wash FAQs | Sam&apos;s Mobile Detailing</title>
        <meta
          name="description"
          content="Have any questions regarding our mobile hand wash services? We have compiled a list of the most frequently asked questions for you to look at!"
        />
      </Head>
      <div className="min-h-[100dvh] flex flex-col bg-gray-100 dark:bg-gray-900">
        <main className="flex-1 py-12 md:py-24 lg:py-32">
          <section className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl text-center text-gray-900 dark:text-gray-100 mb-12">
              Wash and Wax FAQ
            </h1>
            <div className="max-w-[800px] mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  What is included in your{" "}
                  <a href="hand-wash.tsx">Wash and Wax service</a>?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Our Wash and Wax service includes a thorough hand wash of your
                  vehicle, followed by a drying process using soft microfiber
                  towels. We then apply a high-quality spray wax to all exterior
                  surfaces, including the paint, glass, and trim. The wax
                  provides a protective layer that enhances the shine and offers
                  a barrier against environmental contaminants. This service
                  also includes wheel cleaning, tire dressing, and cleaning of
                  the exterior windows.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How often should I get a Wash and Wax service?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  The frequency of a Wash and Wax service depends on your
                  driving habits, the environment your vehicle is exposed to,
                  and your personal preference for maintaining its appearance.
                  Generally, we recommend getting this service every 4-6 weeks
                  to keep your car&apos;s paint looking vibrant and to maintain
                  a protective barrier against dirt, UV rays, and other
                  contaminants.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  What is{" "}
                  <a href="paint-decontamination">paint decontamination</a>, and
                  why is it important?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Paint decontamination is a process used to remove bonded
                  contaminants from your vehicle&apos;s paint, such as
                  industrial fallout, tar, tree sap, and iron particles. These
                  contaminants can adhere to the paint and cause damage over
                  time, including dulling the finish and promoting rust.
                  Decontaminating the paint ensures that the surface is clean
                  and smooth, allowing for better adhesion of protective
                  products like wax or sealant and enhancing the overall
                  appearance of your vehicle.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How do you remove bug guts from my vehicle?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Bug guts can be tough to remove, especially if they have been
                  on the surface for an extended period. We use specialized bug
                  removers and gentle scrubbing tools to safely and effectively
                  break down and remove bug splatters without damaging the
                  paint. It&apos;s essential to remove bug guts promptly, as
                  their acidic content can etch into the paint if left untreated
                  for too long.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  What is iron fallout, and how do you remove it?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Iron fallout consists of tiny iron particles that can come
                  from brake dust, rail dust, or industrial pollution. These
                  particles can embed themselves into your vehicle&apos;s paint,
                  leading to rust spots if not removed. We use an iron remover,
                  a specialized chemical that reacts with the iron particles,
                  dissolving them and allowing them to be safely washed away.
                  This process is crucial for maintaining the integrity and
                  appearance of your vehicle&apos;s paint.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Can your Wash and Wax service remove all contaminants from my
                  paint?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  While our Wash and Wax service does a great job of cleaning
                  your vehicle and adding a protective layer, it is not designed
                  to remove deeply embedded contaminants like industrial
                  fallout, tar, or iron particles. For complete paint
                  decontamination, we recommend adding a clay bar treatment or
                  an iron removal process to your service. These additional
                  steps ensure that all contaminants are removed, leaving your
                  paint smooth, clean, and ready for protection.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How long does the{" "}
                  <a href="paint-protection">spray wax protection</a> last?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Spray wax typically provides protection for about 4-6 weeks,
                  depending on the environmental conditions your vehicle is
                  exposed to and how often it is washed. Regular washing with
                  gentle, pH-balanced soaps will help maintain the wax&apos;s
                  effectiveness. For longer-lasting protection, consider
                  upgrading to a paint sealant or ceramic coating, which can
                  offer protection for several months to years.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Do you offer any additional services to enhance the Wash and
                  Wax package?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Yes, we offer several additional services that can be combined
                  with our Wash and Wax package to provide even greater
                  protection and shine. These include clay bar treatments for
                  removing embedded contaminants, iron removal to eliminate iron
                  fallout, and paint sealants or ceramic coatings for extended
                  protection. Feel free to ask us about these options when
                  booking your service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Can I wash my car at home after a Wash and Wax service?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Absolutely! After a Wash and Wax service, you can maintain
                  your vehicle&apos;s cleanliness at home by using a pH-balanced
                  car wash soap and a soft wash mitt. Avoid using harsh
                  detergents or abrasive sponges, as these can strip the wax and
                  potentially scratch the paint. Regular at-home maintenance
                  will help extend the life of the wax and keep your vehicle
                  looking its best between professional services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  What should I do if I notice water spots after a Wash and Wax
                  service?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Water spots can sometimes occur if water dries on the surface
                  before it is fully wiped down. If you notice water spots, we
                  recommend using a quick detailer or water spot remover to
                  gently remove them without disturbing the wax layer. It&apos;s
                  also essential to dry your vehicle thoroughly with a soft
                  microfiber towel after washing to prevent water spots from
                  forming.
                </p>
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
          a {
            color: #1e90ff; /* A standard link color */
            text-decoration: underline; /* Underline to indicate it’s a link */
          }
          a:hover {
            color: #1c86ee; /* Slightly darker shade on hover */
            text-decoration: none; /* Remove underline on hover for effect */
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default WashAndWaxFAQ;
