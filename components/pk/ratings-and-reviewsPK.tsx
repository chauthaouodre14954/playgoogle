"use client"

import { Star, ThumbsUp, MoreVertical } from "lucide-react"
import { useState } from "react"

export function RatingsAndReviews() {
  const reviews = [
    {
      author: "ادریس محمد",
      rating: 5,
      date: "21 نومبر 2025",
      text: "بہترین گیم! ملٹی پلائرز اسے انتہائی دلچسپ بناتے ہیں۔ x1000 فیچر بہت پسند ہے!",
      helpful: 342,
      avatar: "/authors/Idris2.webp",
      alt: "تصویر - ادریس محمد",
      // Adding original image dimensions and required sizes
      originalWidth: 493,
      originalHeight: 494,
      requiredWidth: 72,
      requiredHeight: 48
    },
    {
      author: "اولویتھو سوما بھیلے",
      rating: 4,
      date: "25 ستمبر 2025",
      text: "اس گیم کو صحیح طریقے سے کھیلنے کے لیے آپ کو انتظار کرنا ہوگا اور صرف آہستہ چلنے والی گاڑیوں کے بعد کراس کرنا ہوگا، درمیانی اور تیز گاڑیوں سے بچنا ہوگا۔ صرف آہستہ گاڑیوں سے بچیں اور آپ ختم کر سکتے ہیں، جہاں تک کیش آؤٹ کا تعلق ہے تو میرے خیال میں یہ گیم پیسے نہیں دیتی",
      helpful: 221,
      avatar: "/authors/Olwethu.webp",
      alt: "تصویر - اولویتھو سوما بھیلے",
      originalWidth: 256,
      originalHeight: 256,
      requiredWidth: 48,
      requiredHeight: 72
    },
    {
      author: "ایلکس جانسن",
      rating: 5,
      date: "21 دسمبر 2025",
      text: "یہ پہلی بار ہے کہ میں چکن روڈ کھیل رہا ہوں، اور ایمانداری سے میں ابھی تک گیم کو صحیح طرح نہیں سمجھ پایا۔ میں لوگوں سے سنتا رہتا ہوں کہ اس سے پیسے کمائے جا سکتے ہیں، تو میں نے آج اسے آزمانے کا فیصلہ کیا تاکہ دیکھوں کہ ان کی بات سچ ہے یا نہیں۔ اگر یہ کام کرتا ہے تو بہت اچھا، اور اگر نہیں، تو کم از کم یہ مزے دار لگتا ہے۔ میں ابھی بھی کنفیوز ہوں کہ سب کچھ کیسے کام کرتا ہے، تو اگر کوئی مجھے گیم کے بارے میں بتا سکتا ہے تو میں بہت مشکور ہوں گا۔ میرے لیے جیتنا ضروری ہے کیونکہ یہ سب پیسوں کے بارے میں ہے، یہی میری تحریک ہے",
      helpful: 99,
      avatar: "/authors/Alex2.webp",
      alt: "تصویر - ایلکس جانسن",
      originalWidth: 980,
      originalHeight: 980,
      requiredWidth: 48,
      requiredHeight: 48
    }
  ]

  return (
    <div id="authors" className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-6 text-base font-medium text-[#202124]">درجہ بندی اور جائزے</h2>

      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-8">
        {/* Rating summary */}
        <div className="flex flex-col items-center sm:items-center">
          <div className="mb-1 text-5xl md:text-[56px] font-normal leading-none text-[#202124]">4.5</div>
          <div className="mb-2 flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="text-xs text-[#5f6368]">17.7K</div>
        </div>

        {/* Rating bars */}
        <div className="flex-1 w-full space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2 sm:gap-3">
              <span className="w-2 text-xs text-[#5f6368]">{rating}</span>
              <div className="h-2 flex-1 rounded-full bg-[#e8eaed]">
                <div
                  className="h-full rounded-full bg-[#01875f]"
                  style={{
                    width: rating === 5 ? "75%" : rating === 4 ? "15%" : rating === 3 ? "5%" : "2.5%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>

      <button className="mt-6 text-sm font-medium text-[#01875f] hover:underline">تمام جائزے دیکھیں</button>
    </div>
  )
}

// Extracting review component for better readability
function ReviewItem({ review }: { review: any }) {
  const [imgError, setImgError] = useState(false)

  // Function to create srcSet with different sizes
  const getOptimizedImageUrl = (originalPath: string, width: number, height: number) => {
    // Assuming you have an image processing system
    // For example, if using next/image or similar
    
    // Temporary solution - using original path
    // In a real project, there should be image resizing logic here
    return originalPath;
  }

  return (
    <div className="border-t border-[#dadce0] pt-6">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 relative">
            {imgError ? (
              // Fallback to colored circle with initial
              <div 
                className="h-10 w-10 rounded-full bg-[#ea4335] flex items-center justify-center text-sm font-medium text-white"
                title={review.alt}
              >
                {review.author[0]}
              </div>
            ) : (
              // Optimized image
              <img 
                src={review.avatar}
                alt={review.alt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover border border-[#dadce0]"
                loading="lazy"
                decoding="async"
                onError={() => setImgError(true)}
                // Adding srcSet for retina displays (2x pixel density)
                srcSet={`${review.avatar} 1x, ${review.avatar}?w=80 2x`}
                // Preload not needed for small images
                // sizes="40px" - fixed size
              />
            )}
          </div>
          <div className="text-sm text-[#3c4043]">{review.author}</div>
        </div>
        <button 
          className="text-[#5f6368] hover:text-[#202124] flex-shrink-0"
          aria-label="مزید اختیارات"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
        ))}
        <span className="ml-2 text-xs text-[#5f6368]">{review.date}</span>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-[#3c4043]">{review.text}</p>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#5f6368]">
        <span className="w-full sm:w-auto">{review.helpful} لوگوں نے یہ مفید پایا</span>
        <button 
          className="flex items-center gap-1 hover:text-[#202124]"
          aria-label="مفید قرار دیں"
        >
          <ThumbsUp className="h-4 w-4" />
          ہاں
        </button>
        <button 
          className="hover:text-[#202124]"
          aria-label="غیر مفید قرار دیں"
        >
          نہیں
        </button>
      </div>
    </div>
  )
}