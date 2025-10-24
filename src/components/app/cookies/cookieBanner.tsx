import { useCookieConsent } from '@/hooks/cookies/useCookieConsent';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useState } from 'react';

function innerAcceptButton() {
  return (
    <div className="bg-white rounded-full w-full h-full flex items-center-safe justify-center-safe py-1 px-3">
      <span className="bg-gradient-to-br from-green-500 to-teal-500 bg-clip-text text-transparent font-bold">
        Accept all
      </span>
    </div>
  );
}

export function CookieBanner() {
  const COOKIE_KEY = 'CookieConsent';

  const { notifyConsentUpdate } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  const [hasGivenConsent, setHasGivenConsent] = useState(() => {
    const cookie = Cookies.get(COOKIE_KEY);
    if (!cookie) return false;
    return true;
  });

  const handleChoice = () => {
    notifyConsentUpdate();
    setHasGivenConsent(true);
  };

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  return (
    <div
      className={`fixed top-0 size-full z-999 bg-black/50 ${!hasGivenConsent ? 'block' : 'hidden'}`}
    >
      <div
        className={`fixed bottom-0 w-full bg-white transition-transform duration-1000 ${!isVisible ? 'translate-y-full' : '-translate-y-0'}`}
      >
        <CookieConsent
          disableStyles
          enableDeclineButton
          location="none"
          containerClasses={`container mx-auto p-8 flex flex-col gap-4 md:flex-row`}
          contentClasses="basis-2/3 lg:basis-3/4 xl:basis-4/5"
          buttonWrapperClasses=" flex flex-col justify-center-safe gap-4 basis-1/3 lg:basis-1/4 xl:basis-1/5"
          buttonText={innerAcceptButton()}
          buttonClasses="rounded-full p-1 bg-gradient-to-br transition duration-300 from-green-500 to-teal-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer p-1"
          declineButtonText="Reject non-essential"
          declineButtonClasses="rounded-full p-1 bg-gradient-to-br transition duration-300 from-green-500 to-teal-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer py-2 px-4 font-bold text-white outline-none"
          onAccept={handleChoice}
          onDecline={handleChoice}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-xl text-amber-500 font-bold">
              Manage your cookie preferences
            </h1>
            <p className="text-sm text-black/70">
              This website uses two third-party services: Google Maps (for
              location features) and YouTube (for embedded videos). These
              services may set cookies and process your data. By clicking
              'Accept', you consent to this; otherwise, content from these two
              services will not be accessible unless you later decide to modify
              your preferences.
            </p>
          </div>
        </CookieConsent>
      </div>
    </div>
  );
}
