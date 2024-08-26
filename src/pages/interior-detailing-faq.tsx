import Layout from "@/components/ui/Layout";
import Head from "next/head";
import React from "react";

const InteriorCleaningFAQ: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          {" "}
          Mobile Interior Detailing Services FAQs | Sam&apos;s Mobile Detailing
        </title>
        <meta
          name="description"
          content="Have any questions regarding our interior detailing services? We have compiled a list of the most frequently asked questions for you to look at!"
        />
      </Head>
      <div className="interior-cleaning-faq__container min-h-[100dvh] flex flex-col bg-gray-100 dark:bg-gray-900">
        <main className="flex-1 py-12 md:py-24 lg:py-32">
          <section className="container mx-auto px-4 md:px-6">
            <h1 className="interior-cleaning-faq__title text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl text-center text-gray-900 dark:text-gray-100 mb-12">
              Interior Detailing FAQ
            </h1>
            <div className="interior-cleaning-faq__content max-w-[800px] mx-auto">
              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  What is included in your Interior Detailing Service?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Our Interior Cleaning service is a comprehensive cleaning of
                  your vehicle&apos;s interior, focusing on all surfaces,
                  fabrics, and materials. It includes vacuuming, carpet and seat
                  shampooing, leather cleaning and conditioning, and detailed
                  cleaning of all interior surfaces like the dashboard, door
                  panels, and center console. We also clean all windows and
                  ensure that every nook and cranny is free from dirt and grime.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How do you{" "}
                  <a href="interior-shampoo-service">
                    shampoo carpets and seats
                  </a>
                  ?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Carpet and seat shampooing is a key part of our Interior
                  Cleaning service. We use a high-quality, fabric-safe shampoo
                  that penetrates deep into the fibers to break down dirt,
                  stains, and odors. The shampoo is applied using a brush or an
                  agitator, and after thorough scrubbing, we use hot water
                  extraction to remove the shampoo along with the loosened dirt.
                  This process leaves the carpets and fabric seats clean, fresh,
                  and free of any lingering odors.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How do you clean and protect leather seats?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Leather seats require special care to maintain their
                  appearance and durability. We start by gently cleaning the
                  leather with a pH-balanced leather cleaner, which removes
                  dirt, oils, and other contaminants without damaging the
                  leather. After cleaning, we apply a high-quality leather
                  conditioner that moisturizes the leather, restoring its
                  softness and protecting it from cracking and fading. This
                  process not only enhances the look and feel of your leather
                  seats but also extends their lifespan.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Do you clean all interior surfaces, including the dashboard
                  and door panels?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Yes, our Interior Cleaning service includes a thorough
                  cleaning of all interior surfaces. We carefully clean the
                  dashboard, door panels, center console, and other hard
                  surfaces using specialized cleaners that are safe for
                  plastics, vinyl, and other materials. We ensure that every
                  area is free from dust, fingerprints, and grime, leaving your
                  vehicle&apos;s interior looking like new.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How do you clean the headliner?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  The headliner, or the fabric lining on the roof of your
                  vehicle, can accumulate dirt, stains, and odors over time.
                  Cleaning the headliner requires a gentle approach to avoid
                  damaging the fabric or causing it to sag. We use a mild,
                  fabric-safe cleaner that effectively removes dirt and stains
                  without soaking the fabric. The cleaner is lightly applied and
                  then gently blotted to lift the dirt away, leaving the
                  headliner clean and fresh.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How do you handle tough stains on carpets and upholstery?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Tough stains on carpets and upholstery, such as coffee,
                  grease, or ink, require special attention. We start by
                  treating the stain with a pre-cleaner that breaks down the
                  stain&apos;s components. After allowing the pre-cleaner to
                  work, we use our shampooing and extraction process to remove
                  the stain. For particularly stubborn stains, we may need to
                  repeat the process or use specialized stain removers to
                  achieve the best results.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  How long does it take for the interior to dry after cleaning?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  The drying time after an interior cleaning service can vary
                  depending on the amount of moisture used and the ambient
                  conditions. Typically, the interior should be dry within 2-4
                  hours. We use air movers to speed up the drying process,
                  especially for the carpets and seats. We recommend leaving
                  windows slightly open after the service to allow for better
                  air circulation and faster drying.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Do you offer odor removal as part of the Interior Cleaning
                  service?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Yes, we include odor removal as part of our Interior Cleaning
                  service. Odors can be caused by a variety of factors,
                  including spills, food, and smoke. We focus on thoroughly
                  cleaning the fabrics and surfaces inside your vehicle to
                  eliminate odors at their source. Our specialized cleaning
                  products penetrate deep into the fibers to remove the
                  contaminants that cause unpleasant smells. By addressing the
                  root cause of the odors, we help restore a fresh and clean
                  scent to your vehicle&apos;s interior.
                </p>
              </div>

              <div className="interior-cleaning-faq__item mb-8">
                <h2 className="interior-cleaning-faq__question text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                  Can you clean pet hair and allergens from the interior?
                </h2>
                <p className="interior-cleaning-faq__answer text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Absolutely! We understand that pet hair and allergens can be a
                  challenge to remove. Our team uses specialized tools and
                  techniques to thoroughly remove pet hair from carpets, seats,
                  and other surfaces. Additionally, we use HEPA-filtered vacuums
                  to capture allergens and ensure a clean and healthy
                  environment inside your vehicle. This service is especially
                  beneficial for pet owners and individuals with allergies.
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

export default InteriorCleaningFAQ;
