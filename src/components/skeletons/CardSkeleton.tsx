export default function CardSkeleton() {
  return (
    <article className="max-w-[300px] animate-pulse rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="h-[300px] w-[300px] rounded-t-lg bg-gray-200" />
      <div className="p-5">
        <div className="mb-2 h-6 w-3/4 rounded bg-gray-200"></div>
      </div>
    </article>
  );
}
