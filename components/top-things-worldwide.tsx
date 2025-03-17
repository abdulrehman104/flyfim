"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const attractions = [
  {
    id: 1,
    name: "London Theatre Tickets",
    city: "London",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Dubai Desert Safari Tours",
    city: "Dubai",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Vatican Museums",
    city: "Rome",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Disneyland® Paris Tickets",
    city: "Paris",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Sydney Opera House Tours",
    city: "Sydney",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Eiffel Tower Tickets",
    city: "Paris",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Colosseum Tickets",
    city: "Rome",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Statue of Liberty Tours",
    city: "New York",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    name: "Burj Khalifa Tickets",
    city: "Dubai",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 10,
    name: "Louvre Museum Tickets",
    city: "Paris",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 11,
    name: "Great Barrier Reef Tours",
    city: "Cairns",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 12,
    name: "Grand Canyon Tours",
    city: "Las Vegas",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function TopThingsWorldwide() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top things to do worldwide</h2>
          <div className="flex items-center gap-4">
            <Link href="/collections" className="text-blue-600 hover:underline">
              See all
            </Link>
            <div className="flex gap-2">
              <button onClick={scrollLeft} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={scrollRight} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {attractions.map((attraction) => (
            <div key={attraction.id} className="min-w-[200px] flex-shrink-0">
              <Link href={`/attractions/${attraction.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="rounded-lg overflow-hidden shadow-md group">
                  <div className="relative h-40">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">{attraction.name}</h3>
                    <p className="text-xs text-gray-600">{attraction.city}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

