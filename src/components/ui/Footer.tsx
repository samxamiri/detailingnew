import Link from "next/link";

const InstagramIcon = ({ className }: { className: string }) => (
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

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">
            Sam&apos;s Auto Detailing, Montreal
          </h2>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/sams.mobiledetails/"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-8 w-8 hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
