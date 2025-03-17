"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "New York",
    country: "United States",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "London",
    country: "United Kingdom",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Dubai",
    country: "United Arab Emirates",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Rome",
    country: "Italy",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Singapore",
    country: "Singapore",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ExploreDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Explore world's top destinations</h2>
          <div className="flex items-center gap-4">
            <Link href="/cities" className="text-blue-600 hover:underline">
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
          {destinations.map((destination) => (
            <div key={destination.id} className="min-w-[250px] flex-shrink-0">
              <Link href={`/cities/${destination.name.toLowerCase()}`}>
                <div className="rounded-lg overflow-hidden shadow-md group">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Things to do in {destination.name}</h3>
                    <p className="text-sm text-gray-600">{destination.country}</p>
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

