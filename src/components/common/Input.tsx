import type { InputProps } from '@/base/types/form';
import { input, label } from '@/base/utils/classnames';

export default function Input({
  title,
  name,
  otherProps,
  hasError,
  errorMessage,
}: InputProps) {
  const classesLabel = label({ hasError });
  const classesInput = input({ hasError });
  const visibility = hasError ? 'visible' : 'hidden';

  return (
    <>
      <label htmlFor={name} className={classesLabel}>
        {title}
      </label>
      <input {...otherProps} id={name} className={classesInput} />
      <p className="mt-1 text-sm" style={{ visibility }}>
        {hasError ? errorMessage : '.'}
      </p>
    </>
  );
}
