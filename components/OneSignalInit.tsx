'use client'

import { useEffect } from 'react'

export default function OneSignalInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const script = document.createElement('script')
    script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const OneSignal = window.OneSignal || []
      OneSignal.push(() => {
        OneSignal.init({
          appId: 'a762dbb1-4241-4294-b33c-add11e0af786', // вставь свой App ID
          allowLocalhostAsSecureOrigin: true,
          notifyButton: {
            enable: true,
          },
        })
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
