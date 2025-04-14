import { ChartSquareBarIcon } from '@heroicons/react/outline';

import { icon } from '@/utils/classnames/icon';

const commonClasses = icon();
export const OPTIONS = [
  {
    name: 'Panel',
    path: '/',
    icon: <ChartSquareBarIcon className={commonClasses} />,
  },
];
