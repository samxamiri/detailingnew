import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center" role="banner">
      <Link href="/" aria-label="Homepage" className="flex items-center">
        <Image
          src="/images/logo/logo.jpg"
          alt="Pristine Auto Detailing logo"
          width={100}
          height={100}
          className="w-24 h-24" // If 'w-24 h-24' are Tailwind CSS classes for visual design, they can remain.
        />
        <span className="sr-only">
          Go to homepage of Pristine Auto Detailing
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6" aria-label="Main navigation">
        <Link
          href="/#services"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/#gallery"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Gallery
        </Link>
        <Link
          href="/#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
