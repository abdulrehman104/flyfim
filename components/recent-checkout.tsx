"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { recentCheckoutData } from "./data/constants/constants";

const MotionCard = motion(Card);

export default function RecentCheckout() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === recentCheckoutData.checkouts.length - 1
                ? 0
                : prevIndex + 1,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? recentCheckoutData.checkouts.length - 1
                : prevIndex - 1,
        );
    };

    return (
        <MotionConfig reducedMotion="user">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden bg-gradient-to-b from-gray-50/80 to-white px-4 py-16"
            >
                <div className="container mx-auto">
                    <motion.div
                        className="mb-8 space-y-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            {recentCheckoutData.title}
                        </h2>
                        <p className="text-muted-foreground">
                            Your recently viewed experiences and activities
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    className="flex gap-4"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        duration: 0.5,
                                    }}
                                >
                                    {recentCheckoutData.checkouts.map(
                                        (item, index) => (
                                            <motion.div
                                                key={item.id}
                                                className="min-w-full px-2 md:min-w-[25%]"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.3,
                                                }}
                                            >
                                                <MotionCard
                                                    className={cn(
                                                        "group overflow-hidden border-none bg-white/80 backdrop-blur-sm",
                                                        "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                                                        "hover:shadow-[0_16px_45px_rgb(0,0,0,0.06)]",
                                                        "transition-all duration-500",
                                                    )}
                                                    whileHover={{ y: -5 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <div className="relative">
                                                        <motion.div
                                                            className="relative h-48 overflow-hidden rounded-t-lg"
                                                            whileHover={{
                                                                scale: 1.05,
                                                            }}
                                                            transition={{
                                                                duration: 0.6,
                                                            }}
                                                        >
                                                            <Image
                                                                src={
                                                                    item.image ||
                                                                    "/placeholder.svg"
                                                                }
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                                priority={
                                                                    index ===
                                                                    currentIndex
                                                                }
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                                        </motion.div>
                                                        <Badge
                                                            variant="secondary"
                                                            className={cn(
                                                                "absolute left-3 top-3 bg-white/90 backdrop-blur-sm",
                                                                "transition-all duration-300",
                                                                "hover:bg-white",
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
                                                    </div>
                                                    <CardContent className="space-y-3 p-4">
                                                        <div className="flex items-center justify-between">
                                                            <Badge
                                                                variant="outline"
                                                                className="border-none bg-blue-50 text-blue-700 transition-colors hover:bg-blue-100"
                                                            >
                                                                {item.location}
                                                            </Badge>
                                                            {item.rating && (
                                                                <motion.div
                                                                    className="flex items-center gap-1.5"
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                    }}
                                                                >
                                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                    <span className="font-medium">
                                                                        {
                                                                            item.rating
                                                                        }
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground">
                                                                        (
                                                                        {
                                                                            item.reviews
                                                                        }
                                                                        )
                                                                    </span>
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                        <h3 className="line-clamp-2 min-h-[2.5rem] text-base font-semibold transition-colors group-hover:text-primary">
                                                            {item.title}
                                                        </h3>
                                                        <div className="border-t pt-2">
                                                            <div className="text-sm text-muted-foreground">
                                                                from
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {item.originalPrice && (
                                                                    <span className="text-sm text-muted-foreground line-through">
                                                                        {
                                                                            item.originalPrice
                                                                        }
                                                                    </span>
                                                                )}
                                                                <motion.span
                                                                    className="text-lg font-bold"
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                    }}
                                                                >
                                                                    {
                                                                        item.currentPrice
                                                                    }
                                                                </motion.span>
                                                                {item.discount && (
                                                                    <Badge
                                                                        variant="secondary"
                                                                        className="bg-green-50 text-green-700 transition-colors hover:bg-green-100"
                                                                    >
                                                                        {
                                                                            item.discount
                                                                        }
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </MotionCard>
                                            </motion.div>
                                        ),
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-4">
                            <Button
                                onClick={prevSlide}
                                variant="outline"
                                size="icon"
                                className={cn(
                                    "h-10 w-10 rounded-full",
                                    "bg-white/90 backdrop-blur-sm",
                                    "hover:scale-105 hover:bg-white",
                                    "transition-all duration-300",
                                    "shadow-sm hover:shadow-md",
                                )}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>

                            <Button
                                onClick={nextSlide}
                                variant="outline"
                                size="icon"
                                className={cn(
                                    "h-10 w-10 rounded-full",
                                    "bg-white/90 backdrop-blur-sm",
                                    "hover:scale-105 hover:bg-white",
                                    "transition-all duration-300",
                                    "shadow-sm hover:shadow-md",
                                )}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </MotionConfig>
    );
}
