"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { topRecommendationsData } from "./data/constants/constants";

export default function TopRecommendations() {
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex + cardsToShow >=
            topRecommendationsData.recommendations.length
                ? 0
                : prevIndex + cardsToShow,
        );
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0
                ? Math.max(
                      0,
                      topRecommendationsData.recommendations.length -
                          cardsToShow,
                  )
                : prevIndex - cardsToShow,
        );
    };

    const visibleCards = topRecommendationsData.recommendations.slice(
        startIndex,
        startIndex + cardsToShow,
    );

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden px-4 py-12"
        >
            <div className="container mx-auto">
                <motion.div
                    className="mb-8 flex items-center justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            {topRecommendationsData.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Discover our handpicked selection of top experiences
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="h-10 w-10 rounded-full transition-all hover:scale-105"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="h-10 w-10 rounded-full transition-all hover:scale-105"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <AnimatePresence mode="wait">
                        {visibleCards.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <Card className="group overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="relative">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={
                                                    item.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                priority={index < 2}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        </div>
                                        {item.tag && (
                                            <Badge
                                                variant="secondary"
                                                className={cn(
                                                    "absolute left-3 top-3 bg-white/90 backdrop-blur-sm",
                                                    item.tag ===
                                                        "Instant confirmation" &&
                                                        "text-green-700",
                                                    item.tag ===
                                                        "Free cancellation" &&
                                                        "text-blue-700",
                                                )}
                                            >
                                                {item.tag ===
                                                    "Instant confirmation" && (
                                                    <Zap className="mr-1 h-3 w-3" />
                                                )}
                                                {item.tag}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardContent className="space-y-3 p-4">
                                        <div className="flex items-center justify-between">
                                            <Badge
                                                variant="outline"
                                                className="border-none bg-blue-50 text-blue-700 hover:bg-blue-100"
                                            >
                                                {item.location}
                                            </Badge>
                                            {item.rating && (
                                                <div className="flex items-center gap-1.5">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">
                                                        {item.rating}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        ({item.reviews})
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="line-clamp-2 min-h-[2.5rem] text-base font-semibold">
                                            {item.title}
                                        </h3>
                                        <div className="border-t pt-2">
                                            <div className="text-sm text-muted-foreground">
                                                from
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {item.originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        {item.originalPrice}
                                                    </span>
                                                )}
                                                <span className="text-lg font-bold">
                                                    {item.price}
                                                </span>
                                                {item.discount && (
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-green-50 text-green-700 hover:bg-green-100"
                                                    >
                                                        {item.discount}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
