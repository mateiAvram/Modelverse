import { useNavigate } from "react-router-dom";
import { NavLink } from "./NavLink";
import { BuildNumber } from "./BuildNumber";

// Assets import
import logo from "@/assets/logo.png";

type LayoutProps = {
  children?: React.ReactNode;
  home?: boolean;
  about?: boolean;
  cases?: boolean;
  team?: boolean;
  contact?: boolean;
};

export function Layout({
  children,
  home = false,
  about = false,
  cases = false,
  team = false,
  contact = false,
}: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-auto scrollbar-hide flex flex-col">
      <div className="sticky top-0 z-10 h-32 px-64 py-4 flex flex-row w-full items-center-safe bg-white">
        {/* Navigation */}
        <div className="h-full mr-auto">
          <img
            src={logo}
            alt="Modelverse"
            className="h-full w-auto object-contain block"
          />
        </div>

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
      <div className="grow flex flex-col gap-8 bg-gray-100">
        {/* Main content */}
        {children}
      </div>
      <div className="h-fit flex flex-col justify-center-safe items-center-safe bg-white gap-4 p-4">
        {/* Footer */}
        <div className="text-gray-500 text-sm">
          © 2023 - 2025. Modelverse B.V. | CoC 89447476 - All rights reserved. (
          <BuildNumber />)
        </div>
        <div className="flex flex-row gap-4 text-teal-500 items-center-safe justify-center-safe">
          <button
            className="cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          <button
            className="cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/company/modelverse/")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              strokeWidth={2}
              className="size-7"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
