export type InputProps = {
  title: string;
  name: string;
  otherProps: React.InputHTMLAttributes<HTMLInputElement>;
  hasError?: boolean;
  errorMessage: string;
};
