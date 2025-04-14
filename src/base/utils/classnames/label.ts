import { defaultClassNamesProps } from '@/base/constants/classnames';
import type { ClassNamesProps } from '@/base/types/classnames';

export function label({
  hasError = defaultClassNamesProps.hasError,
  additionalClasses = defaultClassNamesProps.additionalClasses,
}: ClassNamesProps = defaultClassNamesProps): string {
  const baseLabelClasses = 'block mb-2 text-sm font-medium';
  const errorLabelClasses = 'text-red-700';
  const normalLabelClasses = 'text-gray-900';
  const appliedLabelClasses = hasError ? errorLabelClasses : normalLabelClasses;

  return `${baseLabelClasses} ${appliedLabelClasses} ${additionalClasses}`.trim();
}
