"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Theme categories with icons
const themeCategories = [
  { id: "tickets", name: "Tickets", icon: "🎟️" },
  { id: "tours", name: "Tours", icon: "🧭" },
  { id: "transportation", name: "Transportation", icon: "🚌" },
  { id: "travel-services", name: "Travel Services", icon: "✈️" },
  { id: "cruises", name: "Cruises", icon: "🚢" },
  { id: "food-drink", name: "Food & Drink", icon: "🍽️" },
  { id: "entertainment", name: "Entertainment", icon: "🎭" },
  { id: "adventure", name: "Adventure", icon: "🧗‍♂️" },
  { id: "aerial-sightseeing", name: "Aerial Sightseeing", icon: "🚁" },
  { id: "water-sports", name: "Water Sports", icon: "🏄‍♂️" },
  { id: "nature-wildlife", name: "Nature & Wildlife", icon: "🦁" },
  { id: "wellness", name: "Wellness", icon: "💆‍♀️" },
  { id: "classes", name: "Classes", icon: "🎨" },
]

// Subcategories for each theme
const themeSubcategories: Record<string, string[]> = {
  adventure: [
    "Skydiving",
    "Climbing",
    "Outdoor Activities",
    "Mountain Excursions",
    "Skiing",
    "Racing",
    "Snowboarding",
    "Go Karting",
    "Bungee Jumping",
    "Indoor Adventure",
    "Sledding",
    "Ziplining",
    "Desert Safari",
    "Snowshoeing",
    "Quad Biking",
    "Canyoning",
  ],
  tickets: ["Theme Parks", "Museums", "Attractions", "Shows", "Concerts", "Sporting Events"],
  tours: ["City Tours", "Day Trips", "Walking Tours", "Private Tours", "Hop-On Hop-Off"],
  transportation: ["Airport Transfers", "Car Rentals", "Train Tickets", "Ferry Tickets"],
  cruises: ["Day Cruises", "Dinner Cruises", "Yacht Charters", "River Cruises"],
  "food-drink": ["Food Tours", "Cooking Classes", "Wine Tastings", "Dining Experiences"],
  entertainment: ["Shows", "Concerts", "Nightlife", "Comedy", "Theater"],
  "aerial-sightseeing": ["Helicopter Tours", "Hot Air Balloon Rides", "Paragliding", "Skydiving"],
  "water-sports": ["Surfing", "Kayaking", "Snorkeling", "Scuba Diving", "Jet Skiing"],
  "nature-wildlife": ["Safaris", "Hiking", "Bird Watching", "National Parks"],
  wellness: ["Spa", "Yoga", "Meditation", "Fitness"],
  classes: ["Cooking", "Art", "Dance", "Photography"],
  "travel-services": ["SIM Cards", "WiFi Rental", "Travel Insurance", "Luggage Storage"],
}

export default function BrowseThemes() {
  const [activeCategory, setActiveCategory] = useState("adventure")
  const categoriesRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Browse by themes</h2>

        <div className="relative">
          <div
            ref={categoriesRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {themeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-purple-100 text-purple-700 border-purple-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {themeSubcategories[activeCategory]?.map((subcategory, index) => (
              <Link
                key={index}
                href={`/themes/${activeCategory}/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-purple-700 py-2 flex items-center gap-2"
              >
                <span>{subcategory}</span>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link href={`/themes/${activeCategory}`} className="text-sm text-purple-700 hover:underline">
              View all {themeCategories.find((c) => c.id === activeCategory)?.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

