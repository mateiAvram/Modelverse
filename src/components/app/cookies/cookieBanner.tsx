import { useCookieConsent } from '@/hooks/cookies/useCookieConsent';
import { ScrollArea } from '@/components/ui/scroll-area';
import CookieConsent from 'react-cookie-consent';
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
  const { notifyConsentUpdate } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  return (
    <CookieConsent
      disableStyles
      enableDeclineButton
      overlay={true}
      location="none"
      overlayClasses="fixed top-0 left-0 size-full z-999 bg-black/50"
      containerClasses={`fixed bottom-0 w-full p-8 flex flex-col gap-4 bg-white transition-transform duration-1000 ${!isVisible ? 'translate-y-full' : '-translate-y-0'} md:flex-row`}
      buttonWrapperClasses=" flex flex-col justify-center-safe gap-4 w-full xl:w-50/100 2xl:w-20/100"
      buttonText={innerAcceptButton()}
      buttonClasses="rounded-full p-1 bg-gradient-to-br transition duration-300 from-green-500 to-teal-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer p-1"
      declineButtonText="Reject non-essential"
      declineButtonClasses="rounded-full p-1 bg-gradient-to-br transition duration-300 from-green-500 to-teal-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer py-2 px-4 font-bold text-white outline-none"
      onAccept={notifyConsentUpdate}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-amber-500 font-bold">
          Manage your cookie preferences
        </h1>
        <ScrollArea>
          <p className="text-sm text-black/70">
            This website uses two third-party services: Google Maps (for
            location features) and YouTube (for embedded videos). These services
            may set cookies and process your data. By clicking 'Accept', you
            consent to this; otherwise, content from these two services will not
            be accessible unless you later decide to modify your preferences.
            Please indicate your choice below.
          </p>
        </ScrollArea>
      </div>
    </CookieConsent>
  );
}
