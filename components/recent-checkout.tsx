"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const recentCheckouts = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    location: "Cappadocia",
    title: "Cappadocia Goreme Sunrise Hot Air Balloon Tour with Breakfast & Transfer",
    rating: 4.6,
    reviews: 443,
    originalPrice: "₹16,998",
    currentPrice: "₹8,499",
    discount: "Save up to 50%",
    tag: "Instant confirmation",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    location: "Dubai",
    title: "Premium Desert Safari with Gourmet Dinner & Entertainment (Instagram's Favorite)",
    rating: 4.8,
    reviews: 380,
    originalPrice: "AED 450",
    currentPrice: "AED 380",
    tag: "Free cancellation",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    location: "Cairo",
    title: "Grand Egyptian Museum Guided Tour with Skip-the-Line Tickets & Hotel Transfers",
    rating: 4.7,
    reviews: 210,
    originalPrice: "$100",
    currentPrice: "$80",
    tag: "Instant confirmation",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300",
    location: "Athens",
    title: "Acropolis Parthenon Tickets with Audio Guide",
    rating: 4.3,
    reviews: 320,
    originalPrice: "€15.90",
    currentPrice: "€12.90",
    tag: "Free cancellation",
  },
]

export default function RecentCheckout() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recentCheckouts.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recentCheckouts.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">You recently checked out</h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recentCheckouts.map((item) => (
                <div key={item.id} className="min-w-full md:min-w-[25%] px-2">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">{item.tag}</div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">{item.location}</span>
                        {item.rating && (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-pink-500" />
                            <span className="text-sm ml-1">{item.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium text-base mb-3 line-clamp-2">{item.title}</h3>
                      <div className="mt-auto">
                        <div className="text-sm text-gray-500">from</div>
                        <div className="flex items-center gap-2">
                          {item.originalPrice && (
                            <span className="text-sm line-through text-gray-500">{item.originalPrice}</span>
                          )}
                          <span className="text-lg font-bold">{item.currentPrice}</span>
                          {item.discount && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {item.discount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

