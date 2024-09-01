"use client";
import React, { useState } from "react";

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    vehicle: string;
    services: string[]; // Explicitly define services as an array of strings
    details: string;
  }>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    services: [], // Start with an empty array of strings
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return {
        ...prevData,
        services: updatedServices,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendQuote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Quote request sent successfully!");
      } else {
        alert("Failed to send quote request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="quote"
      className="w-full bg-cover bg-center py-12 md:py-16"
      style={{
        backgroundImage: "url('/images/other/rinse.jpg')", // Replace with the correct path to your image
      }}
    >
      <div className="container max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold text-white-100 mb-8">
          Get Started By Completing The Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-85 p-8 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name (Required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-gray-400 rounded-lg p-3 bg-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email (Required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-gray-400 rounded-lg p-3 bg-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="vehicle"
              className="block text-gray-700 font-medium mb-2"
            >
              Year, Make & Model of Vehicle (Required)
            </label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="w-full border-gray-400 rounded-lg p-3 bg-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number (Required)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border-gray-400 rounded-lg p-3 bg-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Exterior Services
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Premium Wash"
                  onChange={handleServiceChange}
                  className="text-red-500 focus:ring-red-500"
                />
                <span className="ml-2">Premium Wash</span>
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Interior Services
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Full Interior Cleaning"
                  onChange={handleServiceChange}
                  className="text-red-500 focus:ring-red-500"
                />
                <span className="ml-2">Full Interior Cleaning</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Mini-Interior Detail"
                  onChange={handleServiceChange}
                  className="text-red-500 focus:ring-red-500"
                />
                <span className="ml-2">Mini-Interior Detail</span>
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="details"
              className="block text-gray-700 font-medium mb-2"
            >
              Any additional details (optional)
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full border-gray-400 rounded-lg p-3 bg-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              rows={4}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
