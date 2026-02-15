import { Smartphone, Shield } from "lucide-react"

export function AppInfo() {
  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-4 text-base font-medium text-[#202124]">ایپ سپورٹ</h2>

      <div className="space-y-6">
        {/* Available on */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-[#5f6368]">
            <Smartphone className="h-5 w-5" />
            <span>دستیاب ہے</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">موبائل</span>
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">ٹیبلیٹ</span>
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">کروم بک</span>
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">پی سی</span>
          </div>
        </div>

        {/* Data safety */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#202124]">
            <Shield className="h-5 w-5 text-[#5f6368]" />
            <span>ڈیٹا کی حفاظت</span>
          </div>
          <p className="text-sm leading-relaxed text-[#5f6368]">
            حفاظت کا آغاز اس بات کو سمجھنے سے ہوتا ہے کہ ڈویلپرز آپ کا ڈیٹا کیسے اکٹھا اور شیئر کرتے ہیں۔ ڈیٹا کی پرائیویسی اور حفاظتی طریقہ کار آپ کے استعمال، علاقے اور عمر کے لحاظ سے مختلف ہو سکتے ہیں۔ ڈویلپر نے یہ معلومات فراہم کی ہے اور وقت کے ساتھ اسے اپ ڈیٹ کر سکتے ہیں۔
          </p>
          <button className="mt-2 text-sm font-medium text-[#01875f] hover:underline">تفصیلات دیکھیں</button>
        </div>
      </div>
    </div>
  )
}