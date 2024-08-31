import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  HandThumbUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";

function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hassle Free Experience To All Our Customers
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="bg-white rounded-lg p-6 text-center">
            <CheckCircleIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Appointment Confirmation</h3>
            <p className="text-gray-500">
              You&apos;ll get an automated email and text confirmation days
              before your appointment so we&apos;re both ready.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <ClockIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Finish in Time</h3>
            <p className="text-gray-500">
              You have a busy schedule and we don&apos;t want to slow you down.
              We&apos;ll work in a timely manner to finish the job.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <HandThumbUpIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-500">
              We&apos;re not done with the job until we deliver the results we
              promised. If we need to redo a window tint or spend more time on
              the detail, we will!
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <UserGroupIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Friendly Service</h3>
            <p className="text-gray-500">
              You&apos;ll be taken care of from our first call to when you pick
              up your vehicle. Detailing is important, but so is making sure
              you&apos;re comfortable and confident in us.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <CheckCircleIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
            <p className="text-gray-500">
              We&apos;re happy to provide as much information as you need to
              make the best decision. We&apos;ll communicate throughout the
              entire process so you&apos;re in the loop.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <TruckIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Variety of Services</h3>
            <p className="text-gray-500">
              Whether you need a mini interior cleaning, a deep interior
              cleaning, or a full exterior wash, we can take care of it for you
              in our shop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
