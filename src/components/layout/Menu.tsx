import { Link } from 'wouter';

import {
  LoginIcon as MinimizeIcon,
  LogoutIcon as MaximizeIcon,
} from '@heroicons/react/solid';

import MenuOptions from './MenuItemList';
import { icon } from '../../base/utils/classnames';
import { useToggle } from 'usehooks-ts';
import { useMemo } from 'react';

export default function Menu() {
  const [isOpenMenu, toggleOpenMenu] = useToggle(false);
  const classesIcon = useMemo(
    () => icon({ additionalClasses: 'm-0 p-0 text-indigo-800' }),
    [],
  );
  const styles = { width: isOpenMenu ? '13rem' : '5rem' };

  return (
    <aside
      style={styles}
      className="h-screen border border-slate-200 pt-4"
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-center overflow-y-auto px-5 py-4">
        <div className="mb-5 flex justify-center">
          <Link to="/" className="flex w-72 justify-center">
            <h3 className="russo-one pointer-events-none select-none text-xl text-mainPurple">
              Tenpo
            </h3>
          </Link>
        </div>
        <MenuOptions isOpenMenu={isOpenMenu} />
      </div>
      <div className="flex-row justify-center">
        <div className="flex justify-center">
          <button onClick={toggleOpenMenu}>
            {isOpenMenu ? (
              <MinimizeIcon className={classesIcon} />
            ) : (
              <MaximizeIcon className={classesIcon} />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
