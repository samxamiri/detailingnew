import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo/logo.jpg"
          alt="Pristine Auto Detailing"
          width={50}
          height={50}
          className="w-12 h-12"
        />
        <span className="sr-only">Pristine Auto Detailing</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
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
          href="/#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
