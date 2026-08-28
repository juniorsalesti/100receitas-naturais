import React, { createContext, useContext, useState, useEffect } from 'react';
import { CHECKOUT_URL_BR, CHECKOUT_URL_INTL } from '../constants';

export type CountryLocation = 'BR' | 'INTL';

interface LocationContextType {
  location: CountryLocation;
  setLocation: (loc: CountryLocation) => void;
  checkoutUrl: string;
  priceFormatted: string;
  oldPriceFormatted: string;
  buttonText: string;
  paymentNote: string;
  isBrazil: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const BRAZIL_TIMEZONES = [
  'America/Sao_Paulo',
  'America/Fortaleza',
  'America/Bahia',
  'America/Belem',
  'America/Recife',
  'America/Manaus',
  'America/Cuiaba',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Rio_Branco',
  'America/Campo_Grande',
  'America/Maceio',
  'America/Noronha',
  'America/Santarem',
  'America/Araguaina',
  'America/Eirunepe'
];

function getInitialLocationGuess(): CountryLocation {
  if (typeof window === 'undefined') return 'BR';

  // 1. Check if user already manually selected a location in this session
  try {
    const saved = sessionStorage.getItem('mestra_lin_country_pref');
    if (saved === 'BR' || saved === 'INTL') {
      return saved;
    }
  } catch (e) {}

  // 2. Check timezone
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (BRAZIL_TIMEZONES.includes(tz) || tz.startsWith('Brazil/')) {
        return 'BR';
      }
      return 'INTL';
    }
  } catch (e) {}

  return 'BR';
}

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [location, setLocationState] = useState<CountryLocation>(getInitialLocationGuess);

  const setLocation = (loc: CountryLocation) => {
    setLocationState(loc);
    try {
      sessionStorage.setItem('mestra_lin_country_pref', loc);
    } catch (e) {}
  };

  useEffect(() => {
    // If user already manually selected an option in this session, don't overwrite
    try {
      const saved = sessionStorage.getItem('mestra_lin_country_pref');
      if (saved === 'BR' || saved === 'INTL') {
        return;
      }
    } catch (e) {}

    let isMounted = true;

    async function detectGeo() {
      try {
        // Fast IP geo API 1
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const res = await fetch('https://api.country.is/', { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && data.country) {
            const detected: CountryLocation = data.country === 'BR' ? 'BR' : 'INTL';
            setLocationState(detected);
            return;
          }
        }
      } catch (e) {
        // Fallback to secondary geo endpoint
        try {
          const controller2 = new AbortController();
          const timeoutId2 = setTimeout(() => controller2.abort(), 2500);
          const res2 = await fetch('https://ipwho.is/?fields=country_code', { signal: controller2.signal });
          clearTimeout(timeoutId2);
          if (res2.ok) {
            const data2 = await res2.json();
            if (isMounted && data2 && data2.country_code) {
              const detected2: CountryLocation = data2.country_code === 'BR' ? 'BR' : 'INTL';
              setLocationState(detected2);
              return;
            }
          }
        } catch (err) {}
      }
    }

    detectGeo();

    return () => {
      isMounted = false;
    };
  }, []);

  const isBrazil = location === 'BR';
  const checkoutUrl = isBrazil ? CHECKOUT_URL_BR : CHECKOUT_URL_INTL;
  const priceFormatted = isBrazil ? 'R$ 17,00' : 'US$ 7';
  const oldPriceFormatted = isBrazil ? 'De R$ 197,00' : 'De US$ 37';
  const buttonText = isBrazil ? 'QUERO ACESSAR AGORA' : 'ACESSAR POR US$7';
  const paymentNote = isBrazil
    ? 'Pagamento único · PIX ou cartão'
    : 'Pagamento internacional seguro · Cartão de crédito';

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        checkoutUrl,
        priceFormatted,
        oldPriceFormatted,
        buttonText,
        paymentNote,
        isBrazil
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationCheckout = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationCheckout must be used within a LocationProvider');
  }
  return context;
};
