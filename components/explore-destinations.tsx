"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { exploreDestinationsData } from "./data/constants/constants";

export default function ExploreDestinations() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative bg-gradient-to-b from-white to-gray-50 px-4 py-16"
        >
            <div className="container mx-auto">
                <motion.div
                    className="sm:flex-rowitems-center mb-8 flex flex-col justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            {exploreDestinationsData.title}
                        </h2>
                        <p className="text-muted-foreground">
                            Discover amazing experiences in these popular
                            destinations
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href={exploreDestinationsData.seeAllLink}
                            className="text-primary transition-colors hover:text-primary/80"
                        >
                            See all destinations
                        </Link>
                        <div className="flex gap-2">
                            <Button
                                onClick={scrollLeft}
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-full bg-white transition-all hover:scale-105"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                onClick={scrollRight}
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-full bg-white transition-all hover:scale-105"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <div
                    ref={scrollContainerRef}
                    className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <AnimatePresence mode="wait">
                        {exploreDestinationsData.destinations.map(
                            (destination, index) => (
                                <motion.div
                                    key={destination.id}
                                    className="min-w-[300px] flex-shrink-0 snap-start"
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <Link
                                        href={`/cities/${destination.name.toLowerCase()}`}
                                        className="block h-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    >
                                        <Card
                                            className={cn(
                                                "group h-full overflow-hidden rounded-xl border-none bg-white",
                                                "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                                                "hover:shadow-[0_16px_45px_rgb(0,0,0,0.06)]",
                                                "transition-all duration-300",
                                            )}
                                        >
                                            <div className="relative h-52">
                                                <Image
                                                    src={
                                                        destination.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={`Explore ${destination.name}`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                                                    priority={index < 2}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                                <Badge
                                                    variant="secondary"
                                                    className="absolute left-4 top-4 bg-white/90 backdrop-blur-sm"
                                                >
                                                    <MapPin className="mr-1 h-3 w-3" />
                                                    {destination.country}
                                                </Badge>
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary">
                                                    Things to do in{" "}
                                                    {destination.name}
                                                </h3>
                                                <motion.div
                                                    className="mt-2 inline-flex"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <span className="text-sm text-primary transition-transform group-hover:translate-x-1">
                                                        Explore destination →
                                                    </span>
                                                </motion.div>
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
