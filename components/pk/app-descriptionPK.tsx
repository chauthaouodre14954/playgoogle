"use client"

import { useState } from "react"

export function AppDescription() {
  const [expanded, setExpanded] = useState(false)

  const fullDescription = `🐔💸 چکن روڈ 2 — دی آفیشل 2025 ایڈیشن! x1000 تک جیتیں! 🚀

چکن روڈ 2 میں خوش آمدید، لیجنڈری چکن روڈ 2 کا آفیشل اور اپ گریڈڈ ورژن۔
2025 کے سب سے دلچسپ مرغی کراسنگ ایڈونچر میں 1,000,000 سے زیادہ کھلاڑیوں کے ساتھ شامل ہوں! فارم ڈاگ میکس کی رہنمائی کریں، ٹریفک سے بچیں، بونس حاصل کریں، اور لیجنڈری چکن روڈ x1000 ملٹی پلائر کا پیچھا کریں۔

اگر آپ نے چکن روڈ 2، چکن روڈ، چکن گیم آن لائن، یا فارم کراسنگ گیم تلاش کی تھی — تو یہ بالکل وہی ہے جس کی آپ کو ضرورت ہے۔

🌟 چکن روڈ 2 کیوں؟

🔥 بہتر گرافکس اور اینیمیشنز
🔥 ہموار ٹیپ کنٹرولز
🔥 ابتدائیوں کے لیے بہترین
🔥 x1000 ملٹی پلائر تک پہنچنے کا حقیقی موقع
🔥 کسی بھی وقت کھیلیں — آن لائن یا آف لائن

ہر ریکارڈ توڑنے اور چکن روڈ 2 میں بڑی جیت کا نیا موقع ہے۔
⚡ چکن گیم 2.0 کی خصوصیات

🐔 سادہ ون ٹیپ گیم پلے — سیکھنا آسان، ماسٹر کرنا مزے دار
🚗 لامتناہی بے ترتیب لیول — کوئی دو رن ایک جیسے نہیں
🎯 ملٹی پلائر x2 سے x1000 تک — سیڑھی چڑھیں اور جیک پاٹ ماریں
🌍 متعدد موڈز — کیزول، کلاسک، ایکسٹریم
🎪 چکن گیم 2025 ایونٹس — مشن مکمل کریں اور انعامات حاصل کریں
📱 آف لائن کام کرتا ہے — انٹرنیٹ کی ضرورت نہیں
🐾 فارم جانوروں کو بچائیں بشمول:
1. میکس کتا
2. مرغی
3. خرگوش
4. بلی
5. مینڈک
6. بطخ

🏆 آفیشل ہائی لائٹس

>تازہ ترین اور مستند چکن گیم 2.0 (2025) ریلیز
>حقیقی x1000 ملٹی پلائر سسٹم
>کاروں، ٹرکوں، ٹریکٹروں اور موٹر سائیکلوں کے ساتھ متحرک سڑکیں
>عالمی لیڈر بورڈز
>بار بار اپ ڈیٹس اور نئے چیلنجز
>کہیں بھی، کسی بھی وقت کھیلیں — مکمل آف لائن سپورٹ

🚀 چکن روڈ 2 ڈاؤن لوڈ کریں — آج ہی جیتنا شروع کریں!

لاکھوں کھلاڑیوں کے ساتھ شامل ہوں جو 2025 کا سب سے زیادہ عادی بنانے والا مرغی کراسنگ گیم کھیل رہے ہیں!
میکس کو محفوظ طریقے سے ٹریفک کے ذریعے گائیڈ کریں، انعامات جمع کریں، اور لیجنڈری x1000 تک اپنا راستہ لڑیں۔

👉 ابھی چکن روڈ 2 ڈاؤن لوڈ کریں اور بڑی جیتوں کا اپنا سفر شروع کریں!
🐔🚗 بڑے انعامات کا آپ کا ایڈونچر یہیں شروع ہوتا ہے — چکن روڈ 2 میں۔`

  const shortDescription = fullDescription.slice(0, 300)

  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-3 text-base font-medium text-[#202124]">اس گیم کے بارے میں</h2>
      <div className="whitespace-pre-line text-sm leading-relaxed text-[#3c4043]">
        {expanded ? fullDescription : shortDescription + "..."}
      </div>

      {expanded && (
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[#dadce0] pt-6">
          <div>
            <div className="text-xs font-medium text-[#5f6368]">ورژن</div>
            <div className="mt-1 text-sm text-[#202124]">7.217.0</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">تازہ کاری کردہ</div>
            <div className="mt-1 text-sm text-[#202124]">22 دسمبر 2025</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">اینڈرائیڈ درکار ہے</div>
            <div className="mt-1 text-sm text-[#202124]">6.0 اور اس سے اوپر</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">ڈاؤن لوڈز</div>
            <div className="mt-1 text-sm text-[#202124]">5,000,000+ ڈاؤن لوڈز</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">ایپ میں خریداریاں</div>
            <div className="mt-1 text-sm text-[#202124]">PKR 0 - PKR 44,990.00 فی آئٹم</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">مواد کی درجہ بندی</div>
            <div className="mt-1 text-sm text-[#202124]">
              18+ کے لیے موزوں{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                مزید جانیں
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">اجازتیں</div>
            <div className="mt-1 text-sm text-[#01875f] hover:underline">
              <a href="#">تفصیلات دیکھیں</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">انٹرایکٹو عناصر</div>
            <div className="mt-1 text-sm text-[#202124]">گیم کے اندر خریداریاں</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">ریلیز کی تاریخ</div>
            <div className="mt-1 text-sm text-[#202124]">12 اگست 2025</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">پیش کردہ از</div>
            <div className="mt-1 text-sm text-[#202124]">InOutsGames</div>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm font-medium text-[#01875f] hover:underline"
      >
        {expanded ? "کم دکھائیں" : "مزید دکھائیں"}
      </button>
      <div className="mt-4 text-xs text-[#5f6368]">22 دسمبر 2025 کو تازہ کردہ</div>
    </div>
  )
}