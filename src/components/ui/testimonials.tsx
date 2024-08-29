"use client"; // This is needed for Next.js to treat this as a client-side component

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ali Cheriki",
      text: "Fantastic job by Sam, detailing my X3, Excellent job and decent price on both interior/ exterior, Highly recommending his service!",
    },
    {
      name: "Yassine Lazoughli",
      text: "The best detailing i got on my car so far. Took care of my Genny like he’s taking care of his abuelita🥰. Props to you Sam, I’ll definitely come back to you for car washing eventually! Washing in and out the dirt from the car ! 10/10",
    },
    {
      name: "chris zacchia",
      text: "I recently hired Sam to detail my '90 Miata. His service was excellent! He was professional, efficient, and handled my Miata with care & attention to detail. He washed the car inside and out including getting into all the corners that are hard to reach. The Miata looks great and is ready for an upcoming photoshoot. If you need someone to give your car a nice clean, I highly recommend this service.",
    },
    {
      name: "sushi so",
      text: "Sam did a great job detailing my grand caravan despite it being such a big car and in quite a rough shape.",
    },
    {
      name: "Rosalie Beaulieu",
      text: "Just had the interior of my Volkswagen e-Golf detailed. His work is very thorough and the results speak for themselves! Highly recommend. Thanks again Sam :-)",
    },
    {
      name: "Paul Octeau",
      text: "Sam's Mobile Detailing worked wonders on my Polestar 2! The attention to detail is incredible, and Sam clearly takes pride in his work. Using McGuire products, he achieved an amazing shine that made my car look showroom-new.",
    },
    {
      name: "Jason Lin",
      text: "Just had my BMW X5 detailed with Sam, the maxed out package, cheap and easy, came to my place and got it done in 3 hours while I was working on other stuff, highly recommend!!",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mb-12">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            Our Testimonials
          </h2>
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg"
            >
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 md:text-xl">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
