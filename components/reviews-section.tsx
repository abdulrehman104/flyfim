"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Kelly",
    country: "United States",
    flag: "🇺🇸",
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    review:
      "It was enjoyable, educational as well. I learned more than I would have thought. I'm 64 and remember watching on tv the moon landing.",
    ticket: "Kennedy Space Center Admission Ticket",
  },
  {
    id: 2,
    name: "Szász",
    country: "Romania",
    flag: "🇷🇴",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    review:
      "Disneyland was my childhood dream, and I was very exited to visit it. I waited for 10 years and it was amazing! A lot of experience, a lot of fun. In this place you can be child for a day again:)",
    ticket: "Disneyland® Paris Tickets",
  },
  {
    id: 3,
    name: "Elise",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    review:
      "The tour guide was so lovely, polite and informative! It was really good actually at the Eiffel Tower, lots of great photo opportunities!",
    ticket: "Eiffel Tower 2nd Floor: Guided Tour",
  },
  {
    id: 4,
    name: "Marco",
    country: "Italy",
    flag: "🇮🇹",
    rating: 5,
    image: "/placeholder.svg?height=300&width=300",
    review:
      "Amazing experience! The guide was very knowledgeable and made the tour really interesting. Would definitely recommend to anyone visiting Rome.",
    ticket: "Vatican Museums & Sistine Chapel Skip-the-Line Ticket",
  },
  {
    id: 5,
    name: "Sophia",
    country: "Germany",
    flag: "🇩🇪",
    rating: 4,
    image: "/placeholder.svg?height=300&width=300",
    review:
      "Great value for money. The views were breathtaking and the experience was well organized. Only giving 4 stars because it was a bit crowded.",
    ticket: "Burj Khalifa: At the Top Tickets",
  },
]

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleReviews = [
    reviews[startIndex % reviews.length],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ]

  const nextReview = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#130D1A" }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Millions
              <br />
              love heading out
              <br />
              with us <span className="text-pink-500">❤️</span>
            </h2>
            <div className="flex gap-4 mt-8">
              <button onClick={prevReview} className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={nextReview} className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {visibleReviews.map((review) => (
              <div key={review.id} className="bg-gray-900 rounded-lg p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-xl">{review.name}</div>
                    <div className="text-gray-400 flex items-center gap-1">
                      <span>{review.flag}</span>
                      <span>{review.country}</span>
                    </div>
                  </div>
                </div>

                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-pink-500 fill-pink-500" : "text-gray-500"}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-400">{review.rating}/5</span>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-4">{review.review}</p>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">{review.ticket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

