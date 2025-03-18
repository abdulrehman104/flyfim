import BrowseThemes from "@/components/browse-themes";
import CardSection from "@/components/card-section";
import ExploreDestinations from "@/components/explore-destinations";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PartnersSection from "@/components/partners-section";
import RecentCheckout from "@/components/recent-checkout";
import ReviewsSection from "@/components/reviews-section";
import ServedMillions from "@/components/served-millions";
import TopRecommendations from "@/components/top-recommendations";
import TopThingsWorldwide from "@/components/top-things-worldwide";
import WorldAtTap from "@/components/world-at-tap";

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
    );
}
