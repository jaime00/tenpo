import { forwardRef } from 'react';
import ScrollToTop from '../common/ScrollToTop';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  isLoading: boolean;
  hasMore: boolean;
};

const LoadMore = forwardRef(({ isLoading, hasMore }: Props, ref: any) => {
  return (
    <div ref={ref} className="flex items-center justify-center gap-4 py-4">
      {isLoading ? (
        <div className="flex items-center gap-2">
          <span>
            Estamos cargando más usuarios... desde la ciudadela de Ricks. No sé
            cuánto más aguante esta web...
            <span className="creepster text-2xl">burp</span>
          </span>
        </div>
      ) : null}
      {!hasMore && !isLoading ? (
        <div className="mt-5 flex flex-col items-center gap-4">
          <ScrollToTop />
          <span className="creepster text-2xl">
            ¡Wubba lubba dub-dub!{'  '}
          </span>
          <p className="text-xl text-gray-500">
            Felicidades, genio... has recorrido todos los usuarios disponibles.
            Ya puedes dejar de hacer scroll como un degenerado digital.
          </p>
        </div>
      ) : null}
    </div>
  );
});

export default LoadMore;
