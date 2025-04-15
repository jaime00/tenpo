import { CLASSNAME_BY_DEFAULT } from '@/base/constants/classnames';
import type { ClassNamesType } from '@/base/types/classnames';

export function menuOption(
  classNames: ClassNamesType = CLASSNAME_BY_DEFAULT,
): string {
  const { additionalClasses = CLASSNAME_BY_DEFAULT.additionalClasses } =
    classNames;
  return `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${additionalClasses}`.trim();
}
