"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { browseThemesData } from "./data/constants/constants";
import { Button } from "./ui/button";

export default function BrowseThemes() {
    const [activeCategory, setActiveCategory] = useState("adventure");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: currentScroll - scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Browse by themes
                    </h2>

                    <div className="flex items-center space-x-2 rounded-full border border-gray-100 bg-gray-50 p-1 shadow-sm">
                        <Button
                            onClick={scrollLeft}
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full transition-colors hover:bg-gray-100 hover:text-purple-700"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                            onClick={scrollRight}
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full transition-colors hover:bg-gray-100 hover:text-purple-700"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="relative mx-auto pb-2">
                    <div
                        className="hide-scrollbar flex items-center gap-3 overflow-x-auto scroll-smooth pb-4"
                        ref={scrollContainerRef}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {browseThemesData.categories.map((category) => (
                            <Button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                variant={
                                    activeCategory === category.id
                                        ? "default"
                                        : "outline"
                                }
                                className={`flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 transition-all ${
                                    activeCategory === category.id
                                        ? "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:text-purple-800"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                size="sm"
                            >
                                <span className="inline-flex items-center justify-center text-lg">
                                    {category.icon}
                                </span>
                                <span className="inline-block">
                                    {category.name}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        className="mt-8 border-t pt-8"
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {browseThemesData.subcategories[
                                activeCategory
                            ]?.map((subcategory, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.03,
                                    }}
                                >
                                    <Link
                                        href={`/themes/${activeCategory}/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="group flex items-center gap-2 py-2 text-gray-700 transition-colors hover:text-purple-700"
                                    >
                                        <span className="font-medium transition-transform group-hover:translate-x-1">
                                            {subcategory}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href={`/themes/${activeCategory}`}
                                className="group inline-flex items-center text-sm font-medium text-purple-700 transition-colors hover:text-purple-800 hover:underline"
                            >
                                View all{" "}
                                {
                                    browseThemesData.categories.find(
                                        (c) => c.id === activeCategory,
                                    )?.name
                                }
                                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
