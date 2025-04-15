import getUsers from '@/base/services/users/getUsers';
import type { User } from '@/base/types/user';
import Card from '@/components/common/Card';
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(1);
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="my-10 text-2xl font-semibold">Users</h1>
      <section className="flex flex-wrap justify-center gap-4">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </section>
    </div>
  );
}

export default Users;
