"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { worldAtTapData } from "./data/constants/constants";
import {
    ArrowRightIcon,
    BadgeCheckIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    QrCodeIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "./icons/heroicons";

export default function WorldAtTap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
    );

    return (
        <section
            className="relative overflow-hidden py-24"
            ref={containerRef}
            style={{
                background:
                    "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f0f6ff 100%)",
            }}
        >
            <div className="container relative mx-auto px-4">
                {/* Diagonal section layout */}
                <div className="relative flex flex-col items-center justify-between md:flex-row">
                    {/* Content Section - spans 6 columns with offset for unique layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col justify-center lg:col-span-7 lg:pr-12 xl:pr-20"
                    >
                        <div className="mb-8 flex flex-col">
                            <Badge
                                variant="secondary"
                                className="mb-4 w-fit bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700"
                            >
                                <SparklesIcon className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
                                New Features Available
                            </Badge>

                            <h2 className="mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl xl:text-6xl">
                                {worldAtTapData.title}
                            </h2>

                            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
                                {worldAtTapData.description}
                            </p>

                            {/* App store download section */}
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href={
                                        worldAtTapData.appStoreLinks.apple.href
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute inset-0 rounded-xl border border-blue-100/50 transition-colors group-hover:border-blue-200/50" />
                                    <Image
                                        src={
                                            worldAtTapData.appStoreLinks.apple
                                                .imageSrc
                                        }
                                        alt={
                                            worldAtTapData.appStoreLinks.apple
                                                .imageAlt
                                        }
                                        width={
                                            worldAtTapData.appStoreLinks.apple
                                                .width
                                        }
                                        height={
                                            worldAtTapData.appStoreLinks.apple
                                                .height
                                        }
                                        className="h-14 scale-100 transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>

                                <Link
                                    href={
                                        worldAtTapData.appStoreLinks.google.href
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute inset-0 rounded-xl border border-blue-100/50 transition-colors group-hover:border-blue-200/50" />
                                    <Image
                                        src={
                                            worldAtTapData.appStoreLinks.google
                                                .imageSrc
                                        }
                                        alt={
                                            worldAtTapData.appStoreLinks.google
                                                .imageAlt
                                        }
                                        width={
                                            worldAtTapData.appStoreLinks.google
                                                .width
                                        }
                                        height={
                                            worldAtTapData.appStoreLinks.google
                                                .height
                                        }
                                        className="h-14 scale-100 transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* QR code and feature cards stack */}
                        <div className="mb-10 space-y-6">
                            {/* QR code section for direct download */}
                            <div className="relative w-fit overflow-hidden rounded-xl border border-blue-100/50 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent" />
                                <div className="relative flex items-center gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50">
                                        <QrCodeIcon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Scan to download
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Point your camera at the QR code to
                                            download directly
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature highlights in a more unique layout */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FeatureCard
                                    icon={
                                        <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600" />
                                    }
                                    title="Native Experience"
                                    description="Designed for optimal performance on all devices"
                                    colorFrom="blue-100"
                                    colorTo="blue-50"
                                    borderColor="blue-100/50"
                                    hoverBorderColor="blue-200/50"
                                    gradientFrom="blue-50/50"
                                />
                                <FeatureCard
                                    icon={
                                        <ShieldCheckIcon className="h-5 w-5 text-indigo-600" />
                                    }
                                    title="Secure Transactions"
                                    description="End-to-end encryption for all your data"
                                    colorFrom="indigo-100"
                                    colorTo="indigo-50"
                                    borderColor="indigo-100/50"
                                    hoverBorderColor="indigo-200/50"
                                    gradientFrom="indigo-50/50"
                                />
                                <FeatureCard
                                    icon={
                                        <LightningBoltIcon className="h-5 w-5 text-amber-600" />
                                    }
                                    title="Instant Bookings"
                                    description="Reserve your activities in seconds"
                                    colorFrom="amber-100"
                                    colorTo="amber-50"
                                    borderColor="amber-100/50"
                                    hoverBorderColor="amber-200/50"
                                    gradientFrom="amber-50/50"
                                />
                                <FeatureCard
                                    icon={
                                        <GlobeAltIcon className="h-5 w-5 text-emerald-600" />
                                    }
                                    title="Worldwide Access"
                                    description="Available in 45+ countries and regions"
                                    colorFrom="emerald-100"
                                    colorTo="emerald-50"
                                    borderColor="emerald-100/50"
                                    hoverBorderColor="emerald-200/50"
                                    gradientFrom="emerald-50/50"
                                />
                            </div>
                        </div>

                        {/* Learn more section */}
                        <div className="mt-6">
                            <Button
                                variant="outline"
                                className="group relative w-fit overflow-hidden border-blue-200 bg-gradient-to-br from-white to-blue-50/50 text-blue-600 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <span className="relative">
                                    Explore all features
                                </span>
                                <ArrowRightIcon className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Device showcase section - spans 6 columns, offset for unique layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex items-center justify-center lg:col-span-6 lg:col-start-7 lg:-ml-6"
                        style={{ y, opacity }}
                    >
                        {/* Accent floating shapes */}
                        <div className="absolute -left-16 top-12 h-20 w-20 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 backdrop-blur-xl"></div>
                        <div className="absolute -right-10 bottom-1/3 h-16 w-16 rotate-12 rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 backdrop-blur-xl"></div>

                        {/* Main device display with floating effect */}
                        <motion.div
                            className="relative z-10 h-[600px] w-[300px]"
                            style={{ rotate }}
                        >
                            {/* Enhanced phone frame effect */}
                            <div className="absolute inset-0 rounded-[3rem] border-[12px] border-gray-900 bg-gray-900 shadow-[0_0_60px_-12px_rgba(0,0,0,0.3)]" />

                            {/* Screen content with enhanced effects */}
                            <div className="absolute inset-[12px] overflow-hidden rounded-[2.5rem]">
                                <Image
                                    src={worldAtTapData.mobileAppImage.src}
                                    alt={worldAtTapData.mobileAppImage.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Enhanced screen effects */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
                            </div>

                            {/* Enhanced decorative elements */}
                            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 blur-3xl" />

                            {/* Phone camera and speaker details for realism */}
                            <div className="absolute left-1/2 top-[22px] z-30 h-[25px] w-[120px] -translate-x-1/2 rounded-full bg-black">
                                <div className="absolute left-[25%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gray-700"></div>
                                <div className="absolute left-[42%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gray-800"></div>
                            </div>
                        </motion.div>

                        {/* Enhanced feature callouts */}
                        <div className="absolute left-1/2 top-1/4 hidden -translate-x-full lg:block">
                            <Card className="relative w-60 overflow-hidden border-blue-100/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                                {/* Connection line */}
                                <div className="absolute -right-[60px] top-1/2 h-px w-[60px] -translate-y-1/2 bg-gradient-to-r from-blue-200 to-transparent"></div>
                                <div className="absolute -right-[10px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-200"></div>

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent" />
                                <div className="relative flex items-center gap-3">
                                    <BadgeCheckIcon className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Ticket Authentication
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Instant verification at venues
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* App statistics pill */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute -right-4 top-[60%] hidden lg:block"
                        >
                            <Card className="overflow-hidden border-none bg-white/80 p-4 shadow-lg backdrop-blur-md">
                                <div className="flex w-64 items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-500">
                                            App Rating
                                        </span>
                                        <div className="mt-1 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="h-4 w-4 fill-current text-amber-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-gray-900">
                                            4.9
                                        </span>
                                        <p className="text-xs text-gray-500">
                                            from 10k+ reviews
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Feature card component for reusability
function FeatureCard({
    icon,
    title,
    description,
    colorFrom,
    colorTo,
    borderColor,
    hoverBorderColor,
    gradientFrom,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    colorFrom: string;
    colorTo: string;
    borderColor: string;
    hoverBorderColor: string;
    gradientFrom: string;
}) {
    return (
        <Card
            className={`group relative overflow-hidden border-${borderColor} p-4 transition-all hover:border-${hoverBorderColor} hover:shadow-lg`}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
            />
            <div className="relative flex items-center">
                <div
                    className={`mr-4 rounded-xl bg-gradient-to-br from-${colorFrom} to-${colorTo} p-2.5`}
                >
                    {icon}
                </div>
                <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </Card>
    );
}
