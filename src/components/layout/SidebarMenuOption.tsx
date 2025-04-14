import type { MenuOptionProps } from '@/types/menu';
import { menuOption } from '../../utils/classnames';
import { Link } from 'wouter';

export default function MenuOption({
  id,
  icon,
  isOpenMenu,
  name,
  path,
}: MenuOptionProps) {
  const classnames = menuOption();

  return (
    <li key={id}>
      <Link to={path} className={classnames}>
        {icon}
        {isOpenMenu ? (
          <span className="ml-3 flex-1 whitespace-nowrap">{name}</span>
        ) : null}
      </Link>
    </li>
  );
}
