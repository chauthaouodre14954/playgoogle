'use client';

import { useEffect } from 'react';

export default function PwaRedirect() {
  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone;

    if (isStandalone) {
      // Редирект на партнёрку
      window.location.replace('https://lkxa.pro/de855528');
    }
  }, []);

  return null;
}
