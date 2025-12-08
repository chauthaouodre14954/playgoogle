// app/components/OneSignal.tsx
'use client'

import { useEffect } from 'react'

export default function OneSignal() {
  useEffect(() => {
    const initOneSignal = () => {
      if (window.OneSignal) {
        window.OneSignal.init({
          appId: "a762dbb1-4241-4294-b33c-add11e0af786",
          
          // Критически важно! Указываем ТВОЙ Service Worker
          serviceWorkerPath: '/sw.js', // ← твой файл
          
          serviceWorkerParam: { 
            scope: "/" 
          },
          
          allowLocalhostAsSecureOrigin: true,
          notifyButton: { enable: false },
        }).then(() => {
          console.log("✅ OneSignal работает через твой SW!");
          
          setTimeout(() => {
            window.OneSignal.showSlidedownPrompt();
          }, 3000);
        });
      }
    };

    if (!document.getElementById('oneSignalScript')) {
      const script = document.createElement('script');
      script.id = 'oneSignalScript';
      script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
      script.async = true;
      
      script.onload = () => {
        window.OneSignal = window.OneSignal || [];
        window.OneSignal.push(initOneSignal);
      };
      
      document.head.appendChild(script);
    }

  }, []);

  return null;
}