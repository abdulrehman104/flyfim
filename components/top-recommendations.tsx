"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react"

const recommendations = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    location: "Madrid",
    title: "Royal Palace of Madrid Skip-the-Line Tickets",
    rating: 4.6,
    reviews: "8.5K",
    price: "€16",
    tag: "Instant confirmation",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    location: "Athens",
    title: "Acropolis Parthenon Tickets with Audio Guide",
    rating: 4.3,
    reviews: "36.3K",
    price: "€12.90",
    tag: "",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    location: "London",
    title: "From London: Harry Potter™ Warner Bros. Studio Tickets with Coach Transfers",
    rating: 4.4,
    reviews: "8.6K",
    price: "£103.55",
    originalPrice: "£109",
    discount: "Save up to 5%",
    tag: "Instant confirmation",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300",
    location: "Interlaken",
    title: "From Interlaken: Jungfraujoch Top of Europe Round-Trip Train Tickets",
    rating: 4.5,
    reviews: "3K",
    price: "CHF 233.80",
    tag: "Instant confirmation",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=300",
    location: "Paris",
    title: "Eiffel Tower: Summit or Second Floor Direct Access Ticket",
    rating: 4.4,
    reviews: "12.3K",
    price: "€49",
    tag: "Free cancellation",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=300",
    location: "Rome",
    title: "Vatican Museums & Sistine Chapel Skip-the-Line Ticket",
    rating: 4.7,
    reviews: "25.1K",
    price: "€24",
    tag: "Instant confirmation",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barcelona",
    title: "Sagrada Familia: Fast Track Ticket with Tower Access",
    rating: 4.8,
    reviews: "15.7K",
    price: "€45",
    tag: "Free cancellation",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=200&width=300",
    location: "Dubai",
    title: "Burj Khalifa: At the Top (Levels 124 & 125) Ticket",
    rating: 4.5,
    reviews: "18.2K",
    price: "AED 169",
    tag: "Instant confirmation",
  },
]

export default function TopRecommendations() {
  const [startIndex, setStartIndex] = useState(0)
  const cardsToShow = 4

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsToShow >= recommendations.length ? 0 : prevIndex + cardsToShow))
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, recommendations.length - cardsToShow) : prevIndex - cardsToShow,
    )
  }

  const visibleCards = recommendations.slice(startIndex, startIndex + cardsToShow)

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Headout's top recommendations</h2>
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCards.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {item.tag && <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">{item.tag}</div>}
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
                  {item.tag === "Instant confirmation" && (
                    <div className="flex items-center text-xs text-gray-600 mb-1">
                      <Zap className="h-3 w-3 mr-1" />
                      <span>Instant confirmation</span>
                    </div>
                  )}
                  <div className="text-sm text-gray-500">from</div>
                  <div className="flex items-center gap-2">
                    {item.originalPrice && (
                      <span className="text-sm line-through text-gray-500">{item.originalPrice}</span>
                    )}
                    <span className="text-lg font-bold">{item.price}</span>
                    {item.discount && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{item.discount}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

