import Link from "next/link";
import Image from "next/image";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Header = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <span>555-555-5555</span>
            <span>info@pristineautodetailing.com</span>
          </div>
          <Link
            href="https://instagram.com/yourusername"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <header className="flex justify-center items-center w-full py-4 lg:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center w-full max-w-7xl">
          <Link href="/" aria-label="Homepage" className="flex items-center">
            <Image
              src="/images/logo/logo.jpg"
              alt="Pristine Auto Detailing logo"
              width={100}
              height={100}
              className="w-24 h-24"
            />
            <span className="sr-only">
              Go to homepage of Pristine Auto Detailing
            </span>
          </Link>
          <nav className="flex gap-4 sm:gap-6" aria-label="Main navigation">
            <Link
              href="/#services"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="/#gallery"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Gallery
            </Link>
            <Link
              href="/#packages"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Packages
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
