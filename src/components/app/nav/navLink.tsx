import { Link } from 'react-router-dom';

type NavLinkProps = {
  url: string;
  children: React.ReactNode;
  active: boolean;
};

export function NavLink({ url, children, active }: NavLinkProps) {
  return (
    <Link
      to={url}
      className={`grow rounded-md px-4 py-2 text-lg ${
        active ? 'bg-green-500 text-white' : 'hover:bg-gray-300'
      }`}
    >
      {children}
    </Link>
  );
}
