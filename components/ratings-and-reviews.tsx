import { Star, ThumbsUp, MoreVertical } from "lucide-react"

export function RatingsAndReviews() {
  const reviews = [
    {
      author: "Idris Mohamed",
      rating: 5,
      date: "November 21, 2025",
      text: "Great game! The multipliers make it super exciting. Love the x1000 feature!",
      helpful: 342,
    },
    {
      author: "Olwethu Somabhele",
      rating: 4,
      date: "September 25, 2025",
      text: "a trust this game please let me win my baby she's hungry. overall good experience.",
      helpful: 156,
    },
  ]

  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-6 text-base font-medium text-[#202124]">Ratings and reviews</h2>

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
          <div key={index} className="border-t border-[#dadce0] pt-6">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea4335] text-sm font-medium text-white flex-shrink-0">
                  {review.author[0]}
                </div>
                <div className="text-sm text-[#3c4043]">{review.author}</div>
              </div>
              <button className="text-[#5f6368] hover:text-[#202124] flex-shrink-0">
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
              <span className="w-full sm:w-auto">{review.helpful} people found this helpful</span>
              <button className="flex items-center gap-1 hover:text-[#202124]">
                <ThumbsUp className="h-4 w-4" />
                Yes
              </button>
              <button className="hover:text-[#202124]">No</button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 text-sm font-medium text-[#01875f] hover:underline">See all reviews</button>
    </div>
  )
}
