import { useLocation, Link } from 'wouter';

import SidebarMenuOption from '../layout/SidebarMenuOption';
import useUser from '../../hooks/Auth/useUser';

import { OPTIONS } from '../../constants/sidebarMenuOptions';

export default function SidebarMenuOptions({
  isOpenMenu,
}: {
  isOpenMenu: boolean;
}) {
  const { logout } = useUser();
  const [, navigate] = useLocation();

  const logoutAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <ul className="space-y-2">
      {OPTIONS.map((props: any, index: number) => (
        <SidebarMenuOption
          {...props}
          key={index}
          id={index}
          isOpenMenu={isOpenMenu}
        />
      ))}
      <li>
        <Link
          to="/"
          onClick={logoutAction}
          className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
        >
          <svg
            className="size-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          {isOpenMenu ? (
            <span className="ml-3 flex-1 whitespace-nowrap">Cerrar sesión</span>
          ) : null}
        </Link>
      </li>
    </ul>
  );
}
