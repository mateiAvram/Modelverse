import { Cookies } from 'react-cookie-consent';
import { useEffect, useState } from 'react';

const COOKIE_KEY = 'CookieConsent';

export const CONSENT_UPDATE_EVENT = 'app-cookie-consent-update';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(() => {
    return Cookies.get(COOKIE_KEY) === 'true';
  });

  const notifyConsentUpdate = () => {
    window.dispatchEvent(new Event(CONSENT_UPDATE_EVENT));
  };

  const grantConsent = () => {
    Cookies.set(COOKIE_KEY, 'true', { expires: 365 });
    notifyConsentUpdate();
    setHasConsent(true);
  };

  useEffect(() => {
    const handler = () => {
      setHasConsent(Cookies.get(COOKIE_KEY) === 'true');
    };
    window.addEventListener(CONSENT_UPDATE_EVENT, handler);
    return () => {
      window.removeEventListener(CONSENT_UPDATE_EVENT, handler);
    };
  }, []);

  return { hasConsent, grantConsent, notifyConsentUpdate };
};
