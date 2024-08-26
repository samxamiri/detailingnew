import { useEffect, useState } from "react";
import Link from "next/link";

export default function FAQComponent() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing on the server
  }

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-100 dark:bg-gray-900">
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl xl:text-8xl text-gray-900 dark:text-gray-100 mb-12">
              Frequently Asked Questions
            </h1>
            <div className="grid gap-12 lg:gap-16 items-center justify-center mt-12 lg:mt-24">
              <div className="max-w-[600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300 leading-relaxed">
                  Interior Detailing FAQs
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
                  Have questions about our interior detailing services? Find
                  answers to some of the most common questions we receive.
                </p>
                <Link href="/interior-detailing-faq">
                  <button className="mt-8 px-10 py-4 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition-all">
                    View Interior Detailing FAQs
                  </button>
                </Link>
              </div>
              <div className="max-w-[600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300 leading-relaxed">
                  Exterior Detailing FAQs
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
                  Have questions about our exterior detailing services? Check
                  out the answers to the questions we get asked the most.
                </p>
                <Link href="/exterior-detailing-faq">
                  <button className="mt-8 px-10 py-4 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition-all">
                    View Exterior Detailing FAQs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
