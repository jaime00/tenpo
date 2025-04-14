export type LoginProps = {
  username: string;
  password: string;
};

export type LoginServiceResponse = {
  loading?: boolean;
  companyId?: string;
  errorMessage?: string;
  name?: string;
  roles?: string[];
  token?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPhoto?: string;
  error?: boolean;
};
