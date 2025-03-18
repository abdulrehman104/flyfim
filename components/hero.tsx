"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Variants, motion, useAnimation } from "framer-motion";
import {
    ChevronRight,
    ChevronsDown,
    Clock,
    Map,
    Search,
    Star,
    User,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { heroData as defaultHeroData } from "./data/constants/constants";
import { HeroData, Statistics } from "./data/types/types";

// Dynamically import icons to avoid bundling all of them
const Icons = {
    Compass: dynamic(() => import("lucide-react").then((mod) => mod.Compass)),
    Map: dynamic(() => import("lucide-react").then((mod) => mod.Map)),
};

interface HeroProps {
    data?: HeroData;
}

export default function Hero({ data = defaultHeroData }: HeroProps) {
    const [activeTagIndex, setActiveTagIndex] = useState(0);
    const [statistics, setStatistics] = useState<Statistics>({
        tours: 0,
        experiences: 0,
        cities: 0,
    });

    const controls = useAnimation();

    // Animation variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    const staggerChildren: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const cityCardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    // Handle animations and counters
    useEffect(() => {
        // Start animations
        controls.start("visible");

        // Rotate through search tags
        const tagInterval = setInterval(() => {
            setActiveTagIndex((prev) => (prev + 1) % data.searchTags.length);
        }, 4000);

        // Animate statistics counter
        const statsInterval = setInterval(() => {
            setStatistics((prev) => {
                const newStats = { ...prev };
                const targetStats = data.statistics;

                if (newStats.tours < targetStats.tours) {
                    newStats.tours += Math.ceil(targetStats.tours / 50);
                }
                if (newStats.experiences < targetStats.experiences) {
                    newStats.experiences += Math.ceil(
                        targetStats.experiences / 50,
                    );
                }
                if (newStats.cities < targetStats.cities) {
                    newStats.cities += Math.ceil(targetStats.cities / 50);
                }

                // Ensure we don't exceed target values
                if (newStats.tours > targetStats.tours)
                    newStats.tours = targetStats.tours;
                if (newStats.experiences > targetStats.experiences)
                    newStats.experiences = targetStats.experiences;
                if (newStats.cities > targetStats.cities)
                    newStats.cities = targetStats.cities;

                return newStats;
            });
        }, 50);

        // Clean up intervals
        return () => {
            clearInterval(tagInterval);
            clearInterval(statsInterval);
        };
    }, [controls, data.searchTags.length, data.statistics]);

    // Render icon component dynamically
    const renderIcon = useCallback((iconName?: string) => {
        if (!iconName) return null;
        const IconComponent = Icons[iconName as keyof typeof Icons];
        return IconComponent ? (
            <IconComponent className="mr-1 h-3 w-3" />
        ) : null;
    }, []);

    return (
        <section className="relative overflow-hidden">
            {/* Main hero height */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Video background with filter */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Video filter for enhanced quality */}
                    <div className="absolute inset-0 bg-black/10 backdrop-brightness-[0.95] backdrop-contrast-[1.05] backdrop-filter"></div>
                </div>

                {/* Gradient overlay with more sophisticated design */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                {/* Animated grain texture for depth */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-20 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                {/* Decorative circles */}
                <motion.div
                    className="absolute right-[15%] top-[20%] z-10 h-32 w-32 rounded-full border border-white/10 opacity-40"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute right-[18%] top-[25%] z-10 h-16 w-16 rounded-full border border-white/10 opacity-40"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Content container with staggered animations */}
                <motion.div
                    className="container relative z-30 mx-auto flex h-full flex-col items-start px-4 pt-32 sm:px-8 lg:px-12"
                    initial="hidden"
                    animate={controls}
                    variants={staggerChildren}
                >
                    {/* Promo Badge */}
                    {data.promotion && (
                        <motion.div
                            className="mb-6 mt-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm"
                            variants={fadeUp}
                            custom={0}
                        >
                            <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] text-white">
                                {data.promotion.badge}
                            </span>
                            <span className="text-xs font-medium text-white/90">
                                {data.promotion.text}
                            </span>
                            <Link
                                href={data.promotion.link.url}
                                className="ml-1 flex items-center text-xs text-white/80 hover:text-white"
                            >
                                {data.promotion.link.text}{" "}
                                <ChevronRight className="ml-1 h-3 w-3" />
                            </Link>
                        </motion.div>
                    )}

                    <div className="mb-16 w-full max-w-3xl sm:mb-20">
                        <motion.h1
                            className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-4xl md:text-5xl"
                            variants={fadeUp}
                            custom={1}
                        >
                            {data.title}
                        </motion.h1>

                        {/* Search bar with enhanced styling */}
                        <motion.div
                            className="relative w-full max-w-lg"
                            variants={fadeUp}
                            custom={2}
                        >
                            <div className="group relative transition-all duration-300">
                                <motion.div
                                    className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600/60 to-blue-400/60 opacity-0 blur-sm"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder={data.searchPlaceholder}
                                        className="h-12 w-full rounded-xl border-0 bg-white/95 py-6 pl-12 pr-4 text-base shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:shadow-lg sm:h-14 sm:text-lg"
                                    />
                                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500/80" />
                                    <button className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-500 hover:shadow sm:flex">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {/* Popular search tags */}
                            <motion.div
                                className="mt-4 flex flex-wrap gap-2"
                                variants={staggerChildren}
                            >
                                {data.searchTags.map((tag, i) => (
                                    <motion.button
                                        key={tag.name}
                                        className={cn(
                                            "flex h-7 items-center gap-x-2 rounded-full border border-white/20 bg-transparent px-3 text-xs text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white",
                                            "backdrop-blur-sm",
                                            i === activeTagIndex &&
                                                "border-white/40 bg-white/20 text-white shadow-sm",
                                        )}
                                        variants={fadeUp}
                                        custom={i}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {renderIcon(tag.icon)}
                                        {tag.name}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Stats counters */}
                        <motion.div
                            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
                            variants={fadeUp}
                            custom={5}
                        >
                            <div className="flex items-center">
                                <motion.span
                                    className="mr-1.5 text-sm font-semibold text-white/90"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {statistics.tours.toLocaleString()}+
                                </motion.span>
                                <span className="text-xs text-white/60">
                                    Tours
                                </span>
                            </div>
                            <div className="flex items-center">
                                <motion.span
                                    className="mr-1.5 text-sm font-semibold text-white/90"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3,
                                    }}
                                >
                                    {statistics.experiences.toLocaleString()}+
                                </motion.span>
                                <span className="text-xs text-white/60">
                                    Experiences
                                </span>
                            </div>
                            <div className="flex items-center">
                                <motion.span
                                    className="mr-1.5 text-sm font-semibold text-white/90"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6,
                                    }}
                                >
                                    {statistics.cities}+
                                </motion.span>
                                <span className="text-xs text-white/60">
                                    Cities
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex"
                        variants={fadeUp}
                        custom={6}
                    >
                        <span className="mb-2 text-xs text-white/70">
                            Discover more
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ChevronsDown className="h-5 w-5 text-white/70" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Featured destinations section */}
            <motion.div
                className="relative z-40 bg-white py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <div className="container mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="flex flex-col gap-10">
                        {/* Title section */}
                        <motion.div
                            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">
                                    {data.destinations.title}
                                </h2>
                                <p className="max-w-lg text-gray-500">
                                    {data.destinations.description}
                                </p>
                            </div>
                            <Link
                                href={data.destinations.viewAllLink}
                                className="flex items-center self-start rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 md:self-auto"
                            >
                                View all destinations{" "}
                                <ChevronRight className="ml-1.5 h-4 w-4" />
                            </Link>
                        </motion.div>

                        {/* Destination cards */}
                        <motion.div
                            className="grid grid-cols-1 gap-6 md:grid-cols-3"
                            initial="hidden"
                            animate="visible"
                            variants={staggerChildren}
                        >
                            {data.destinations.cities.map((city, i) => (
                                <motion.div
                                    key={city.name}
                                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl"
                                    variants={cityCardVariants}
                                    custom={i}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Main card image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                        <motion.div
                                            className="h-full w-full"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <img
                                                src={city.image}
                                                alt={city.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Card content */}
                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                                        <div className="mb-2 flex items-center justify-between">
                                            <h3 className="text-xl font-semibold text-white">
                                                {city.name}
                                            </h3>
                                            <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 backdrop-blur-sm">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs font-medium text-white">
                                                    {city.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1 text-white/80">
                                                    <Map className="h-3.5 w-3.5" />
                                                    <span className="text-xs">
                                                        {city.activities}{" "}
                                                        activities
                                                    </span>
                                                </div>
                                                {city.duration && (
                                                    <div className="flex items-center gap-1 text-white/80">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        <span className="text-xs">
                                                            {city.duration.min}-
                                                            {city.duration.max}{" "}
                                                            {city.duration.unit}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* User avatars */}
                                    <div className="absolute left-4 top-4 z-20 flex -space-x-2">
                                        {[1, 2, 3].map((_, i) => (
                                            <div
                                                key={i}
                                                className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-600/80"
                                            >
                                                <User className="h-3 w-3 text-white" />
                                            </div>
                                        ))}
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white/20 text-[10px] text-white backdrop-blur-sm">
                                            +99
                                        </div>
                                    </div>

                                    {/* Hover button */}
                                    <motion.div
                                        className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300"
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <Link
                                            href={`/destinations/${city.name.toLowerCase()}`}
                                            className="rounded bg-blue-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                                        >
                                            Explore {city.name}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
