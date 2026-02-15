import { Monitor, Maximize, TrendingUp, RefreshCw, Gift } from "lucide-react"

export function PlayOnPC() {
  return (
    <div className="w-full rounded-lg bg-[#2d2d2d] p-8 text-white">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center text-[#00d77f] flex-shrink-0">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold">پی سی پر کھیلیں</h2>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-200 leading-relaxed">
        یہ گیم اپنے ونڈوز پی سی پر گوگل پلے گیمز کے ساتھ کھیلیں
      </p>

      <a 
        href="#" 
        className="mb-6 inline-block text-sm text-[#00d77f] hover:text-[#00d77f]/90 font-medium"
      >
        مزید جانیں
      </a>

      <div className="mb-6 border-t border-gray-600" />

      <ul className="mb-6 space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <Monitor className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">سرکاری گوگل تجربہ</span>
        </li>
        <li className="flex items-start gap-3">
          <Maximize className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">بڑی اسکرین</span>
        </li>
        <li className="flex items-start gap-3">
          <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">بہتر کنٹرولز کے ساتھ لیول اپ کریں</span>
        </li>
        <li className="flex items-start gap-3">
          <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">ڈیوائسز کے درمیان ہموار مطابقت*</span>
        </li>
        <li className="flex items-start gap-3">
          <Gift className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
          <span className="text-gray-200">گوگل پلے پوائنٹس حاصل کریں</span>
        </li>
      </ul>

      <div className="mb-6 border-t border-gray-600" />

      <div className="mb-6">
        <h3 className="mb-4 text-base font-semibold">کم از کم تقاضے</h3>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>
            <span className="font-medium text-white">آپریٹنگ سسٹم:</span> ونڈوز 10 (v2004)
          </li>
          <li>
            <span className="font-medium text-white">اسٹوریج:</span> سالڈ اسٹیٹ ڈرائیو (SSD) جس میں 10 جی بی خالی جگہ ہو
          </li>
          <li>
            <span className="font-medium text-white">گرافکس:</span> Intel® UHD Graphics 630 GPU یا اس کے برابر
          </li>
          <li>
            <span className="font-medium text-white">پروسیسر:</span> 4 سی پی یو فزیکل کور
          </li>
          <li>
            <span className="font-medium text-white">میموری:</span> 8 جی بی ریم
          </li>
          <li className="text-gray-300">ونڈوز ایڈمن اکاؤنٹ</li>
          <li className="text-gray-300">ہارڈویئر ورچوئلائزیشن آن ہونا ضروری ہے</li>
        </ul>
      </div>

      <p className="mb-4 text-xs text-gray-300 leading-relaxed">
        ان تقاضوں کے بارے میں مزید جاننے کے لیے،{" "}
        <a href="#" className="text-[#00d77f] hover:underline font-medium">
          ہیلپ سینٹر وزٹ کریں
        </a>
      </p>

      <p className="mt-2 text-xs text-gray-400 leading-relaxed">
        گوگل پلے اور گوگل پلے کا لوگو Intel Corporation یا اس کے ذیلی اداروں کے ٹریڈ مارک ہیں۔ ونڈوز Microsoft کمپنیوں کے گروپ کا ٹریڈ مارک ہے۔
      </p>

      <p className="mt-2 text-xs text-gray-400">*ہو سکتا ہے اس گیم کے لیے دستیاب نہ ہو</p>
    </div>
  )
}