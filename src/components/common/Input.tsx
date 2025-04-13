import type { InputProps } from '@/types/form';
import { input, label } from '@/utils/classnames';

export default function Input({
  title,
  name,
  otherProps,
  hasError,
  errorMessage,
}: InputProps) {
  const classesLabel = label({ hasError });
  const classesInput = input({ hasError });

  return (
    <>
      <label htmlFor={name} className={classesLabel}>
        {title}
      </label>

      <input {...otherProps} id={name} className={classesInput} />

      {hasError ? (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      ) : (
        <p
          className="mt-1 text-sm text-red-600"
          style={{ visibility: 'hidden' }}
        >
          .
        </p>
      )}
    </>
  );
}
