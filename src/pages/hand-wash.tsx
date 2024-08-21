import Layout from "@/components/ui/Layout";
import React from "react";

const HandWash: React.FC = () => {
  return (
    <Layout>
      <div className="hand-wash__container">
        <h1 className="hand-wash__title">Hand Wash Service</h1>
        <p className="hand-wash__description">
          Our Hand Wash service is designed to provide your vehicle with the
          meticulous care it deserves. We go beyond the standard car wash by
          employing premium products, expert techniques, and a detailed process
          that ensures your car&apos;s exterior is thoroughly cleaned and
          protected.
        </p>
        <img
          src="/images/other/carwash.webp"
          alt="Hand Wash Service"
          className="hand-wash__image"
        />

        <section className="hand-wash__content">
          <h2 className="hand-wash__section-title">Step 1: Initial Rinse</h2>
          <p>
            We begin our Hand Wash service with an initial rinse of your
            vehicle&apos;s exterior. This step is crucial for loosening and
            removing any loose dirt, dust, and debris that may be sitting on the
            surface. The rinse also helps to soften any stubborn contaminants,
            making them easier to remove during the washing process. By
            thoroughly rinsing the vehicle first, we reduce the risk of
            scratching the paint during the subsequent cleaning stages.
          </p>

          <h2 className="hand-wash__section-title">Step 2: Foam Shower</h2>
          <p>
            After the initial rinse, your vehicle is treated to a luxurious foam
            shower. We apply a thick layer of foaming soap that clings to the
            surface of your car, encapsulating dirt and grime. This foam serves
            as a lubricant, allowing the contaminants to be gently lifted off
            the surface without causing any damage to the paint.
          </p>
          <p>
            The foam shower not only helps to break down stubborn dirt but also
            enhances the overall cleaning process by providing a smooth surface
            for the contact wash. The foam is left to dwell for a few minutes,
            allowing it to penetrate and loosen any remaining dirt particles,
            especially in hard-to-reach areas such as around badges, trim, and
            in between panels.
          </p>

          <h2 className="hand-wash__section-title">Step 3: Contact Wash</h2>
          <p>
            The contact wash is where we focus on the detailed cleaning of your
            vehicle&apos;s exterior. Unlike traditional methods that may use a
            single mitt or sponge, we use a dedicated system to ensure the
            highest level of cleanliness. We employ a single bucket filled with
            soapy water and multiple clean wash mitts. This method is designed
            to prevent cross-contamination and to ensure that the water never
            gets dirty.
          </p>
          <p>
            Each mitt is used for a specific section of the vehicle and is never
            reintroduced to the soapy water once it has been used. After
            completing a section, the used mitt is placed aside, and a fresh one
            is used for the next area. This meticulous approach ensures that no
            dirt or grit is transferred back onto the vehicle, minimizing the
            risk of scratches and swirl marks.
          </p>
          <p>
            The contact wash covers all exterior surfaces, including the body
            panels, windows, mirrors, and wheels. We pay special attention to
            areas that tend to accumulate the most dirt, such as the lower
            panels, wheel arches, and behind the wheels.
          </p>

          <h2 className="hand-wash__section-title">Step 4: Drying Process</h2>
          <p>
            Once the contact wash is complete, we proceed to the drying process.
            Drying your vehicle properly is just as important as washing it, as
            improper drying can lead to water spots and streaks. We use
            high-quality, soft microfiber towels that are specifically designed
            for automotive use. These towels are highly absorbent and gentle on
            your car&apos;s paint, ensuring that the surface is dried without
            leaving any scratches or swirls.
          </p>
          <p>
            We also use air blowers to remove water from hard-to-reach areas,
            such as around mirrors, grills, and emblems. This step ensures that
            no water is left behind to drip and cause spots after the car has
            been dried. By the end of the drying process, your vehicle&apos;s
            exterior will be completely dry, spotless, and ready for the final
            touch.
          </p>

          <h2 className="hand-wash__section-title">
            Step 5: Spray Wax Application
          </h2>
          <p>
            To give your vehicle that extra shine and protection, we finish the
            Hand Wash service with a high-quality spray wax application. The
            spray wax is applied evenly across the entire exterior surface,
            including the paint, glass, and trim. This wax provides a protective
            layer that helps to repel water, dirt, and other contaminants,
            keeping your vehicle cleaner for longer.
          </p>
          <p>
            The spray wax also enhances the appearance of your vehicle by adding
            a deep, glossy shine. It brings out the richness of the paint color
            and leaves the surface with a smooth, silky finish. Not only does
            the wax make your car look fantastic, but it also adds a layer of UV
            protection, helping to prevent fading and oxidation caused by sun
            exposure.
          </p>
          <p>
            The result is a vehicle that not only looks stunning but is also
            better protected against the elements. Our Hand Wash service,
            complete with a spray wax finish, is the perfect way to maintain the
            beauty and integrity of your car&apos;s exterior.
          </p>

          <h2 className="hand-wash__section-title">
            Why Choose Our Hand Wash Service?
          </h2>
          <p>
            At Pristine Auto Detailing, we take pride in offering a Hand Wash
            service that goes above and beyond the standard car wash. Our
            process is designed to be thorough, gentle, and effective, ensuring
            that your vehicle receives the care it deserves. By using premium
            products, multiple wash mitts, and a careful drying process, we
            minimize the risk of damage and deliver a superior clean.
          </p>
          <p>
            Whether you&apos;re looking to maintain your vehicle&apos;s
            appearance, prepare for a special event, or simply want to give your
            car the best possible care, our Hand Wash service is the ideal
            choice. Experience the difference of a professional, meticulous wash
            that leaves your car looking and feeling like new.
          </p>
          <p>
            Book your Hand Wash service today and let us show you what a truly
            clean car looks like.
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

          .hand-wash__container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .hand-wash__title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary-color);
            text-align: center;
          }
          .hand-wash__description {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: var(--secondary-color);
            line-height: 1.6;
            text-align: center;
          }
          .hand-wash__image {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: var(--border-radius);
          }
          .hand-wash__content {
            font-size: 1rem;
            color: var(--text-color);
            line-height: 1.6;
          }
          .hand-wash__section-title {
            font-size: 1.5rem;
            margin-top: 30px;
            margin-bottom: 15px;
            color: var(--title-color);
          }
          p {
            margin-bottom: 15px;
          }

          @media (max-width: 768px) {
            .hand-wash__title {
              font-size: 2rem;
            }
            .hand-wash__description,
            .hand-wash__content {
              font-size: 1rem;
            }
            .hand-wash__section-title {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default HandWash;
