import { NavLink } from "./navLink";
import { useNavigate } from "react-router-dom";

// Assets
import logo from "@/assets/logo.png";

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

  return (
    <div
      className={`sticky top-0 z-10 h-32 px-64 py-4 flex flex-row w-full items-center-safe bg-white transition ${
        isVisible ? "translate-y-0" : "duration-500 -translate-y-full"
      }`}
    >
      <div className="h-full mr-auto">
        <img
          src={logo}
          alt="Modelverse"
          className="h-full w-auto object-contain block cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

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
  );
}
