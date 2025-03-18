"use client";

import Image from "next/image";
import { useEffect } from "react";

import { motion, useAnimationControls } from "framer-motion";

import { cn } from "@/lib/utils";

import { partners } from "@/components/data/constants/constants";
import { Partner } from "@/components/data/types/types";
import { Card } from "@/components/ui/card";

interface PartnerRowProps {
    partners: Partner[];
    direction: "left" | "right";
    speed?: number;
    className?: string;
}

const PartnerRow = ({
    partners,
    direction,
    speed = 40,
    className,
}: PartnerRowProps) => {
    const controls = useAnimationControls();
    const duration = partners.length * (100 / speed);

    useEffect(() => {
        controls.start({
            x:
                direction === "left"
                    ? [0, -1 * partners.length * 240]
                    : [-1 * partners.length * 240, 0],
        });
    }, [controls, direction, partners.length]);

    return (
        <div className={cn("relative w-full overflow-hidden py-4", className)}>
            <motion.div
                className="flex gap-16 whitespace-nowrap"
                initial={{
                    x: direction === "left" ? 0 : -1 * partners.length * 240,
                }}
                animate={controls}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {/* Duplicate the array to create a seamless loop */}
                {[...partners, ...partners, ...partners].map(
                    (partner, index) => (
                        <motion.div
                            key={`${partner.id}-${index}`}
                            className="inline-block px-4"
                            whileHover={{
                                scale: 1.05,
                                filter: "brightness(1.1)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="flex h-24 w-48 items-center justify-center border border-gray-200/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/20">
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={160}
                                    height={80}
                                    className="h-auto max-h-16 w-auto max-w-full object-contain transition-all"
                                />
                            </Card>
                        </motion.div>
                    ),
                )}
            </motion.div>
        </div>
    );
};

interface PartnersSectionProps {
    title?: string;
    animationSpeed?: number;
    className?: string;
}

export default function PartnersSection({
    title = "We have the best partners",
    animationSpeed = 40,
    className,
}: PartnersSectionProps) {
    const firstHalf = partners.slice(0, Math.ceil(partners.length / 2));
    const secondHalf = partners.slice(Math.ceil(partners.length / 2));

    return (
        <section
            className={cn(
                "relative w-full overflow-hidden bg-gradient-to-b from-background/80 to-background py-16",
                className,
            )}
        >
            <div className="w-full">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
                    {title}
                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-primary"></div>
                </h2>

                <div className="w-full space-y-12">
                    <PartnerRow
                        partners={firstHalf}
                        direction="left"
                        speed={animationSpeed}
                        className="mb-8"
                    />

                    <PartnerRow
                        partners={secondHalf}
                        direction="right"
                        speed={animationSpeed}
                    />
                </div>
            </div>
        </section>
    );
}
