import getUsers from '@/base/services/users/getUsers';
import type { User } from '@/base/types/user';
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
    <section className="mt-10 flex flex-wrap justify-center gap-4">
      {users.map((user) => (
        <article
          className="max-w-[300px] rounded-lg border border-gray-200 bg-white shadow-sm"
          key={user.id}
        >
          <img
            className="pointer-events-none select-none rounded-t-lg"
            src={user.image}
            alt=""
          />
          <div className="p-5">
            <p className="lexend-deca mb-2 text-xl font-bold tracking-tight text-gray-900">
              {user.name}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Users;
