import React, { useState } from "react";

const LandingPage: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.heroSection}>
        <h1 style={styles.heading}>
          Transform Your Vehicle with Sam's Mobile Detailing!
        </h1>
        <p style={styles.subheading}>
          Top-rated detailing services in Montreal. Book now and give your car
          the care it deserves!
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

      {/* Services Overview */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Premium Detailing Services</h2>
        <p style={styles.sectionText}>
          At Sam's Mobile Detailing, we offer a wide range of services to keep
          your car looking like new. Whether you need interior, exterior, or
          full-service detailing, our expert team is here to deliver exceptional
          results.
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
      </section>

      {/* Why Choose Us */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>
          Why Choose Sam's Mobile Detailing?
        </h2>
        <div style={styles.tilesContainer}>
          {[
            "Expert Technicians",
            "Affordable Pricing",
            "Convenient Service",
            "Satisfaction Guaranteed",
          ].map((title, index) => (
            <div
              key={index}
              style={{
                ...styles.tile,
                ...(hoveredTile === index ? styles.tileHover : {}),
              }}
              onMouseEnter={() => setHoveredTile(index)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              <h3 style={styles.tileHeading}>{title}</h3>
              <p style={styles.tileText}>
                {title === "Expert Technicians" &&
                  "Our team is trained with the latest techniques to deliver exceptional results every time."}
                {title === "Affordable Pricing" &&
                  "We offer some of the most competitive rates in Montreal without compromising on quality."}
                {title === "Convenient Service" &&
                  "We come to you! Enjoy the convenience of mobile detailing wherever you are."}
                {title === "Satisfaction Guaranteed" &&
                  "We’re not happy until you’re thrilled with the results."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionHeading}>What Our Customers Are Saying</h2>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            "Pristine Auto Detailing transformed my car! It looks brand new.
            Highly recommend!" - John D.
          </p>
        </div>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            "Amazing service at an unbeatable price. I'll definitely be back!" -
            Sarah P.
          </p>
        </div>
        <div style={styles.testimonial}>
          <p style={styles.testimonialText}>
            "The convenience of mobile detailing is fantastic. The results speak
            for themselves!" - Michael T.
          </p>
        </div>
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
        <div style={styles.pricingTable}>
          <div style={{ ...styles.pricingItem, ...styles.pricingItemHover }}>
            <h3>Interior Detailing</h3>
            <p>Starting at $70</p>
          </div>
          <div style={{ ...styles.pricingItem, ...styles.pricingItemHover }}>
            <h3>Exterior Detailing</h3>
            <p>Starting at $55</p>
          </div>
          <div style={{ ...styles.pricingItem, ...styles.pricingItemHover }}>
            <h3>Full-Service Detailing</h3>
            <p>Starting at $115</p>
          </div>
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
        <a href="#" style={{ ...styles.ctaBtn, ...styles.ctaBtnHover }}>
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
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Sam's Mobile Detailing. All rights reserved.</p>
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
    backgroundColor: "#f0f8ff", // Light blue background
    color: "#333",
    overflowX: "hidden",
  },
  heroSection: {
    background:
      "linear-gradient(to right, rgba(0,0,50,0.7), rgba(0,0,100,0.1)), url('/path-to-your-hero-image.jpg') no-repeat center center/cover",
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
  ctaBtn: {
    display: "inline-block",
    padding: "18px 36px",
    margin: "15px",
    color: "white",
    backgroundColor: "#007acc", // Blue color for CTA buttons
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
    backgroundColor: "#005999", // Darker blue for secondary buttons
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
  sectionHeading: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "40px",
    color: "#007acc", // Matching the blue theme
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textShadow: "1px 1px 2px rgba(0, 0, 50, 0.1)",
  },
  sectionText: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    maxWidth: "800px",
    margin: "auto",
    color: "#666",
    lineHeight: "1.7",
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
    color: "#007acc", // Blue color for service headings
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
    color: "#007acc", // Blue color for tile headings
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
    backgroundColor: "#005999", // Darker blue background for testimonials section
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
  },
  testimonial: {
    margin: "30px 0", // Added top and bottom margin to create spacing between testimonials
    padding: "30px",
    backgroundColor: "#006bb3", // Slightly lighter blue for testimonial cards
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.3)",
    maxWidth: "800px",
    margin: "30px auto", // Ensuring the testimonial is centered
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
    backgroundColor: "#007acc", // Blue color for pricing cards
    color: "white",
    boxShadow: "0 8px 16px rgba(0, 0, 50, 0.3)",
    borderRadius: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  },
  pricingItemHover: {
    transform: "translateY(-10px)",
    backgroundColor: "#006bb3", // Slightly darker blue on hover
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
    backgroundColor: "#f0f8ff", // Light blue background for final CTA
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
    color: "#007acc", // Blue color for links
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#005999", // Darker blue on hover
  },
  footer: {
    backgroundColor: "#005999", // Darker blue background for footer
    color: "white",
    padding: "30px",
    textAlign: "center",
    position: "relative",
  },
};

export default LandingPage;
