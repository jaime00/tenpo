export type LoginProps = {
  username: string;
  password: string;
};

export type LoginServiceResponse = {
  companyId?: string;
  error?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
  name?: string;
  roles?: string[];
  token?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPhoto?: string;
};
