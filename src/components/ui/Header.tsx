// components/Header.js
import Link from 'next/link';
// import { CarIcon } from './Icons';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        {/* <CarIcon className="h-6 w-6" /> */}
        <span className="sr-only">Pristine Auto Detailing</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Gallery
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
