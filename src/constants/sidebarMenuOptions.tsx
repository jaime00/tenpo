import { ChartSquareBarIcon } from '@heroicons/react/outline';

import { icon } from '@/utils/classnames/icon';
import { UserIcon } from '@heroicons/react/solid';

const commonClasses = icon();
export const OPTIONS = [
  {
    name: 'Panel',
    path: '/',
    icon: <ChartSquareBarIcon className={commonClasses} />,
  },
  {
    name: 'Usuarios',
    path: '/users',
    icon: <UserIcon className={commonClasses} />,
  },
];
