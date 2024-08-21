import Layout from "@/components/ui/Layout";
import React from "react";

const InteriorChemicalClean: React.FC = () => {
  return (
    <Layout>
      <div className="interior-chemical-clean__container">
        <h1 className="interior-chemical-clean__title">
          Complete Interior Chemical Clean
        </h1>
        <p className="interior-chemical-clean__description">
          Our Complete Interior Chemical Clean is the ultimate solution for
          removing tough stains, grime, and dirt from all surfaces inside your
          vehicle. We meticulously clean every part of your car&apos;s interior,
          ensuring it looks and feels brand new. From the vinyl and plastic
          surfaces to the leather, cracks, crevices, windows, and even the
          headliner—no detail is overlooked.
        </p>
        <img
          src="/images/other/interiordetail.jpeg"
          alt="Interior Chemical Clean"
          className="interior-chemical-clean__image"
        />

        <section className="interior-chemical-clean__content">
          <h2 className="interior-chemical-clean__section-title">
            Step 1: Initial Wipe Down
          </h2>
          <p>
            We begin our Interior Chemical Clean service with a comprehensive
            wipe down of all surfaces inside your vehicle. Using premium
            microfiber towels, we gently clean the dashboard, door panels, and
            center console, removing dust, fingerprints, and light dirt. Our
            microfiber towels are designed to be soft yet effective, ensuring
            that your car&apos;s surfaces are cleaned without leaving behind any
            scratches or streaks.
          </p>
          <p>
            The wipe down process serves as the foundation for the deeper
            cleaning that follows, preparing the surfaces by removing loose dirt
            and debris. This step is crucial for ensuring that the chemical
            cleaning agents can penetrate the grime and stains more effectively.
          </p>

          <h2 className="interior-chemical-clean__section-title">
            Step 2: Targeted Chemical Cleaning
          </h2>
          <p>
            Once the initial wipe down is complete, we move on to the targeted
            chemical cleaning phase. Using specialized cleaning agents that are
            safe for all interior materials, our technicians thoroughly clean
            the vinyl, plastic, and leather surfaces. Whether it&apos;s the
            dashboard, armrests, or door panels, we make sure every inch of your
            vehicle&apos;s interior is treated.
          </p>
          <p>
            For tougher stains and grime, we use "Scrub Ninjas"—high-performance
            scrubbing pads that are tough on dirt but gentle on surfaces. These
            pads, combined with our cleaning solutions, work to lift and remove
            even the most stubborn contaminants, leaving your car&apos;s
            interior spotless. This step is especially important for high-touch
            areas that accumulate oils and grime over time, such as the steering
            wheel and gear shifter.
          </p>

          <h2 className="interior-chemical-clean__section-title">
            Step 3: Cracks, Crevices, and Hard-to-Reach Areas
          </h2>
          <p>
            Cleaning the visible surfaces is just the beginning. We understand
            that dirt and grime can accumulate in the most unexpected places,
            which is why we pay special attention to the cracks, crevices, and
            hard-to-reach areas of your vehicle. Using fine detailing brushes
            and specially designed tools, we meticulously clean between the
            seams, around buttons, and inside air vents.
          </p>
          <p>
            This detailed approach ensures that no dirt is left behind, even in
            areas that are often overlooked. Our technicians take the time to
            clean every nook and cranny, making sure your vehicle&apos;s
            interior is not only clean but also free from any lingering dirt or
            dust.
          </p>

          <h2 className="interior-chemical-clean__section-title">
            Step 4: Window and Headliner Cleaning
          </h2>
          <p>
            Windows and the headliner are often overlooked in standard cleaning
            services, but not in our Interior Chemical Clean. We use streak-free
            cleaning solutions to ensure that your windows are crystal clear,
            free from smudges, and completely transparent. Clean windows not
            only improve visibility but also contribute to the overall aesthetic
            of a clean interior.
          </p>
          <p>
            The headliner, which is the fabric lining the roof of your vehicle,
            can be a magnet for dust, stains, and odors. We carefully clean the
            headliner using gentle techniques that remove stains without
            damaging the fabric or causing it to sag. This step is crucial for
            maintaining the overall freshness of your vehicle&apos;s interior,
            as a clean headliner can significantly enhance the feeling of
            cleanliness and air quality inside the car.
          </p>

          <h2 className="interior-chemical-clean__section-title">
            Step 5: Final Inspection and Finishing Touches
          </h2>
          <p>
            After all the surfaces have been cleaned and treated, we perform a
            final inspection to ensure that every area of your vehicle&apos;s
            interior meets our high standards. Any remaining spots or blemishes
            are addressed, and we give the entire interior a final wipe down
            with a fresh microfiber towel to ensure a perfect finish.
          </p>
          <p>
            We also apply a protective conditioner to leather surfaces, which
            not only enhances their appearance but also helps to protect them
            from future wear and tear. The conditioner leaves the leather
            feeling soft, supple, and looking like new.
          </p>

          <h2 className="interior-chemical-clean__section-title">
            Why Choose Our Interior Chemical Clean?
          </h2>
          <p>
            Our Complete Interior Chemical Clean is more than just a cleaning
            service—it&apos;s a comprehensive treatment designed to restore your
            vehicle's interior to its original condition. Whether you&apos;re
            dealing with stubborn stains, unpleasant odors, or simply want to
            refresh your car&apos;s interior, our service is the perfect
            solution.
          </p>
          <p>
            By choosing our service, you&apos;re ensuring that your vehicle is
            treated with the utmost care and attention to detail. Our
            technicians are trained in the latest cleaning techniques and use
            only the highest quality products to deliver exceptional results.
            From the dashboard to the headliner, every surface is cleaned,
            conditioned, and protected.
          </p>
          <p>
            Experience the difference of a professionally cleaned interior—book
            your Complete Interior Chemical Clean today and enjoy a vehicle that
            looks and feels like new.
          </p>
        </section>

        <style jsx>{`
          :root {
            --primary-color: #333;
            --secondary-color: #666;
            --background-color: #f9f9f9;
            --text-color: #444;
            --title-color: #222;
            --container-max-width: 800px;
            --container-padding: 20px;
            --border-radius: 8px;
            --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .interior-chemical-clean__container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: var(--container-padding);
            background-color: var(--background-color);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
          }
          .interior-chemical-clean__title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary-color);
            text-align: center;
          }
          .interior-chemical-clean__description {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: var(--secondary-color);
            line-height: 1.6;
            text-align: center;
          }
          .interior-chemical-clean__image {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: var(--border-radius);
          }
          .interior-chemical-clean__content {
            font-size: 1rem;
            color: var(--text-color);
            line-height: 1.6;
          }
          .interior-chemical-clean__section-title {
            font-size: 1.5rem;
            margin-top: 30px;
            margin-bottom: 15px;
            color: var(--title-color);
          }
          p {
            margin-bottom: 15px;
          }

          @media (max-width: 768px) {
            .interior-chemical-clean__title {
              font-size: 2rem;
            }
            .interior-chemical-clean__description,
            .interior-chemical-clean__content {
              font-size: 1rem;
            }
            .interior-chemical-clean__section-title {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default InteriorChemicalClean;
