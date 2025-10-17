import { NavBar } from './nav/navBar';
import { Footer } from './footer/footer';
import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash/throttle';

type LayoutProps = {
  banner?: React.ReactNode;
  children?: React.ReactNode;
  home?: boolean;
  about?: boolean;
  cases?: boolean;
  team?: boolean;
  contact?: boolean;
};

export function Layout({
  banner,
  children,
  home = false,
  about = false,
  cases = false,
  team = false,
  contact = false,
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scrolling behaviour
  const HEIGHT_THRESHOLD = 150;
  const isMobile = () => window.innerWidth <= 768;
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    if (isMobile()) return;

    const currentScrollY = scrollRef.current.scrollTop;

    if (currentScrollY > HEIGHT_THRESHOLD) {
      if (lastScrollY.current < currentScrollY) {
        console.log('down');
        setIsVisible(false);
      } else if (lastScrollY.current > currentScrollY) {
        console.log('up');
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };
  useEffect(() => {
    const currentElement = scrollRef.current;
    if (!currentElement) return;

    currentElement.addEventListener('scroll', throttle(handleScroll, 150));
    return () =>
      currentElement.removeEventListener('scroll', throttle(handleScroll, 150));
  }, []);

  return (
    <div
      className="scrollbar-hide flex h-screen w-screen flex-col overflow-auto"
      ref={scrollRef}
    >
      <NavBar
        home={home}
        about={about}
        cases={cases}
        team={team}
        contact={contact}
        isVisible={isVisible}
      />
      <div className="flex grow flex-col gap-8 bg-gray-100">
        {/* Main content */}
        {banner}
        {children}
      </div>
      <Footer />
    </div>
  );
}
