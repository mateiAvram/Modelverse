import { Link } from "react-router-dom";

type NavLinkProps = {
  url: string;
  children: React.ReactNode;
  active: boolean;
};

export function NavLink({ url, children, active }: NavLinkProps) {
  return (
    <Link
      to={url}
      className={`py-2 px-4 text-lg rounded-md ${
        active ? "text-white bg-green-500" : "hover:bg-gray-300"
      }`}
    >
      {children}
    </Link>
  );
}
