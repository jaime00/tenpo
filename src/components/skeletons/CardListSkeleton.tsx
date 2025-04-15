import CardSkeleton from './CardSkeleton';

export default function CardListSkeleton({
  numberOfCards,
}: {
  numberOfCards: number;
}) {
  return (
    <>
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <CardSkeleton key={`card-skeleton-${index * Math.random()}`} />
      ))}
    </>
  );
}
