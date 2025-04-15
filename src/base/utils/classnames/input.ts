import { CLASSNAME_BY_DEFAULT } from '@/base/constants/classnames';
import type { ClassNamesType } from '@/base/types/classnames';

export function input(
  classNames: ClassNamesType = CLASSNAME_BY_DEFAULT,
): string {
  const {
    hasError = CLASSNAME_BY_DEFAULT.hasError,
    additionalClasses = CLASSNAME_BY_DEFAULT.additionalClasses,
  } = classNames;
  const disabledClasses =
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none';
  const baseClasses = 'border text-sm rounded-lg block w-full';
  const conditionalClasses = hasError
    ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 p-2.5'
    : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 p-2.5';
  return `${baseClasses} ${conditionalClasses} ${disabledClasses} ${additionalClasses}`.trim();
}
