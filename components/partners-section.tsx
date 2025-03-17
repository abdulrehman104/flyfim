"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { id: 1, name: "Versailles", logo: "/placeholder.svg?height=60&width=120" },
  { id: 2, name: "London Eye", logo: "/placeholder.svg?height=60&width=120" },
  { id: 3, name: "Museum of the Future", logo: "/placeholder.svg?height=60&width=120" },
  { id: 4, name: "Water World", logo: "/placeholder.svg?height=60&width=120" },
  { id: 5, name: "Sydney Opera House", logo: "/placeholder.svg?height=60&width=120" },
  { id: 6, name: "Big Bus", logo: "/placeholder.svg?height=60&width=120" },
  { id: 7, name: "Merlin", logo: "/placeholder.svg?height=60&width=120" },
  { id: 8, name: "Warner Bros", logo: "/placeholder.svg?height=60&width=120" },
  { id: 9, name: "Ocean Park", logo: "/placeholder.svg?height=60&width=120" },
  { id: 10, name: "Disneyland", logo: "/placeholder.svg?height=60&width=120" },
  { id: 11, name: "Uffizi Gallery", logo: "/placeholder.svg?height=60&width=120" },
  { id: 12, name: "Belvedere", logo: "/placeholder.svg?height=60&width=120" },
  { id: 13, name: "Historic Royal Palaces", logo: "/placeholder.svg?height=60&width=120" },
  { id: 14, name: "Prado Museum", logo: "/placeholder.svg?height=60&width=120" },
  { id: 15, name: "English Heritage", logo: "/placeholder.svg?height=60&width=120" },
  { id: 16, name: "Colture", logo: "/placeholder.svg?height=60&width=120" },
  { id: 17, name: "Royal Collection Trust", logo: "/placeholder.svg?height=60&width=120" },
]

export default function PartnersSection() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateScroll = () => {
      if (row1Ref.current) {
        row1Ref.current.scrollLeft += 1
        if (row1Ref.current.scrollLeft >= row1Ref.current.scrollWidth / 2) {
          row1Ref.current.scrollLeft = 0
        }
      }

      if (row2Ref.current) {
        row2Ref.current.scrollLeft -= 1
        if (row2Ref.current.scrollLeft <= 0) {
          row2Ref.current.scrollLeft = row2Ref.current.scrollWidth / 2
        }
      }
    }

    const interval = setInterval(animateScroll, 30)
    return () => clearInterval(interval)
  }, [])

  const firstHalf = partners.slice(0, Math.ceil(partners.length / 2))
  const secondHalf = partners.slice(Math.ceil(partners.length / 2))

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">We have the best partners</h2>

        <div className="overflow-hidden mb-8">
          <div ref={row1Ref} className="flex gap-12 whitespace-nowrap" style={{ width: "200%" }}>
            {[...firstHalf, ...firstHalf].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="inline-block">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex gap-12 whitespace-nowrap" style={{ width: "200%" }}>
            {[...secondHalf, ...secondHalf].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="inline-block">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

