"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { cardSectionData } from "./data/constants/constants";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

const MotionCard = motion(Card);

export default function CardSection() {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    // Item animation variants
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
        hover: {
            scale: 1.03,
            boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    return (
        <section className="relative overflow-hidden px-4 py-32">
            <div className="container relative mx-auto max-w-7xl">
                {/* Unique Hexagonal Card Layout */}
                <motion.div
                    className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {cardSectionData.cards.map((card, index) => {
                        const cardColors = getCardColors(index);

                        return (
                            <motion.div
                                key={card.id}
                                className="relative"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                {/* Background Glow Effect */}
                                <div
                                    className={cn(
                                        "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100",
                                        cardColors.gradient,
                                    )}
                                ></div>

                                <MotionCard
                                    className={cn(
                                        "group relative h-full overflow-hidden rounded-2xl border-0",
                                        "bg-white dark:bg-slate-900",
                                        "shadow-lg transition-all duration-300 hover:shadow-xl",
                                    )}
                                >
                                    <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>

                                    <CardHeader className="relative pb-4 pt-6">
                                        <div className="flex items-start gap-6">
                                            <div
                                                className={cn(
                                                    "relative flex h-14 w-14 shrink-0 items-center justify-center",
                                                    "transition-shadow duration-300",
                                                )}
                                            >
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 0.6,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="relative z-10"
                                                >
                                                    <Image
                                                        src={card.image}
                                                        alt={card.title}
                                                        width={300}
                                                        height={300}
                                                    />
                                                </motion.div>

                                                {/* Icon Background Elements */}
                                                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent rounded-lg"></div> */}
                                            </div>

                                            <div>
                                                <CardTitle
                                                    className={cn(
                                                        "text-2xl font-bold text-slate-800 dark:text-white",
                                                        "transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                                    )}
                                                >
                                                    {card.title}
                                                </CardTitle>

                                                {card.badge && (
                                                    <Badge
                                                        variant="secondary"
                                                        className="mt-2 text-xs font-medium"
                                                    >
                                                        {card.badge}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="relative">
                                            <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                                {card.description}
                                            </CardDescription>

                                            {/* Decorative Element */}
                                            <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full border border-slate-100 opacity-50 dark:border-slate-800"></div>
                                        </div>
                                    </CardContent>
                                </MotionCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

// Helper function to get color schemes for cards based on index
function getCardColors(index: number) {
    const colorSchemes = [
        {
            gradient:
                "from-blue-500/20 to-cyan-500/20 dark:from-blue-600/20 dark:to-cyan-600/20",
            iconBg: "bg-blue-50 dark:bg-blue-900/20",
            icon: "text-blue-600 dark:text-blue-400",
        },
        {
            gradient:
                "from-purple-500/20 to-pink-500/20 dark:from-purple-600/20 dark:to-pink-600/20",
            iconBg: "bg-purple-50 dark:bg-purple-900/20",
            icon: "text-purple-600 dark:text-purple-400",
        },
        {
            gradient:
                "from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20",
            iconBg: "bg-amber-50 dark:bg-amber-900/20",
            icon: "text-amber-600 dark:text-amber-400",
        },
        {
            gradient:
                "from-emerald-500/20 to-teal-500/20 dark:from-emerald-600/20 dark:to-teal-600/20",
            iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
            icon: "text-emerald-600 dark:text-emerald-400",
        },
    ];

    return colorSchemes[index % colorSchemes.length];
}
