import { useEffect, useState } from 'react';
import { useToggle } from 'usehooks-ts';

import { INITIAL_PAGE } from '@/base/constants/users';
import getUsers from '@/base/services/users/getUsers';
import type { User, Page } from '@/base/types/user';

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMore, loadMoreAction] = useToggle(false);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<Page>(INITIAL_PAGE);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!page) return;
      setIsLoading(true);
      const { users, info } = await getUsers(page);
      setUsers((prevUsers) => [...prevUsers, ...users]);
      setPage(info.next ? page + 1 : null);
      setIsLoading(false);
    };
    fetchUsers();
  }, [loadedMore]);

  return { users, isLoading, loadMoreAction, hasMore: !!page };
}
