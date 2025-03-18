import {
    Award,
    Clock,
    Globe,
    Mail,
    MessageSquare,
    Phone,
    Users,
} from "lucide-react";

import type {
    BrowseThemesData,
    CardSectionData,
    ExploreDestinationsData,
    FooterProps,
    HeroData,
    NavbarData,
    Partner,
    RecentCheckoutData,
    ReviewsData,
    StatsData,
    TopRecommendationsData,
    TopThingsWorldwideData,
    WorldAtTapData,
} from "../types/types";

/* NAVBAR */

export const navbarData: NavbarData = {
    cityNames: [
        "Dubai",
        "New York",
        "Paris",
        "Tokyo",
        "London",
        "Rome",
        "Barcelona",
        "Singapore",
    ],

    languages: [
        { name: "English", code: "en", highlight: true },
        { name: "Español", code: "es" },
        { name: "Français", code: "fr" },
        { name: "Italiano", code: "it" },
        { name: "Deutsch", code: "de" },
        { name: "Português", code: "pt" },
        { name: "Nederlands", code: "nl" },
    ],

    popularCurrencies: [
        { code: "EUR", symbol: "€", name: "Euro" },
        {
            code: "USD",
            symbol: "$",
            name: "United States Dollar",
            highlight: true,
        },
        { code: "AED", symbol: "", name: "United Arab Emirates Dirham" },
        { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
        { code: "INR", symbol: "₹", name: "Indian Rupee" },
        { code: "GBP", symbol: "£", name: "British Pound" },
    ],

    moreCurrencies: [
        { code: "ALL", symbol: "", name: "Albanian Lek" },
        { code: "AUD", symbol: "AU$", name: "Australian Dollar" },
        { code: "AZN", symbol: "₼", name: "Azerbaijan New Manat" },
        { code: "BHD", symbol: "", name: "Bahrain Dinar" },
        { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
        { code: "CHF", symbol: "", name: "Swiss Franc" },
        { code: "CNY", symbol: "¥", name: "Chinese Yuan Renminbi" },
        { code: "DKK", symbol: "", name: "Danish Krone" },
        { code: "EGP", symbol: "E£", name: "Egyptian Pound" },
        { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
        { code: "HUF", symbol: "Ft", name: "Hungary Forint" },
        { code: "IDR", symbol: "Rp", name: "Indonesia Rupiah" },
        { code: "ILS", symbol: "₪", name: "Israeli New Shekel" },
        { code: "ISK", symbol: "kr", name: "Icelandic Krona" },
        { code: "JPY", symbol: "¥", name: "Japanese Yen" },
        { code: "KRW", symbol: "₩", name: "South Korean Won" },
        { code: "LBP", symbol: "", name: "Lebanese Pound" },
        { code: "MAD", symbol: "", name: "Morocco Dirham" },
        { code: "MOP", symbol: "澳", name: "Macanese Pataca" },
        { code: "MXN", symbol: "", name: "Mexican Peso" },
        { code: "MYR", symbol: "", name: "Malaysian Ringgit" },
        { code: "NOK", symbol: "", name: "Norwegian Krone" },
        { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
        { code: "PLN", symbol: "zł", name: "Polish Zloty" },
        { code: "QAR", symbol: "ر.ق", name: "Qatari Riyal" },
        { code: "SAR", symbol: "", name: "Saudi Arabian Riyal" },
        { code: "SEK", symbol: "", name: "Swedish Krona" },
        { code: "THB", symbol: "฿", name: "Thai Baht" },
        { code: "TRY", symbol: "₺", name: "Turkey Lira" },
        { code: "TWD", symbol: "NT$", name: "Taiwan New Dollar" },
        { code: "VND", symbol: "₫", name: "Viet Nam Dong" },
        { code: "ZAR", symbol: "", name: "South African Rand" },
    ],
};

/* HERO */

export const heroData: HeroData = {
    title: "The world's best experiences curated just for you",
    searchPlaceholder: "Search for experiences and cities",
    promotion: {
        badge: "NEW",
        text: "Summer Promotion: 15% off all European tours",
        link: {
            text: "Learn more",
            url: "/promotions/summer",
        },
    },
    searchTags: [
        { name: "Tours", icon: "Compass" },
        { name: "Museums", icon: "Map" },
        { name: "Food" },
        { name: "Adventure" },
        { name: "Local" },
    ],
    statistics: {
        tours: 50000,
        experiences: 10000,
        cities: 500,
    },
    destinations: {
        title: "Popular destinations",
        description:
            "Discover our most booked destinations and start planning your next adventure",
        viewAllLink: "/destinations",
        cities: [
            {
                name: "Paris",
                image: "/images/asset 6.jpeg",
                rating: 4.9,
                activities: 82,
                duration: {
                    min: 3,
                    max: 7,
                    unit: "days",
                },
            },
            {
                name: "London",
                image: "/images/asset 3.jpeg",
                rating: 4.7,
                activities: 103,
                duration: {
                    min: 3,
                    max: 7,
                    unit: "days",
                },
            },
            {
                name: "Rome",
                image: "/images/asset 5.jpeg",
                rating: 4.8,
                activities: 65,
                duration: {
                    min: 3,
                    max: 7,
                    unit: "days",
                },
            },
        ],
    },
};

/* FOOTER */
export const footerData: FooterProps = {
    helpColumn: {
        title: "GET HELP 24/7",
        links: [
            {
                href: "/help",
                label: "Help center",
                icon: <Clock className="mr-2 h-4 w-4" />,
            },
            {
                href: "/help",
                label: "Chat with us",
                icon: <MessageSquare className="mr-2 h-4 w-4" />,
            },
            {
                href: "tel:+13479790100",
                label: "Call +13479870100",
                icon: <Phone className="mr-2 h-4 w-4" />,
            },
            {
                href: "mailto:support@flyfim.com",
                label: "support@flyfim.com",
                icon: <Mail className="mr-2 h-4 w-4" />,
            },
        ],
        qrCode: {
            src: "/images/asset 134.svg",
            alt: "QR Code",
        },
        appStoreLinks: {
            apple: {
                href: "https://apps.apple.com/app/flyfim/id899327000",
                src: "/images/asset 131.png",
                alt: "Download on App Store",
            },
            google: {
                href: "https://play.google.com/store/apps/details?id=com.flyfim.android",
                src: "/images/asset 132.png",
                alt: "Get it on Google Play",
            },
        },
    },
    citiesColumn: {
        title: "CITIES",
        links: [
            { href: "/cities/new-york", label: "New York" },
            { href: "/cities/las-vegas", label: "Las Vegas" },
            { href: "/cities/rome", label: "Rome" },
            { href: "/cities/paris", label: "Paris" },
            { href: "/cities/london", label: "London" },
            { href: "/cities/dubai", label: "Dubai" },
            { href: "/cities/barcelona", label: "Barcelona" },
            { href: "/cities", label: "+161 more" },
        ],
    },
    aboutColumn: {
        title: "flyfim",
        links: [
            { href: "/about", label: "Our story" },
            { href: "/careers", label: "Careers" },
            { href: "/newsroom", label: "Newsroom" },
            { href: "/blog", label: "Company blog" },
            { href: "/travel-blog", label: "Travel blog" },
        ],
    },
    partnersColumn: {
        title: "PARTNERS",
        links: [
            { href: "/partners", label: "Experience providers" },
            { href: "/affiliates", label: "Affiliates" },
            { href: "/creators", label: "Creators & influencers" },
        ],
        paymentMethods: [
            { icon: "/images/asset 291.svg", alt: "Visa" },
            { icon: "/images/asset 292.svg", alt: "Mastercard" },
            { icon: "/images/asset 293.svg", alt: "Amex" },
            { icon: "/images/asset 294.svg", alt: "PayPal" },
            { icon: "/images/asset 295.svg", alt: "Google Pay" },
            { icon: "/images/asset 296.svg", alt: "Apple Pay" },
            { icon: "/images/asset 297.svg", alt: "Discover" },
            { icon: "/images/asset 298.svg", alt: "iDEAL" },
        ],
    },
    companyInfo: {
        logo: {
            src: "/logo.png",
            alt: "FlyFim",
        },
        copyright:
            "© 2014-2025 flyfim Inc, 82 Nassau St #60351 New York, NY 10038",
        privacyLink: { href: "/privacy", label: "Privacy policy" },
        termsLink: { href: "/terms", label: "Terms of Usage" },
    },
    socialLinks: [
        {
            href: "https://linkedin.com",
            icon: "/images/asset 302.svg",
            alt: "LinkedIn",
        },
        {
            href: "https://instagram.com",
            icon: "/images/asset 303.svg",
            alt: "Instagram",
        },
        {
            href: "https://youtube.com",
            icon: "/images/asset 304.svg",
            alt: "YouTube",
        },
        {
            href: "https://facebook.com",
            icon: "/images/asset 305.svg",
            alt: "Facebook",
        },
        {
            href: "https://twitter.com",
            icon: "/images/asset 306.svg",
            alt: "Twitter",
        },
    ],
};

/* PARTNERS */
export const partners: Partner[] = [
    { id: 1, name: "Disneyland Paris", logo: "/images/asset 101.png" },
    { id: 2, name: "Dubai Parks and Resorts", logo: "/images/asset 102.png" },
    { id: 3, name: "Empire State Building", logo: "/images/asset 103.png" },
    { id: 4, name: "At The Top - Burj Khalifa", logo: "/images/asset 104.png" },
    { id: 5, name: "Vatican Museums", logo: "/images/asset 105.png" },
    { id: 6, name: "Ain Dubai", logo: "/images/asset 106.png" },
    { id: 7, name: "Château de Versailles", logo: "/images/asset 107.png" },
    { id: 8, name: "Museum of the Future", logo: "/images/asset 108.png" },
    { id: 9, name: "Yas Waterworld", logo: "/images/asset 109.png" },
    { id: 10, name: "Big Bus Tours", logo: "/images/asset 110.png" },
    { id: 11, name: "Sydney Opera House", logo: "/images/asset 111.png" },
    { id: 12, name: "Merlin Entertainments", logo: "/images/asset 112.png" },
    { id: 13, name: "Warner Bros. World", logo: "/images/asset 113.png" },
    { id: 14, name: "Madison Square Garden", logo: "/images/asset 114.png" },
    { id: 15, name: "Real Madrid", logo: "/images/asset 115.png" },
    { id: 16, name: "Parques Reunidos", logo: "/images/asset 116.png" },
    { id: 17, name: "FC Barcelona", logo: "/images/asset 117.png" },
    { id: 18, name: "Universal Orlando Resort", logo: "/images/asset 118.png" },
    { id: 19, name: "Resorts World Singapore", logo: "/images/asset 119.png" },
    { id: 20, name: "Ferrari World", logo: "/images/asset 120.png" },
    { id: 21, name: "Colture", logo: "/images/asset 121.png" },
    { id: 22, name: "English Heritage", logo: "/images/asset 122.png" },
    { id: 23, name: "Royal Collection Trust", logo: "/images/asset 123.png" },
    { id: 24, name: "Historic Royal Palaces", logo: "/images/asset 124.png" },
    { id: 25, name: "Museo Nacional del Prado", logo: "/images/asset 125.png" },
    { id: 26, name: "Gallerie degli Uffizi", logo: "/images/asset 126.png" },
    { id: 27, name: "Belvedere", logo: "/images/asset 127.png" },
    { id: 28, name: "Ocean Park Hong Kong", logo: "/images/asset 128.png" },
    { id: 29, name: "Xcaret México", logo: "/images/asset 129.png" },
    { id: 30, name: "Duomo di Milano", logo: "/images/asset 130.png" },
];

/* BROWSE THEMES */
export const browseThemesData: BrowseThemesData = {
    categories: [
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
    ],
    subcategories: {
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
        tickets: [
            "Theme Parks",
            "Museums",
            "Attractions",
            "Shows",
            "Concerts",
            "Sporting Events",
        ],
        tours: [
            "City Tours",
            "Day Trips",
            "Walking Tours",
            "Private Tours",
            "Hop-On Hop-Off",
        ],
        transportation: [
            "Airport Transfers",
            "Car Rentals",
            "Train Tickets",
            "Ferry Tickets",
        ],
        cruises: [
            "Day Cruises",
            "Dinner Cruises",
            "Yacht Charters",
            "River Cruises",
        ],
        "food-drink": [
            "Food Tours",
            "Cooking Classes",
            "Wine Tastings",
            "Dining Experiences",
        ],
        entertainment: ["Shows", "Concerts", "Nightlife", "Comedy", "Theater"],
        "aerial-sightseeing": [
            "Helicopter Tours",
            "Hot Air Balloon Rides",
            "Paragliding",
            "Skydiving",
        ],
        "water-sports": [
            "Surfing",
            "Kayaking",
            "Snorkeling",
            "Scuba Diving",
            "Jet Skiing",
        ],
        "nature-wildlife": [
            "Safaris",
            "Hiking",
            "Bird Watching",
            "National Parks",
        ],
        wellness: ["Spa", "Yoga", "Meditation", "Fitness"],
        classes: ["Cooking", "Art", "Dance", "Photography"],
        "travel-services": [
            "SIM Cards",
            "WiFi Rental",
            "Travel Insurance",
            "Luggage Storage",
        ],
    },
};

/* STATS SECTION */
export const statsData: StatsData = {
    heading: "We've served 36 million+ guests",
    stats: [
        {
            id: 1,
            icon: <Users className="h-8 w-8 text-purple-600" />,
            title: "36M+",
            description: "Happy customers and counting",
        },
        {
            id: 2,
            icon: <Globe className="h-8 w-8 text-blue-600" />,
            title: "45+",
            description: "Countries where you can find us",
        },
        {
            id: 3,
            icon: <Clock className="h-8 w-8 text-green-600" />,
            title: "24/7",
            description: "Customer service available round the clock",
        },
        {
            id: 4,
            icon: <Award className="h-8 w-8 text-yellow-600" />,
            title: "4.7/5",
            description: "Average rating from thousands of reviews",
        },
    ],
};

/* WORLD AT TAP SECTION */
export const worldAtTapData: WorldAtTapData = {
    title: "World at your tap.",
    description:
        "Get the Headout app to get tickets on your phone and access app-only deals. Talk about win-win.",
    appStoreLinks: {
        apple: {
            href: "https://apps.apple.com/app/headout/id899327000",
            imageSrc: "/images/asset 131.png",
            imageAlt: "Download on the App Store",
            width: 150,
            height: 50,
        },
        google: {
            href: "https://play.google.com/store/apps/details?id=com.headout.android",
            imageSrc: "/images/asset 132.png",
            imageAlt: "Get it on Google Play",
            width: 150,
            height: 50,
        },
    },
    mobileAppImage: {
        src: "/images/asset 133.png",
        alt: "Headout mobile app",
    },
};

/* TOP THINGS WORLDWIDE SECTION */
export const topThingsWorldwideData: TopThingsWorldwideData = {
    title: "Top things to do worldwide",
    seeAllLink: "/collections",
    tourDestinations: [
        { name: "London Theatre Tickets", location: "London" },
        { name: "Dubai Desert Safari Tours", location: "Dubai" },
        { name: "Vatican Museums", location: "Rome" },
        { name: "Disneyland® Paris Tickets", location: "Paris" },
        { name: "Sydney Opera House Tours", location: "Sydney" },
        { name: "Eiffel Tower Tickets", location: "Paris" },
        { name: "Prado Museum Tickets", location: "Madrid" },
        { name: "Burj Khalifa Tickets", location: "Dubai" },
        { name: "Kennedy Space Center", location: "Orlando" },
        { name: "Versailles Tickets", location: "Paris" },
        { name: "Park Güell", location: "Barcelona" },
        { name: "Alhambra Tickets", location: "Granada" },
        { name: "Louvre Museum Tickets", location: "Paris" },
        { name: "Harry Potter London Tours", location: "London" },
        { name: "Colosseum", location: "Rome" },
        { name: "Wieliczka Salt Mine", location: "Krakow" },
        { name: "Edge NYC", location: "New York" },
        { name: "Sagrada Familia", location: "Barcelona" },
        { name: "Pompeii Tickets & Tours", location: "Naples" },
        { name: "Dubai Miracle Garden", location: "Dubai" },
        { name: "Duomo Florence", location: "Florence" },
        { name: "Singapore Zoo", location: "Singapore" },
        { name: "Alcazar Seville", location: "Seville" },
        { name: "Empire State Building", location: "New York" },
        { name: "Broadway", location: "New York" },
        { name: "Krakow to Auschwitz Birkenau Tours", location: "Krakow" },
        { name: "Acropolis Tickets", location: "Athens" },
        { name: "Jungfraujoch Tickets", location: "Interlaken" },
        { name: "Oceanografic Valencia", location: "Valencia" },
        { name: "Camp Nou Tours", location: "Barcelona" },
        { name: "London Eye", location: "London" },
        { name: "Universal Studios Singapore", location: "Singapore" },
        { name: "Tower of London", location: "London" },
        { name: "Accademia Gallery Tickets", location: "Florence" },
        { name: "Dubai Frame Tickets", location: "Dubai" },
        { name: "Belém Tower", location: "Lisbon" },
        { name: "SUMMIT One Vanderbilt", location: "New York" },
        { name: "Gardens by the Bay", location: "Singapore" },
        { name: "Pena Palace", location: "Lisbon" },
        { name: "Casa Mila Tickets", location: "Barcelona" },
        { name: "Universal Studios Japan Tickets", location: "Osaka" },
        { name: "Topkapi Palace Tickets", location: "Istanbul" },
        { name: "Disneyland Hong Kong Tickets", location: "Hong Kong" },
        { name: "Monastery of Jerónimos", location: "Lisbon" },
        { name: "City of Arts and Sciences", location: "Valencia" },
        { name: "Seville Cathedral Tickets", location: "Seville" },
        { name: "Royal Palace Of Madrid Tickets", location: "Madrid" },
        { name: "Doge's Palace", location: "Venice" },
        { name: "Melbourne Skydeck Tickets", location: "Melbourne" },
        { name: "Basilica Cistern Tickets", location: "Istanbul" },
    ],
    get attractions() {
        return this.tourDestinations.map((tour, index) => ({
            id: 13 + index,
            name: `Tour to ${tour.name}`,
            city: tour.location,
            image: `/images/asset ${40 + index}.jpeg`,
        }));
    },
};

/* TOP RECOMMENDATIONS SECTION */
export const topRecommendationsData: TopRecommendationsData = {
    title: "FlyFim's top recommendations",
    recommendations: [
        {
            id: 1,
            image: "/images/asset 100.jpeg",
            location: "Madrid",
            title: "Royal Palace of Madrid Skip-the-Line Tickets",
            rating: 4.6,
            reviews: "8.5K",
            price: "€16",
            tag: "Instant confirmation",
        },
        {
            id: 2,
            image: "/images/asset 13.jpeg",
            location: "Athens",
            title: "Acropolis Parthenon Tickets with Audio Guide",
            rating: 4.3,
            reviews: "36.3K",
            price: "€12.90",
            tag: "",
        },
        {
            id: 3,
            image: "/images/asset 14.jpeg",
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
            image: "/images/asset 15.jpeg",
            location: "Interlaken",
            title: "From Interlaken: Jungfraujoch Top of Europe Round-Trip Train Tickets",
            rating: 4.5,
            reviews: "3K",
            price: "CHF 233.80",
            tag: "Instant confirmation",
        },
        {
            id: 5,
            image: "/images/asset 16.jpeg",
            location: "Paris",
            title: "Eiffel Tower: Summit or Second Floor Direct Access Ticket",
            rating: 4.4,
            reviews: "12.3K",
            price: "€49",
            tag: "Free cancellation",
        },
        {
            id: 6,
            image: "/images/asset 17.jpeg",
            location: "Rome",
            title: "Vatican Museums & Sistine Chapel Skip-the-Line Ticket",
            rating: 4.7,
            reviews: "25.1K",
            price: "€24",
            tag: "Instant confirmation",
        },
        {
            id: 7,
            image: "/images/asset 18.jpeg",
            location: "Barcelona",
            title: "Sagrada Familia: Fast Track Ticket with Tower Access",
            rating: 4.8,
            reviews: "15.7K",
            price: "€45",
            tag: "Free cancellation",
        },
        {
            id: 8,
            image: "/images/asset 19.jpeg",
            location: "Dubai",
            title: "Burj Khalifa: At the Top (Levels 124 & 125) Ticket",
            rating: 4.5,
            reviews: "18.2K",
            price: "AED 169",
            tag: "Instant confirmation",
        },
    ],
};

/* EXPLORE DESTINATIONS SECTION */
export const exploreDestinationsData: ExploreDestinationsData = {
    title: "Explore world's top destinations",
    seeAllLink: "/cities",
    destinations: [
        {
            id: 1,
            name: "New York",
            country: "United States",
            image: "/images/asset 2.jpeg",
        },
        {
            id: 2,
            name: "London",
            country: "United Kingdom",
            image: "/images/asset 3.jpeg",
        },
        {
            id: 3,
            name: "Dubai",
            country: "United Arab Emirates",
            image: "/images/asset 4.jpeg",
        },
        {
            id: 4,
            name: "Rome",
            country: "Italy",
            image: "/images/asset 5.jpeg",
        },
        {
            id: 5,
            name: "Paris",
            country: "France",
            image: "/images/asset 6.jpeg",
        },
        {
            id: 6,
            name: "Singapore",
            country: "Singapore",
            image: "/images/asset 7.jpeg",
        },
    ],
};

/* RECENT CHECKOUTS SECTION */
export const recentCheckoutData: RecentCheckoutData = {
    title: "You recently checked out",
    checkouts: [
        {
            id: 1,
            image: "/images/asset 10.jpeg",
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
            image: "/images/asset 11.jpeg",
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
            image: "/images/asset 12.jpeg",
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
            image: "/images/asset 13.jpeg",
            location: "Athens",
            title: "Acropolis Parthenon Tickets with Audio Guide",
            rating: 4.3,
            reviews: 320,
            originalPrice: "€15.90",
            currentPrice: "€12.90",
            tag: "Free cancellation",
        },
    ],
};

/* REVIEWS SECTION */
export const reviewsData: ReviewsData = {
    title: "Millions love heading out with us",
    reviews: [
        {
            id: 1,
            name: "Kelly",
            country: "United States",
            flag: "🇺🇸",
            rating: 4,
            image: "/reviews/2.jpg",
            review: "It was enjoyable, educational as well. I learned more than I would have thought. I'm 64 and remember watching on tv the moon landing.",
            ticket: "Kennedy Space Center Admission Ticket",
        },
        {
            id: 2,
            name: "Szász",
            country: "Romania",
            flag: "🇷🇴",
            rating: 5,
            image: "/reviews/4.jpg",
            review: "Disneyland was my childhood dream, and I was very exited to visit it. I waited for 10 years and it was amazing! A lot of experience, a lot of fun. In this place you can be child for a day again:)",
            ticket: "Disneyland® Paris Tickets",
        },
        {
            id: 3,
            name: "Elise",
            country: "France",
            flag: "🇫🇷",
            rating: 5,
            image: "/reviews/3.jpg",
            review: "The tour guide was so lovely, polite and informative! It was really good actually at the Eiffel Tower, lots of great photo opportunities!",
            ticket: "Eiffel Tower 2nd Floor: Guided Tour",
        },
        {
            id: 4,
            name: "Marco",
            country: "Italy",
            flag: "🇮🇹",
            rating: 5,
            image: "/reviews/1.jpg",
            review: "Amazing experience! The guide was very knowledgeable and made the tour really interesting. Would definitely recommend to anyone visiting Rome.",
            ticket: "Vatican Museums & Sistine Chapel Skip-the-Line Ticket",
        },
        {
            id: 5,
            name: "Sophia",
            country: "Germany",
            flag: "🇩🇪",
            rating: 4,
            image: "/reviews/5.jpg",
            review: "Great value for money. The views were breathtaking and the experience was well organized. Only giving 4 stars because it was a bit crowded.",
            ticket: "Burj Khalifa: At the Top Tickets",
        },
    ],
};

/* CARD SECTION */
export const cardSectionData: CardSectionData = {
    cards: [
        {
            id: 1,
            image: "/images/asset 137.svg",
            title: "Only the finest",
            description:
                "At FlyFim, you only find the best. We do the hard work so you don't have to.",
            backgroundColor: "bg-blue-100",
            iconColor: "text-blue-500",
        },
        {
            id: 2,
            image: "/images/asset 138.svg",
            title: "Greed is good",
            description:
                "With quality, you also get lowest prices, last-minute availability and 24x7 support.",
            backgroundColor: "bg-green-100",
            iconColor: "text-green-500",
        },
        {
            id: 3,
            image: "/images/asset 139.svg",
            title: "Experience every flavour",
            description:
                "Offbeat or mainstream, a tour or a show, a game or a museum - we have 'em all.",
            backgroundColor: "bg-pink-100",
            iconColor: "text-pink-500",
        },
        {
            id: 4,
            image: "/images/asset 140.svg",
            title: "No pain, only gain",
            description:
                "Didn't love it? We'll give you your money back. Not cocky, just confident.",
            backgroundColor: "bg-yellow-100",
            iconColor: "text-yellow-500",
        },
    ],
};
