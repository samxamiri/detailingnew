import Layout from "../components/ui/Layout";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FullVacuum: React.FC = () => {
  return (
    <Layout>
      <div className="full-vacuum-container">
        <div className="header-with-arrows">
          <Link href="/interior-chemical-clean" className="arrow-link">
            <span>Previous</span>
            <FaArrowLeft style={{ marginRight: "8px" }} />
          </Link>
          <h1 className="service-title">Full Vacuum Service</h1>
          <Link href="/carpet-shampoo" className="arrow-link">
            <span>Next</span>
            <FaArrowRight style={{ marginLeft: "8px" }} />
          </Link>
        </div>

        <p className="service-description">
          Our full vacuum service is designed to provide a thorough and
          meticulous clean for every inch of your vehicle&apos;s interior. This
          process goes beyond a simple vacuum; it&apos;s a multi-step procedure
          that ensures your car is spotless and free of any debris. Here&apos;s
          how we do it:
        </p>
        <img
          src="/images/other/vacuum.jpg"
          alt="Full Vacuum Service"
          className="service-image"
        />

        <section className="service-content">
          <h2 className="section-title">Step 1: Air Compressor Blowout</h2>
          <p>
            We begin our full vacuum service with an air compressor blowout.
            This step is crucial for reaching those hard-to-access areas of your
            vehicle, such as under the seats, in between seat crevices, and
            within the tight corners of your car&apos;s interior. The
            high-pressure air effectively dislodges dust, dirt, and debris that
            have settled into these spots over time.
          </p>
          <p>
            The air compressor works by blasting air at a high velocity, which
            agitates the particles and brings them to the surface. This method
            is not only efficient but also prevents the need for harsh scrubbing
            or the use of aggressive chemicals. By loosening the dirt first, we
            ensure that the subsequent vacuuming is more effective, capturing
            every last speck of debris.
          </p>

          <h2 className="section-title">Step 2: Deep Vacuuming</h2>
          <p>
            After the blowout, our technicians move on to the vacuuming phase.
            Using industrial-grade vacuums equipped with powerful suction, we
            methodically work through the interior of your vehicle. The vacuum
            is designed to handle all types of surfaces, from fabric to leather,
            and is particularly effective at removing the particles dislodged
            during the air compressor phase.
          </p>
          <p>
            We start with the seats, ensuring that both the cushions and the
            spaces between them are thoroughly cleaned. Next, we move to the
            carpets, using specialized attachments to lift dirt from deep within
            the fibers. Even the most stubborn particles are no match for our
            vacuum&apos;s power, leaving your carpets looking and feeling
            refreshed.
          </p>
          <p>
            Finally, we pay close attention to the floor mats, the dashboard,
            and the door panels. Each area is carefully vacuumed, ensuring that
            your entire vehicle interior is free of dust, dirt, and debris. This
            comprehensive approach not only improves the cleanliness of your car
            but also enhances its overall air quality, making for a more
            pleasant driving experience.
          </p>

          <h2 className="section-title">Why Choose Our Full Vacuum Service?</h2>
          <p>
            At Sam&apos;s Mobile Detailing, we understand that a clean car
            interior is more than just a matter of aesthetics—it&apos;s about
            comfort and health. Dust and allergens can accumulate over time,
            contributing to an unpleasant environment and even exacerbating
            allergies. Our full vacuum service is designed to tackle these
            issues head-on, providing you with a cleaner, fresher, and more
            hygienic space.
          </p>
          <p>
            By choosing our service, you&apos;re not just getting a standard
            vacuum; you&apos;re investing in a detailed, professional clean that
            addresses every part of your vehicle&apos;s interior. Our
            technicians are trained to use the latest techniques and equipment,
            ensuring that you receive the best possible service every time.
          </p>
          <p>
            So, whether you&apos;re preparing for a special occasion, coming
            back from a long trip, or simply want to maintain your vehicle in
            top condition, our full vacuum service is the perfect choice.
            Experience the difference that a meticulous, professional cleaning
            can make—book your appointment today.
          </p>
        </section>
      </div>

      <style jsx>{`
        .full-vacuum-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header-with-arrows {
          display: flex;
          justify-content: space-between; /* Change to space-between for even spacing */
          align-items: center;
          margin-bottom: 20px;
        }
        .service-title {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin: 0 20px;
          flex-grow: 1; /* Allow title to grow and take up available space */
        }
        .service-description {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: #666;
          line-height: 1.6;
          text-align: center;
        }
        .service-image {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
          border-radius: 8px;
        }
        .service-content {
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
        }
        .section-title {
          font-size: 1.5rem;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #222;
        }
        p {
          margin-bottom: 15px;
        }
        .arrow-link {
          color: #1e90ff;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
          font-size: 1.2rem; /* Slightly reduce the font size for mobile */
          font-weight: bold;
          flex-shrink: 0; /* Prevent the arrows from shrinking */
        }
        .arrow-link:hover {
          color: #1c86ee;
        }
        .arrow-link span {
          margin: 0 8px;
        }
        .header-with-arrows .arrow-link svg {
          font-size: 2.5rem; /* Adjust size for mobile */
        }
      `}</style>
    </Layout>
  );
};

export default FullVacuum;
