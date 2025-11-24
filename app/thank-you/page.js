'use client';

import React, { useEffect, useState } from 'react';

// --- CONFIGURATION MAP: Maps 'country' param to specific event and currency ---
const CONVERSION_MAP = {
  // URL Parameter (in lowercase) : Event Name, Currency, and Value
  british: {
    eventName: 'dhe_british_gbp',
    currency: 'GBP',
    value: 22,
  },
  america: {
    eventName: 'dhe_america_usd',
    currency: 'USD',
    value: 23,
  },
    saudi_arabia: {
    eventName: 'dhe_saudi_sar',
    currency: 'SAR',
    value: 24,
  },
  ireland: {
    eventName: 'dhe_ireland_eur',
    currency: 'EUR',
    value: 25,
  },
  netherlands: {
    eventName: 'dhe_netherlands_eur',
    currency: 'EUR',
    value: 26,
  },
};

// Fallback event if country is missing or undefined
const DEFAULT_CONVERSION = {
  eventName: 'dhe_generic_lead',
  currency: 'AED',
  value: 27,
};

// Inline SVG replacement for FaCheckCircle
const CheckCircleIcon = ({ size = 100, color = '#9f8151' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47.1 47.1 114.1-114.1c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);

export default function ThankYou() {
  // Simple router fallback
  const router = {
    back: () => {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    },
  };

  const [progress, setProgress] = useState(0);

  // --- GA Tag Configuration ---
  const MEASUREMENT_ID = 'G-ZWL7SWGJFK';

  // --- Effect for Injecting Global Scripts (Replaces next/script) ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scriptUrl = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      // Load gtag.js
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.head.appendChild(script);

      // Inject gtag config
      const configScript = document.createElement('script');
      configScript.id = 'gtag-config';
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${MEASUREMENT_ID}');
      `;
      document.head.appendChild(configScript);
    }
  }, [MEASUREMENT_ID]);

  // --- Effect for Auto-Redirect and Progress Bar ---
  useEffect(() => {
    const redirectDuration = 4000; // 4 seconds
    const interval = 50; // update every 50ms
    const increment = 100 / (redirectDuration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    // Redirect after 4 seconds
    const redirectTimer = setTimeout(() => {
      router.back();
    }, redirectDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  // --- Effect for Facebook Pixel Tracking ---
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  // --- Dynamic Google Analytics/Ads Tracking ---
  useEffect(() => {
    const checkGtag = setInterval(() => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        clearInterval(checkGtag);

        // 1. Get the "country" from the URL
        const searchParams = new URLSearchParams(window.location.search);
        const countryParam = searchParams.get('country');

        // 2. Find the matching conversion data, or use the default
        const conversionData =
          (countryParam &&
            CONVERSION_MAP[countryParam.toLowerCase()]) ||
          DEFAULT_CONVERSION;

        // 3. Fire the Google Ads / GA4 Event
        window.gtag('event', conversionData.eventName, {
          event_category: 'lead',
          event_label: countryParam || 'unknown_country',
          currency: conversionData.currency,
          value: conversionData.value,
          project_name: 'PalaceVillas',
          landing_page_url: window.location.href,
        });

        console.log(
          `✅ Dynamic GA Conversion Fired: ${conversionData.eventName} (${conversionData.currency})`
        );
      }
    }, 100); // Check every 100ms

    return () => clearInterval(checkGtag);
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '0 1rem',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <CheckCircleIcon size={100} color="#9f8151" />

          <h1
            style={{
              fontSize: '2rem',
              marginTop: '1rem',
              fontWeight: '600',
              color: '#0b4a35',
            }}
          >
            Thank You for Your Interest!
          </h1>
          <p
            style={{
              marginTop: '0.5rem',
              fontSize: '1rem',
              color: '#0b4a35',
            }}
          >
            We will get back to you very soon.
          </p>

          {/* Progress Bar */}
          <div
            style={{
              marginTop: '2rem',
              height: '6px',
              width: '100%',
              backgroundColor: '#eee',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#9f8151',
                transition: 'width 50ms linear',
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
