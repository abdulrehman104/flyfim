import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CardSection from "@/components/card-section"
import RecentCheckout from "@/components/recent-checkout"
import TopRecommendations from "@/components/top-recommendations"
import TopThingsWorldwide from "@/components/top-things-worldwide"
import ExploreDestinations from "@/components/explore-destinations"
import ReviewsSection from "@/components/reviews-section"
import PartnersSection from "@/components/partners-section"
import BrowseThemes from "@/components/browse-themes"
import WorldAtTap from "@/components/world-at-tap"
import ServedMillions from "@/components/served-millions"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CardSection />
      <RecentCheckout />
      <ExploreDestinations />
      <TopRecommendations />
      <TopThingsWorldwide />
      <ReviewsSection />
      <PartnersSection />
      <BrowseThemes />
      <WorldAtTap />
      <ServedMillions />
      <Footer />
    </main>
  )
}

