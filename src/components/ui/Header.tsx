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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          <Link
            href="https://www.instagram.com/sams.mobiledetails/"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-8 w-8 hover:text-gray-400" />
          </Link>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span className="text-sm whitespace-nowrap">
                samsmobiledetailing@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm whitespace-nowrap">514-772-4554</span>
            </div>
          </div>
        </div>
      </div>
      <header className="w-full bg-white shadow relative z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4 lg:py-6 max-w-7xl">
          <Link href="/" aria-label="Homepage" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
              Sam&apos;s Mobile Detailing
            </h1>
            <span className="sr-only">
              Go to homepage of Pristine Auto Detailing
            </span>
          </Link>
          <button
            className="hamburger-button lg:hidden text-gray-700 focus:outline-none"
            onClick={handleToggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center lg:gap-4 sm:gap-6 w-full lg:w-auto absolute lg:static top-full left-0 bg-white shadow-lg lg:shadow-none z-50`}
            aria-label="Main navigation"
          >
            <Link
              href="/detailing-prices"
              className="text-base font-medium hover:underline underline-offset-4 px-4 py-2 lg:px-0 lg:py-0"
            >
              Pricing
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-base font-medium hover:underline underline-offset-4 px-4 py-2 lg:px-0 lg:py-0"
                onClick={handleToggleDropdown}
              >
                Detailing Services
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full lg:w-48 bg-white shadow-lg rounded-md z-50">
                  <Link
                    href="/interior-car-cleaning-montreal"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Interior Detailing
                  </Link>
                  <Link
                    href="/exterior-car-cleaning-montreal"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Exterior Detailing
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-base font-medium hover:underline underline-offset-4 px-4 py-2 lg:px-0 lg:py-0"
            >
              FAQs
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
