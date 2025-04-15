import { icon } from '@/base/utils/classnames/icon';
import { UserIcon } from '@heroicons/react/solid';

const commonClasses = icon();
export const OPTIONS = [
  {
    name: 'Usuarios',
    path: '/',
    icon: <UserIcon className={commonClasses} />,
  },
];
