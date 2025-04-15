import type { User } from '@/base/types/user';

export default function Card({ id, name, image }: User) {
  return (
    <article
      className="max-w-[300px] rounded-lg border border-gray-200 bg-white shadow-sm"
      key={id}
    >
      <img
        className="pointer-events-none select-none rounded-t-lg"
        src={image}
        alt=""
      />
      <div className="p-5">
        <p className="lexend-deca mb-2 text-xl font-bold tracking-tight text-gray-900">
          {name}
        </p>
      </div>
    </article>
  );
}
