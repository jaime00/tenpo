import { CLASSNAME_BY_DEFAULT } from '@/base/constants/classnames';
import type { ClassNamesType } from '@/base/types/classnames';

export function label(
  classNames: ClassNamesType = CLASSNAME_BY_DEFAULT,
): string {
  const {
    hasError = CLASSNAME_BY_DEFAULT.hasError,
    additionalClasses = CLASSNAME_BY_DEFAULT.additionalClasses,
  } = classNames;
  const baseLabelClasses = 'block mb-2 text-sm font-medium';
  const errorLabelClasses = 'text-red-700';
  const normalLabelClasses = 'text-gray-900';
  const appliedLabelClasses = hasError ? errorLabelClasses : normalLabelClasses;

  return `${baseLabelClasses} ${appliedLabelClasses} ${additionalClasses}`.trim();
}
