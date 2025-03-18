/* NAVBAR */

export interface Language {
    code: string;
    name: string;
    highlight?: boolean;
}

export interface Currency {
    code: string;
    name: string;
    symbol?: string;
    highlight?: boolean;
}

export interface NavbarData {
    cityNames: string[];
    languages: Language[];
    popularCurrencies: Currency[];
    moreCurrencies: Currency[];
}

/* FOOTER */

export type SocialLink = {
    href: string;
    icon: string;
    alt: string;
};

export type PaymentMethod = {
    icon: string;
    alt: string;
};

export type FooterLink = {
    href: string;
    label: string;
    icon?: React.ReactNode;
};

export type FooterColumn = {
    title: string;
    links: FooterLink[];
};

export type FooterProps = {
    helpColumn: FooterColumn & {
        qrCode: {
            src: string;
            alt: string;
        };
        appStoreLinks: {
            apple: {
                href: string;
                src: string;
                alt: string;
            };
            google: {
                href: string;
                src: string;
                alt: string;
            };
        };
    };
    citiesColumn: FooterColumn;
    aboutColumn: FooterColumn;
    partnersColumn: FooterColumn & {
        paymentMethods: PaymentMethod[];
    };
    companyInfo: {
        logo: {
            src: string;
            alt: string;
        };
        copyright: string;
        privacyLink: FooterLink;
        termsLink: FooterLink;
    };
    socialLinks: SocialLink[];
};

/* Hero Types */

export interface City {
    name: string;
    image: string;
    rating: number;
    activities: number;
    duration?: {
        min: number;
        max: number;
        unit: "hours" | "days" | "weeks";
    };
}

export interface SearchTag {
    name: string;
    icon?: string; // Icon name from lucide-react
}

export interface Statistics {
    tours: number;
    experiences: number;
    cities: number;
}

export interface HeroData {
    title: string;
    searchPlaceholder: string;
    promotion?: {
        badge: string;
        text: string;
        link: {
            text: string;
            url: string;
        };
    };
    searchTags: SearchTag[];
    statistics: Statistics;
    destinations: {
        title: string;
        description: string;
        viewAllLink: string;
        cities: City[];
    };
}

/* Partners Types */

export interface Partner {
    id: number;
    name: string;
    logo: string;
}

/* Browse Themes Types */

export interface ThemeCategory {
    id: string;
    name: string;
    icon: string;
}

export interface ThemeSubcategories {
    [key: string]: string[];
}

export interface BrowseThemesData {
    categories: ThemeCategory[];
    subcategories: ThemeSubcategories;
}

/* Stats Types */

export interface Stat {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface StatsData {
    heading: string;
    stats: Stat[];
}

/* World At Tap Types */
export interface AppStoreLink {
    href: string;
    imageSrc: string;
    imageAlt: string;
    width: number;
    height: number;
}

export interface WorldAtTapData {
    title: string;
    description: string;
    appStoreLinks: {
        apple: AppStoreLink;
        google: AppStoreLink;
    };
    mobileAppImage: {
        src: string;
        alt: string;
    };
}

/* Top Things Worldwide Types */
export interface TourDestination {
    name: string;
    location: string;
}

export interface Attraction {
    id: number;
    name: string;
    city: string;
    image: string;
}

export interface TopThingsWorldwideData {
    title: string;
    seeAllLink: string;
    tourDestinations: TourDestination[];
    attractions: Attraction[];
}

/* Top Recommendations Types */
export interface Recommendation {
    id: number;
    image: string;
    location: string;
    title: string;
    rating: number;
    reviews: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    tag?: string;
}

export interface TopRecommendationsData {
    title: string;
    recommendations: Recommendation[];
}

/* Explore Destinations Types */
export interface ExploreDestination {
    id: number;
    name: string;
    country: string;
    image: string;
}

export interface ExploreDestinationsData {
    title: string;
    seeAllLink: string;
    destinations: ExploreDestination[];
}

/* Recent Checkouts Types */
export interface RecentCheckout {
    id: number;
    image: string;
    location: string;
    title: string;
    rating: number;
    reviews: number;
    originalPrice?: string;
    currentPrice: string;
    discount?: string;
    tag: string;
}

export interface RecentCheckoutData {
    title: string;
    checkouts: RecentCheckout[];
}

/* Reviews Section Types */
export interface Review {
    id: number;
    name: string;
    country: string;
    flag: string;
    rating: number;
    image: string;
    review: string;
    ticket: string;
}

export interface ReviewsData {
    title: string;
    subtitle?: string;
    reviews: Review[];
}

/* Card Section Types */
export interface Card {
    id: number;
    image: string;
    title: string;
    description: string;
    backgroundColor: string;
    iconColor: string;
    badge?: string;
}

export interface CardSectionData {
    cards: Card[];
    title?: string;
    description?: string;
}
