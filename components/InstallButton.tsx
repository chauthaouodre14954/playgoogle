'use client';

import { useEffect, useState } from 'react';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // предотвращаем автоматическое всплытие
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // показываем стандартный диалог установки
    const choiceResult = await deferredPrompt.userChoice;
    console.log('User choice:', choiceResult.outcome);

    setDeferredPrompt(null);
  };

  // Если PWA не готова, кнопку можно скрыть
  if (!deferredPrompt) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56]"
    >
      Install on Phone
    </button>
  );
}
