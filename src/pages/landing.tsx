import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the styles for the carousel

const LandingPage: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.heroSection}>
        <h1 style={styles.heading}>
          Transform Your Vehicle with Sam&apos;s Mobile Detailing!
        </h1>
        <p style={styles.subheading}>
          Top-rated detailing services in{" "}
          <span style={styles.highlightedText}>Montreal</span>. Book now and
          give your car the care it deserves!
        </p>
        <div>
          <a
            href="#services"
            style={{ ...styles.secondaryBtn, ...styles.secondaryBtnHover }}
          >
            View Our Services
          </a>
        </div>
      </header>

      {/* Discount Section */}
      <section style={styles.discountContainer}>
        <div style={styles.discountTextContainer}>
          <p style={styles.discountText}>$10 Off for a Google review!</p>
          <p style={styles.discountText}>$20 Off for a referral!</p>
        </div>
        <a href="tel:514-772-4554" style={styles.discountCtaBtn}>
          Call Now: 514-772-4554
        </a>
      </section>

      {/* Services Overview */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Premium Detailing Services</h2>
        <p style={styles.sectionText}>
          At Sam&apos;s Mobile Detailing, we offer a wide range of services to
          keep your car looking like new. Whether you need interior, exterior,
          or full-service detailing, our expert team is here to deliver
          exceptional results.
        </p>

        <div style={styles.services}>
          <div style={{ ...styles.service, ...styles.serviceHover }}>
            <h3 style={styles.serviceHeading}>Interior Detailing</h3>
            <p>
              Deep cleaning and rejuvenation of all interior surfaces including
              seats, carpets, and dashboards.
            </p>
          </div>
          <div style={{ ...styles.service, ...styles.serviceHover }}>
            <h3 style={styles.serviceHeading}>Exterior Detailing</h3>
            <p>
              Hand wash, bug and sap removal, clay bar treatment, spray wax.
            </p>
          </div>
          <div style={{ ...styles.service, ...styles.serviceHover }}>
            <h3 style={styles.serviceHeading}>Full-Service Detailing</h3>
            <p>
              The complete package, combining interior and exterior detailing
              for a like-new vehicle.
            </p>
          </div>
        </div>
        {/* Note about water and power */}
        <p style={styles.note}>
          * Access to a hose with water and power is required for all services.
        </p>
      </section>

      {/* Pricing Information */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>
          Transparent Pricing for Every Budget
        </h2>
        <p style={styles.sectionText}>
          We believe in clear, upfront pricing. Choose a package that fits your
          needs.
        </p>

        <div className="overflow-x-auto mb-8 m-4">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr>
                <th className="px-2 py-2 text-left text-gray-700 dark:text-gray-300 font-bold">
                  Service
                </th>
                <th className="px-2 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">
                  Basic
                </th>
                <th className="px-2 py-2 text-center text-gray-700 dark:text-gray-300 font-bold">
                  Deluxe
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Interior Services */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td
                  className="px-2 py-2 text-left font-bold text-gray-600 dark:text-gray-400"
                  colSpan={3}
                >
                  Interior
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Vacuuming
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Upholstery/Carpet Shampoo
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Full Chemical Cleaning of All Surfaces
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Interior Glass Cleaning
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>

              {/* Exterior Services */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td
                  className="px-2 py-2 text-left font-bold text-gray-600 dark:text-gray-400"
                  colSpan={3}
                >
                  Exterior
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Hand Wash
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Paint Decontamination
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Spray Wax
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-2 py-2 text-left text-gray-600 dark:text-gray-400">
                  Wheel & Tire Cleaning
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
                <td className="px-2 py-2 text-center">
                  <svg
                    className="w-5 h-5 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img
              alt="Sports/Mini Car"
              className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
              src="/images/types/mini.webp"
            />
            <h3 className="text-xl font-bold mt-4">Sports/Mini</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <h4 className="text-2xl font-extrabold">Deluxe</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$220</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$140</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$90</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold">Basic</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$115</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$70</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img
              alt="Sedan"
              className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
              src="/images/types/sedan.webp"
            />
            <h3 className="text-xl font-bold mt-4">Sedan</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <h4 className="text-2xl font-extrabold">Deluxe</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$250</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$180</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$110</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold">Basic</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$135</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$90</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$75</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <img
              alt="SUV"
              className="mx-auto w-full h-[300px] overflow-hidden rounded-lg object-cover"
              src="/images/types/suv.webp"
            />
            <h3 className="text-xl font-bold mt-4">SUV</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <h4 className="text-2xl font-extrabold">Deluxe</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$275</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$200</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$125</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold">Basic</h4>
                <div>
                  <h4 className="font-semibold">Complete Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$180</p>
                </div>
                <div>
                  <h4 className="font-semibold">Interior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$120</p>
                </div>
                <div>
                  <h4 className="font-semibold">Exterior Detail</h4>
                  <p className="text-gray-500 dark:text-gray-400">$90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Service Area</h2>
        <p style={styles.sectionText}>
          We proudly serve the following areas in and around Montreal:
        </p>
        <div style={styles.serviceAreaContent}>
          <div style={styles.mapContainer}>
            <Image
              src="/images/other/map.JPG"
              alt="Service Area Map"
              style={styles.mapImage}
              width={900}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionHeading}>What Our Customers Are Saying</h2>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            &quot;Sam&apos;s Mobile Detailing worked wonders on my Polestar 2!
            The attention to detail is incredible, and Sam clearly takes pride
            in his work. Using McGuire products, he achieved an amazing shine
            that made my car look showroom-new.&quot; - John D.
          </p>
        </div>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            &quot;Just had the interior of my Volkswagen e-Golf detailed. His
            work is very thorough and the results speak for themselves! Highly
            recommend. Thanks again Sam!&quot; - Sarah P.
          </p>
        </div>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            &quot;I booked an interior detail package for my Audi SQ5, and I was
            extremely satisfied with Sam&apos;s work. He showed up on time and
            got the work done in 2 hours. I didn&apos;t even know my carpets
            could look that clean. Would highly recommend! - Michael T.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>How Our Detailing Process Works</h2>
        <div style={styles.steps}>
          <div style={{ ...styles.step, ...styles.stepHover }}>
            <h3>Book Your Service</h3>
            <p>
              Select your desired service and schedule a time that works for
              you.
            </p>
          </div>
          <div style={{ ...styles.step, ...styles.stepHover }}>
            <h3>We Come to You</h3>
            <p>
              Our mobile team arrives fully equipped to handle your detailing
              needs.
            </p>
          </div>
          <div style={{ ...styles.step, ...styles.stepHover }}>
            <h3>Enjoy Your Pristine Car</h3>
            <p>
              Experience the difference of a professionally detailed vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={styles.finalCta}>
        <h2 style={styles.sectionHeading}>Ready to Make Your Car Shine?</h2>
        <a
          href="tel:514-772-4554"
          style={{ ...styles.ctaBtn, ...styles.ctaBtnHover }}
        >
          Call us now at 514 772-4554!
        </a>
      </section>

      {/* Contact Information */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Get in Touch</h2>
        <p style={styles.contactInfo}>
          <strong>Phone:</strong> (514 772-4554)
        </p>
        <p style={styles.contactInfo}>
          <strong>Email:</strong> (samsmobiledetailing@gmail.ca)
        </p>
        <p style={styles.contactInfo}>
          <strong>Instagram:</strong> (sams.mobiledetails)
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Sam&apos;s Mobile Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Enhanced inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.8,
    margin: 0,
    padding: 0,
    backgroundColor: "#f0f8ff",
    color: "#333",
    overflowX: "hidden",
  },
  heroSection: {
    background:
      "linear-gradient(to right, rgba(0,0,50,0.7), rgba(0,0,100,0.1)), url('/images/other/IMG_7191.PNG') no-repeat center 25%/cover",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 50, 0.4)",
    position: "relative",
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: 800,
    marginBottom: "20px",
    letterSpacing: "2px",
    textShadow: "4px 4px 6px rgba(0, 0, 50, 0.6)",
    animation: "fadeIn 2s ease-in-out",
  },
  subheading: {
    fontSize: "1.7rem",
    marginBottom: "40px",
    maxWidth: "800px",
    margin: "auto",
    textShadow: "2px 2px 5px rgba(0, 0, 50, 0.5)",
    animation: "fadeIn 2.5s ease-in-out",
  },
  highlightedText: {
    fontSize: "1.8rem",
    fontWeight: 900,
    color: "#FFD700", // Yellow color for highlight
  },
  ctaBtn: {
    display: "inline-block",
    padding: "18px 36px",
    margin: "15px",
    color: "white",
    backgroundColor: "#007acc",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
    boxShadow: "0 8px 15px rgba(0, 122, 204, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  ctaBtnHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 20px rgba(0, 122, 204, 0.6)",
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "18px 36px",
    margin: "15px",
    color: "white",
    backgroundColor: "#005999",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
    boxShadow: "0 8px 15px rgba(0, 89, 153, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  secondaryBtnHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 20px rgba(0, 89, 153, 0.6)",
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
  },
  discountContainer: {
    backgroundColor: "#007acc",
    color: "white",
    padding: "20px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.3)",
    border: "2px dashed yellow", // Yellow dashed border
    marginBottom: "20px",
  },
  discountTextContainer: {
    marginBottom: "15px",
  },
  discountText: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  discountCtaBtn: {
    display: "inline-block",
    padding: "18px 36px",
    color: "white",
    backgroundColor: "#005999",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
    boxShadow: "0 8px 15px rgba(0, 89, 153, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  sectionHeading: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "40px",
    color: "#007acc",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textShadow: "1px 1px 2px rgba(0, 0, 50, 0.1)",
  },
  sectionText: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    maxWidth: "90%", // Adjusted to 90% to fit better on mobile screens
    margin: "auto",
    color: "#666",
    lineHeight: "1.7",
    wordWrap: "break-word", // Ensures long words break to the next line
  },
  services: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    animation: "fadeInUp 1s ease-in-out",
  },
  service: {
    flex: "1 1 300px",
    margin: "20px",
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.1)",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  serviceHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 32px rgba(0, 0, 50, 0.15)",
  },
  serviceHeading: {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: "15px",
    color: "#007acc",
  },
  tilesContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  tile: {
    flex: "1 1 250px",
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 50, 0.1)",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "left",
    maxWidth: "300px",
    margin: "10px auto",
  },
  tileHeading: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#007acc",
    marginBottom: "10px",
  },
  tileText: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  tileHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0, 0, 50, 0.2)",
  },
  testimonialsSection: {
    backgroundColor: "#005999",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
  },
  testimonial: {
    margin: "30px auto",
    padding: "30px",
    backgroundColor: "#006bb3",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.3)",
    maxWidth: "800px",
    animation: "fadeInUp 1.5s ease-in-out",
  },
  testimonialText: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    lineHeight: "1.6",
  },
  pricingTable: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "40px",
    animation: "fadeInUp 1.2s ease-in-out",
  },
  pricingItem: {
    flex: "1 1 300px",
    margin: "20px",
    padding: "40px",
    backgroundColor: "#007acc",
    color: "white",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.3)",
    borderRadius: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    maxWidth: "90%", // Ensures pricing items fit within the screen on mobile
  },
  pricingItemHover: {
    transform: "translateY(-10px)",
    backgroundColor: "#006bb3",
  },
  steps: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    animation: "fadeInUp 1.2s ease-in-out",
  },
  step: {
    flex: "1 1 300px",
    margin: "20px",
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.1)",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  stepHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 32px rgba(0, 0, 50, 0.15)",
  },
  finalCta: {
    backgroundColor: "#f0f8ff",
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
    animation: "fadeInUp 1.2s ease-in-out",
  },
  contactInfo: {
    fontSize: "1.3rem",
    margin: "10px 0",
    color: "#555",
    lineHeight: "1.7",
  },
  link: {
    color: "#007acc",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#005999",
  },
  footer: {
    backgroundColor: "#005999",
    color: "white",
    padding: "30px",
    textAlign: "center",
    position: "relative",
  },
  serviceAreaContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mapContainer: {
    marginBottom: "20px",
  },
  serviceAreaList: {
    listStyleType: "none",
    paddingLeft: 0,
    textAlign: "left",
    fontSize: "1.2rem",
    color: "#333",
  },
  carouselImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default LandingPage;
