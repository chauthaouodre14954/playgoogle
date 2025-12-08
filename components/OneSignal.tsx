'use client'

import { useEffect } from 'react'

export default function OneSignal() {
  useEffect(() => {
    // 1. Ждём загрузки страницы
    const initOneSignal = () => {
      // 2. Проверяем OneSignal
      if (window.OneSignal) {
        window.OneSignal.init({
          appId: "a762dbb1-4241-4294-b33c-add11e0af786", // ТВОЙ APP ID
          
          // 3. Критически важная настройка!
          serviceWorkerParam: { 
            scope: "/" 
          },
          
          // 4. Без сафари, без сложностей
          allowLocalhostAsSecureOrigin: true,
          
          // 5. Отключаем всё лишнее
          notifyButton: {
            enable: false // позже включишь
          },
          
          welcomeNotification: {
            disable: true // отключаем приветственное
          },
          
          promptOptions: {
            slidedown: {
              enabled: false // сами покажем запрос
            }
          }
        }).then(() => {
          console.log("✅ OneSignal готов!");
          
          // 6. Показываем запрос подписки через 3 секунды
          setTimeout(() => {
            if (window.OneSignal) {
              window.OneSignal.showSlidedownPrompt();
            }
          }, 3000);
        });
      }
    };

    // 7. Загружаем скрипт OneSignal
    if (!document.getElementById('oneSignalScript')) {
      const script = document.createElement('script');
      script.id = 'oneSignalScript';
      script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
      script.async = true;
      
      script.onload = () => {
        // 8. OneSignal загружен, можно инициализировать
        window.OneSignal = window.OneSignal || [];
        window.OneSignal.push(initOneSignal);
      };
      
      document.head.appendChild(script);
    }

  }, []);

  return null;
}