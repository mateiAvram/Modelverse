import { NavLink } from './navLink';
import { useNavigate } from 'react-router-dom';

// Assets
import logo from '@/assets/logo.png';
import { useState } from 'react';

type NavProps = {
  home: boolean;
  about: boolean;
  cases: boolean;
  team: boolean;
  contact: boolean;
  isVisible: boolean;
};

export function NavBar({
  home,
  about,
  cases,
  team,
  contact,
  isVisible,
}: NavProps) {
  const navigate = useNavigate();

  // Mobile Phone behaviour
  const [extendedMenu, setExtenedMenu] = useState(false);
  const handleMenuBtn = () => {
    if (extendedMenu) {
      setExtenedMenu(false);
    } else {
      setExtenedMenu(true);
    }
  };

  return (
    <div
      className={`relative top-0 z-10 flex w-full flex-wrap items-center-safe border-b-2 bg-white px-6 py-4 md:sticky md:h-48 xl:px-38 2xl:px-70 ${
        isVisible
          ? 'md:translate-y-0 md:duration-500'
          : 'md:-translate-y-full md:duration-500'
      } ${!extendedMenu ? 'h-32' : 'h-96'}`}
    >
      <div className="flex w-full flex-row justify-between py-4 text-teal-500 md:mr-auto md:w-fit md:p-0">
        <img
          src={logo}
          alt="Modelverse"
          className="block h-16 w-auto cursor-pointer self-center object-contain md:h-32"
          onClick={() => navigate('/')}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 self-center md:hidden"
          onClick={handleMenuBtn}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`w-full flex-wrap justify-center border-y-2 py-4 transition-all duration-300 md:flex md:w-fit md:flex-row md:border-y-0 ${!extendedMenu ? 'hidden' : 'flex flex-col'}`}
      >
        {/* Links */}
        <NavLink url="/" active={home}>
          Home
        </NavLink>
        <NavLink url="/about" active={about}>
          About
        </NavLink>
        <NavLink url="/cases" active={cases}>
          Cases
        </NavLink>
        <NavLink url="/team" active={team}>
          Team
        </NavLink>
        <NavLink url="/contact" active={contact}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
