import Layout from "@/components/ui/Layout";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaintProtection: React.FC = () => {
  return (
    <Layout>
      <div className="paint-protection__container">
        <div className="header-with-arrows">
          <Link href="/paint-protection" className="arrow-link">
            <FaArrowLeft style={{ marginRight: "8px" }} />
            <span>Previous</span>
          </Link>
          <h1 className="paint-protection__title">Paint Protection Service</h1>
          <Link href="/hand-wash" className="arrow-link">
            <span>Next</span>
            <FaArrowRight style={{ marginLeft: "8px" }} />
          </Link>
        </div>

        <p className="paint-protection__description">
          Protecting your vehicle&apos;s paint is essential for maintaining its
          appearance and preserving its value over time. Our Paint Protection
          service offers a variety of methods to shield your car&apos;s finish
          from environmental elements, ensuring it remains vibrant and pristine.
          While we specialize in spray wax, we also understand the importance of
          other paint protection methods, including sealants, ceramic coatings,
          and paint protection film (PPF).
        </p>
        <img
          src="/images/other/paintprotection.webp"
          alt="Paint Protection Service"
          className="paint-protection__image"
        />

        <section className="paint-protection__content">
          <h2 className="paint-protection__section-title">
            Spray Wax: A Quick and Effective Solution
          </h2>
          <p>
            Our primary paint protection offering is spray wax, a quick and
            effective method to protect your vehicle&apos;s paint. Spray wax is
            designed to provide a temporary shield against environmental
            contaminants, including dirt, dust, and UV rays. It enhances the
            gloss and depth of your vehicle&apos;s paint, giving it a fresh,
            polished look.
          </p>
          <p>
            The application process is simple yet effective. After{" "}
            <a href="wash-and-wax">washing and drying</a> your vehicle, we
            evenly apply the spray wax across all exterior surfaces, including
            the paint, glass, and trim. The wax forms a protective layer that
            helps to repel water and contaminants, making it easier to clean
            your car in the future. While spray wax is not as long-lasting as
            other forms of protection, it is an excellent choice for regular
            maintenance and keeping your vehicle looking its best between more
            intensive treatments.
          </p>

          <h2 className="paint-protection__section-title">
            Paint Sealants: Longer-Lasting Protection
          </h2>
          <p>
            Paint sealants offer a more durable form of protection compared to
            spray wax. These synthetic products are designed to bond with the
            vehicle&apos;s paint, creating a protective layer that lasts for
            several months. Sealants provide excellent protection against UV
            rays, acid rain, and other environmental pollutants.
          </p>
          <p>
            The application of a paint sealant involves applying the product to
            a clean, dry surface and allowing it to cure. Once cured, the
            sealant forms a hard, glossy layer that not only enhances the
            appearance of the paint but also makes it easier to clean. Sealants
            are particularly popular for their durability and ability to
            maintain a vehicle&apos;s shine for an extended period.
          </p>
          <p>
            While we currently focus on spray wax, understanding the benefits of
            paint sealants allows us to provide informed recommendations to our
            clients who may be seeking longer-lasting protection for their
            vehicles.
          </p>

          <h2 className="paint-protection__section-title">
            Ceramic Coatings: Advanced Protection Technology
          </h2>
          <p>
            Ceramic coatings represent the latest advancement in paint
            protection technology. These liquid polymers chemically bond with
            the vehicle&apos;s paint, creating a long-lasting, ultra-durable
            protective layer. Ceramic coatings offer superior protection against
            environmental contaminants, UV rays, bird droppings, and even minor
            scratches.
          </p>
          <p>
            The application of a ceramic coating is more complex and
            time-consuming than spray wax or sealants, typically requiring
            professional installation. Once applied, ceramic coatings can last
            for several years, providing a hydrophobic surface that repels water
            and contaminants with ease. The result is a glossy, high-definition
            finish that enhances the depth and clarity of the paint.
          </p>
          <p>
            Although ceramic coatings require a larger upfront investment, their
            long-term benefits make them an attractive option for vehicle owners
            looking for the highest level of protection. While we specialize in
            spray wax, we acknowledge the effectiveness of ceramic coatings and
            their role in the paint protection landscape.
          </p>

          <h2 className="paint-protection__section-title">
            Paint Protection Film (PPF): The Ultimate Shield
          </h2>
          <p>
            Paint Protection Film (PPF), also known as clear bra, offers the
            ultimate level of protection for your vehicle&apos;s paint. This
            transparent, thermoplastic urethane film is applied to the surface
            of the vehicle, providing a strong barrier against rock chips,
            scratches, and other physical damage.
          </p>
          <p>
            PPF is particularly popular for high-impact areas such as the front
            bumper, hood, and side mirrors, where the paint is most vulnerable
            to damage. The film is virtually invisible once applied, preserving
            the original look of the paint while offering unparalleled
            protection.
          </p>
          <p>
            The installation of PPF is a specialized process that requires
            precision and expertise. Although it is one of the more expensive
            paint protection options, the long-term benefits of PPF make it a
            worthwhile investment for those looking to protect their vehicle
            from physical damage. While our services focus on spray wax, we
            understand the importance of PPF in comprehensive paint protection
            strategies.
          </p>

          <h2 className="paint-protection__section-title">
            Why Choose Our Paint Protection Service?
          </h2>
          <p>
            At Sam&apos;s Mobile Detailing, we take pride in offering a paint
            protection service that meets the needs of every vehicle owner. Our
            spray wax application provides a quick and effective way to maintain
            the appearance of your vehicle, keeping it protected and looking its
            best. However, we also recognize the value of other paint protection
            methods and strive to provide our clients with the knowledge they
            need to make informed decisions about their vehicle&apos;s care.
          </p>
          <p>
            Whether you&apos;re looking for a convenient, regular maintenance
            solution like spray wax or are considering more advanced options
            like sealants, ceramic coatings, or PPF, understanding the benefits
            and limitations of each method is crucial. Our team is here to guide
            you through the options and ensure that your vehicle receives the
            protection it deserves.
          </p>
          <p>
            Protect your investment and enhance the beauty of your vehicle with
            our Paint Protection service. Contact us today to schedule an
            appointment and discover the difference that professional care can
            make.
          </p>
        </section>

        <style jsx>{`
          a {
            color: #1e90ff; /* A standard link color */
            text-decoration: underline; /* Underline to indicate it’s a link */
          }
          a:hover {
            color: #1c86ee; /* Slightly darker shade on hover */
            text-decoration: none; /* Remove underline on hover for effect */
          }
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

          .paint-protection__container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header-with-arrows {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          .paint-protection__title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary-color);
            text-align: center;
            flex-grow: 1; /* Allow title to grow and take up available space */
          }
          .paint-protection__description {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: var(--secondary-color);
            line-height: 1.6;
            text-align: center;
          }
          .paint-protection__image {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: var(--border-radius);
          }
          .paint-protection__content {
            font-size: 1rem;
            color: var(--text-color);
            line-height: 1.6;
          }
          .paint-protection__section-title {
            font-size: 1.5rem;
            margin-top: 30px;
            margin-bottom: 15px;
            color: var(--title-color);
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

          @media (max-width: 768px) {
            .paint-protection__title {
              font-size: 2rem;
            }
            .paint-protection__description,
            .paint-protection__content {
              font-size: 1rem;
            }
            .paint-protection__section-title {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default PaintProtection;
