import { CLASSNAME_BY_DEFAULT } from '@/base/constants/classnames';
import type { ClassNamesType } from '@/base/types/classnames';

export function icon(
  classNames: ClassNamesType = CLASSNAME_BY_DEFAULT,
): string {
  const { additionalClasses = CLASSNAME_BY_DEFAULT.additionalClasses } =
    classNames;

  const baseClasses = 'w-6 h-6 flex-shrink-0';
  const colorClasses = 'text-gray-700 group-hover:text-gray-900';
  const transitionClasses = 'transition duration-75';

  return `${baseClasses} ${colorClasses} ${transitionClasses} ${additionalClasses}`.trim();
}
