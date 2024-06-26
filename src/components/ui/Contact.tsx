"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link from next/link

const Contact = () => {
  const [formData, setFormData] = useState({
    chosenPackage: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const packageOptions = [
    "Basic Detailing",
    "Interior Only",
    "Exterior Only",
    "The All In One",
  ];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendEmail", {
        ...formData,
        subject: "Customer Inquiry from Sam's Mobile Detailing",
      });
      alert("Message sent successfully");
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              Contact us today with any questions! We answer 24/7!
            </h2>
            <Link href="/contact">
              <a className="inline-flex h-16 items-center justify-center rounded-md bg-gray-900 px-20 text-2xl font-bold text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90">
                Contact Us!
              </a>
            </Link>
          </div>
        </div>
        {/* <form className="w-full max-w-lg" onSubmit={handleSubmit} id="contactForm">
          // ... (form fields as in your original code) ...
        </form> */}
        {/* Footer Section */}
        <div className="mt-12 text-center text-gray-700">
          <p>Contact us directly:</p>
          <p>
            Phone: <a href="tel:+15147724554">514-772-4554</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:samsmobiledetailing@gmail.com">
              samsmobiledetailing@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
