import type { User } from './user';

export type Response = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  users: User[];
};
