import CardList from '@/components/common/CardList';
import CardListSkeleton from '@/components/skeletons/CardListSkeleton';
import useUsers from '@/base/hooks/Users/useUsers';
import { useInfiniteScroll } from '@/base/hooks/UI/useInfiniteScroll';
import LoadMore from '@/components/users/LoadMore';

export default function Users() {
  const { users, isLoading, loadMoreAction, hasMore } = useUsers();
  const ref = useInfiniteScroll(loadMoreAction);
  return (
    <div className="flex flex-col">
      <h1 className="my-10 text-2xl font-semibold">Users</h1>
      <section className="flex flex-wrap justify-center gap-4">
        {users.length > 0 && <CardList users={users} />}
        {isLoading ? <CardListSkeleton numberOfCards={20} /> : null}
      </section>
      <LoadMore ref={ref} isLoading={isLoading} hasMore={hasMore} />
    </div>
  );
}
