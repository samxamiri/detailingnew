"use client";

import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, useRef } from "react";

interface IconProps {
  className?: string;
}

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm">514-772-4554</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span className="text-sm">samsmobiledetailing@gmail.com</span>
            </div>
          </div>
          <Link
            href="https://www.instagram.com/sams.mobiledetails/"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-6 w-6 hover:text-gray-400" />
          </Link>
        </div>
      </div>
      <header className="w-full bg-white shadow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4 lg:py-6 max-w-7xl">
          <Link href="/" aria-label="Homepage" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
              Sam&apos;s Mobile Detailing
            </h1>
            <span className="sr-only">
              Go to homepage of Pristine Auto Detailing
            </span>
          </Link>
          <nav className="flex gap-4 sm:gap-6" aria-label="Main navigation">
            <Link
              href="/pricing"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-base font-medium hover:underline underline-offset-4"
                onClick={handleToggleDropdown}
              >
                Detailing Services
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md">
                  <Link
                    href="/interiorDetailingServices"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Interior Detailing
                  </Link>
                  <Link
                    href="/exteriorDetailingServices"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Exterior Detailing
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
