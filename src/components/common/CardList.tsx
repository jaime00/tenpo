import type { User } from '@/base/types/user';
import Card from './Card';

export default function CardList({ users }: { users: User[] }) {
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </>
  );
}
