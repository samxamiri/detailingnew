import Layout from "@/components/ui/Layout";
import React from "react";

const FabricShampooExtraction: React.FC = () => {
  return (
    <Layout>
      <div className="fabric-shampoo-container">
        <h1 className="service-title">Fabric Shampoo & Extraction Service</h1>
        <p className="service-description">
          Our Fabric Shampoo & Extraction service is designed to thoroughly
          clean and refresh the fabrics in your vehicle, including carpets and
          fabric seats. This service is ideal for removing dirt, stains, and
          allergens that accumulate over time, ensuring your car&apos;s interior
          looks and feels like new.
        </p>
        <img
          src="/images/other/extraction.png"
          alt="Fabric Shampoo & Extraction Service"
          className="service-image"
        />

        <section className="service-content">
          <h2 className="section-title">
            Step 1: Pre-Inspection and Preparation
          </h2>
          <p>
            We start our Fabric Shampoo and Extraction service with a thorough
            inspection of your vehicle&apos;s interior fabrics. Our technicians
            examine the condition of the carpets and seats, identifying any
            particularly soiled areas, stains, or spots that may require special
            attention. Once the inspection is complete, we prepare the interior
            for the shampooing process by vacuuming the surfaces to remove loose
            dirt and debris. This preparation ensures that the shampooing
            process is as effective as possible, allowing the cleaning agents to
            penetrate deep into the fabric fibers.
          </p>

          <h2 className="section-title">Step 2: Deep Shampooing of Carpets</h2>
          <p>
            The next step involves applying a high-quality, fabric-safe shampoo
            to your vehicle&apos;s carpets. Our specialized cleaning agents are
            formulated to break down and lift stubborn dirt, grease, and stains
            from the fibers of the carpets. The shampoo is worked into the
            carpets using a brush or an agitator, ensuring that every inch of
            the fabric is treated. This step is crucial for loosening the
            embedded dirt and grime that regular vacuuming simply can&apos;t
            reach.
          </p>
          <p>
            After the shampoo has been thoroughly applied and agitated, we use
            hot water extraction to remove the shampoo along with the loosened
            dirt. This extraction process involves spraying hot water into the
            carpet while simultaneously vacuuming it up, which helps to rinse
            out the shampoo and any dissolved dirt. The result is a deeply
            cleaned carpet that is free from dirt, stains, and odors.
          </p>

          <h2 className="section-title">Step 3: Fabric Seat Shampooing</h2>
          <p>
            If your vehicle has fabric seats, they will receive the same level
            of care as the carpets. Our technicians carefully apply the fabric
            shampoo to the seats, focusing on areas that are prone to heavy use,
            such as the seat bottoms and backrests. The shampoo is then agitated
            into the fabric to ensure that it penetrates deeply, lifting out
            dirt and stains.
          </p>
          <p>
            Just like with the carpets, the shampoo is removed using hot water
            extraction. This process not only cleans the seats but also helps to
            restore their original texture and appearance. By the end of the
            treatment, your fabric seats will look refreshed, feel soft to the
            touch, and be free from unpleasant odors.
          </p>

          <h2 className="section-title">
            Step 4: Post-Treatment Inspection and Drying
          </h2>
          <p>
            After the shampooing and extraction processes are complete, our
            technicians conduct a final inspection to ensure that all areas have
            been thoroughly cleaned. Any remaining spots or stains are treated
            again as necessary to achieve the best possible results. Once the
            cleaning is finished, we assist in the drying process by using air
            movers to speed up the evaporation of any remaining moisture in the
            carpets and seats.
          </p>
          <p>
            We advise our clients to allow the interior to dry completely before
            using the vehicle, as this will prevent any re-soiling and ensure
            that the cleaning process is fully effective. In most cases, the
            interior will be dry within a few hours, leaving you with a fresh,
            clean environment that enhances your driving experience.
          </p>

          <h2 className="section-title">
            Why Choose Our Fabric Shampoo & Extraction Service?
          </h2>
          <p>
            Fabric surfaces in your vehicle are subject to daily wear and tear,
            accumulating dirt, spills, and allergens over time. Regular cleaning
            is essential to maintain the appearance and hygiene of your
            vehicle&apos;s interior. Our Fabric Shampoo & Extraction service
            goes beyond surface cleaning, targeting the deep-seated dirt and
            grime that can cause your vehicle to look and feel worn out.
          </p>
          <p>
            By choosing our service, you're ensuring that your vehicle&apos;s
            interior fabrics are treated with the utmost care and
            professionalism. Our technicians use industry-leading products and
            techniques to deliver a clean that you can see, smell, and feel.
            Whether you're preparing your car for sale, after a long trip, or
            simply maintaining its appearance, our Fabric Shampoo & Extraction
            service is the perfect solution.
          </p>
          <p>
            Don't settle for a vehicle interior that feels anything less than
            pristine. Schedule your Fabric Shampoo & Extraction service with us
            today and enjoy the benefits of a fresh, clean interior.
          </p>
        </section>
        <style jsx>{`
          .fabric-shampoo-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .service-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
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
        `}</style>
      </div>
    </Layout>
  );
};

export default FabricShampooExtraction;
