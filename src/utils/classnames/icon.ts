import { defaultClassNamesProps } from '@/constants/classnames';
import type { ClassNamesProps } from '@/types/classnames';

export function icon({
  additionalClasses = defaultClassNamesProps.additionalClasses,
}: ClassNamesProps = defaultClassNamesProps): string {
  return `w-6 h-6 text-gray-700 flex-shrink-0 transition duration-75 group-hover:text-gray-900 ${additionalClasses}`;
}
