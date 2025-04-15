import BottomIconSVG from '@/assets/images/bottom.svg';

export default function ScrollToTop() {
  const handleClick = () => {
    const target = document.getElementById('home-wrapper');
    target?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="flex h-5 animate-bounce cursor-pointer justify-center text-gray-500"
      onClick={handleClick}
    >
      <img
        src={BottomIconSVG}
        alt="Scroll to Top"
        className="rotate-360 h-5 w-5"
      />
    </div>
  );
}
