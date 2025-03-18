"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { topThingsWorldwideData } from "./data/constants/constants";

export default function TopThingsWorldwide() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: scrollContainerRef,
    });

    // Transform scroll progress into opacity for fade effects
    const leftFadeOpacity = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
    const rightFadeOpacity = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -600,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 600,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden px-4 py-12"
        >
            <div className="container mx-auto">
                <motion.div
                    className="mb-8 flex flex-col items-center justify-between sm:flex-row"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            {topThingsWorldwideData.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Discover amazing experiences from around the world
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href={topThingsWorldwideData.seeAllLink}
                            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                        >
                            See all
                        </Link>
                        <div className="flex gap-2">
                            <motion.div style={{ opacity: leftFadeOpacity }}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={scrollLeft}
                                    className="h-10 w-10 rounded-full transition-all hover:scale-105"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                            </motion.div>
                            <motion.div style={{ opacity: rightFadeOpacity }}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={scrollRight}
                                    className="h-10 w-10 rounded-full transition-all hover:scale-105"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Gradient fades for scroll indication */}
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

                <div
                    ref={scrollContainerRef}
                    className="hide-scrollbar -mx-4 flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <AnimatePresence>
                        {topThingsWorldwideData.attractions.map(
                            (attraction, index) => (
                                <motion.div
                                    key={attraction.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    className="min-w-[280px] flex-shrink-0"
                                >
                                    <Link
                                        href={`/attractions/${attraction.name.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                                            <CardContent className="p-0">
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={
                                                            attraction.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={attraction.name}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        priority={index < 4}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                </div>
                                                <div className="space-y-2 p-4">
                                                    <h3 className="line-clamp-2 text-base font-semibold">
                                                        {attraction.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-xs text-blue-700">
                                                            {attraction.city}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ),
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
