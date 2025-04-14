import { defaultClassNamesProps } from '@/constants/classnames';
import type { ClassNamesProps } from '@/types/classnames';

export function menuOption({
  additionalClasses = defaultClassNamesProps.additionalClasses,
}: ClassNamesProps = defaultClassNamesProps): string {
  return `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${additionalClasses}`;
}
