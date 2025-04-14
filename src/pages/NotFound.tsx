import { Link } from 'wouter';
import NotFoundImage from '../assets/ilustrations/404.svg';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: '85vh' }}
    >
      <div className="max-w-sm">
        <img src={NotFoundImage} alt="notfoundimage" />
      </div>
      <div className="max-w-lg text-center">
        <h1 className="mb-3 text-5xl font-bold">Pagina no encontrada</h1>
        <p className="mb-3 text-lg text-gray-400">
          ¡UPS! Parece que seguiste un enlace incorrecto.
        </p>
        <Link
          to="/"
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          <svg
            className="mr-2 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al panel
        </Link>
      </div>
    </div>
  );
}
