"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { reviewsData } from "./data/constants/constants";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const MotionCard = motion(Card);

export default function ReviewsSection() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // Handle responsive layout
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Get visible reviews based on screen size
    const visibleReviews = Array.from(
        { length: visibleCount },
        (_, i) =>
            reviewsData.reviews[(startIndex + i) % reviewsData.reviews.length],
    );

    const nextReview = () => {
        setStartIndex((prev) => (prev + 1) % reviewsData.reviews.length);
    };

    const prevReview = () => {
        setStartIndex(
            (prev) =>
                (prev - 1 + reviewsData.reviews.length) %
                reviewsData.reviews.length,
        );
    };

    return (
        <MotionConfig reducedMotion="user">
            <section
                className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-4 py-24 dark:from-slate-950 dark:to-slate-900"
                aria-label="Customer Reviews Section"
            >
                {/* Enhanced Background Pattern */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E2E8F0_0.5px,transparent_0.5px)] bg-[length:24px_24px] opacity-40 dark:bg-[radial-gradient(circle_at_center,#1E293B_0.5px,transparent_0.5px)]" />

                    {/* Soft Gradient Accent Elements */}
                    <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/20"></div>
                    <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl dark:bg-indigo-900/20"></div>
                </div>

                <div className="container relative mx-auto max-w-6xl">
                    {/* Refined Section Header */}
                    <div className="relative mb-20 text-center">
                        <div className="flex flex-col items-center gap-6">
                            <motion.div
                                className="relative inline-flex"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl"></span>
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-white shadow-sm ring-1 ring-slate-200/50 dark:from-blue-950 dark:to-slate-900 dark:ring-slate-800/50">
                                    <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mx-auto max-w-2xl space-y-4"
                            >
                                <h2 className="bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-slate-300 md:text-4xl lg:text-5xl">
                                    {reviewsData.title}
                                </h2>
                                <p className="text-base font-medium text-slate-600 dark:text-slate-400 md:text-lg">
                                    Authentic experiences shared by travelers
                                    worldwide
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="mt-2 flex flex-wrap items-center justify-center gap-4"
                            >
                                <Badge
                                    className="rounded-full border-0 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-blue-700 shadow-sm hover:from-blue-100 hover:to-indigo-100 dark:from-blue-950 dark:to-indigo-950 dark:text-blue-300 dark:hover:from-blue-900 dark:hover:to-indigo-900"
                                    aria-label={`${reviewsData.reviews.length} Verified Reviews`}
                                >
                                    <Star className="mr-1.5 h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    {reviewsData.reviews.length}+ Verified
                                    Reviews
                                </Badge>
                                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm dark:bg-slate-800/80 dark:text-slate-400">
                                    <span
                                        className="mr-2 text-base"
                                        aria-hidden="true"
                                    >
                                        🌎
                                    </span>
                                    30+ Countries
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Redesigned Reviews Display */}
                    <div className="relative mb-16">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                            <AnimatePresence mode="wait">
                                {visibleReviews.map((review, index) => (
                                    <MotionCard
                                        key={`${review.id}-${index}`}
                                        className={cn(
                                            "group relative overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-slate-900/80",
                                            "border border-slate-100 dark:border-slate-800",
                                            "rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md",
                                            "will-change-transform",
                                            index % 2 === 1 &&
                                                "lg:translate-y-6",
                                        )}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        <CardContent className="p-6 sm:p-8">
                                            {/* Improved Review Header */}
                                            <div className="mb-6 flex items-start justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-blue-50 dark:ring-slate-800">
                                                        <Image
                                                            src={
                                                                review.image ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={`${review.name}'s profile picture`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="56px"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900 dark:text-white">
                                                            {review.name}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                            <span
                                                                className="text-base"
                                                                aria-hidden="true"
                                                            >
                                                                {review.flag}
                                                            </span>
                                                            <span>
                                                                {review.country}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Quote className="h-6 w-6 rotate-180 text-blue-100 dark:text-slate-800" />
                                            </div>

                                            {/* Elegant Rating Display */}
                                            <div
                                                className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-3 py-1.5 dark:bg-slate-800/60"
                                                aria-label={`Rating: ${review.rating} out of 5 stars`}
                                            >
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={cn(
                                                            "h-3.5 w-3.5 transition-colors",
                                                            i < review.rating
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700",
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ))}
                                                <span className="ml-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                                                    {review.rating}
                                                </span>
                                            </div>

                                            {/* Review Content with Improved Typography */}
                                            <blockquote className="mt-5 text-base font-medium italic leading-relaxed text-slate-700 dark:text-slate-300">
                                                "{review.review}"
                                            </blockquote>

                                            {/* Trip Details with Visual Enhancement */}
                                            <div className="mt-6 border-t border-dashed border-slate-100 pt-5 dark:border-slate-800">
                                                <div className="flex items-center">
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                                            ✈️ {review.ticket}
                                                        </p>
                                                    </div>
                                                    <div className="text-xs font-medium text-slate-500 dark:text-slate-500">
                                                        Verified Trip
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </MotionCard>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Enhanced Navigation Controls */}
                        <div className="mt-14 flex justify-center gap-4">
                            <Button
                                onClick={prevReview}
                                variant="outline"
                                size="icon"
                                className={cn(
                                    "h-12 w-12 rounded-full border-blue-100 bg-white shadow-sm",
                                    "hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
                                    "dark:border-slate-800 dark:bg-slate-900/90",
                                    "dark:hover:border-blue-900 dark:hover:bg-blue-950 dark:hover:text-blue-400",
                                    "transition-all duration-200",
                                )}
                                aria-label="View previous reviews"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                onClick={nextReview}
                                variant="outline"
                                size="icon"
                                className={cn(
                                    "h-12 w-12 rounded-full border-blue-100 bg-white shadow-sm",
                                    "hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
                                    "dark:border-slate-800 dark:bg-slate-900/90",
                                    "dark:hover:border-blue-900 dark:hover:bg-blue-950 dark:hover:text-blue-400",
                                    "transition-all duration-200",
                                )}
                                aria-label="View next reviews"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}
