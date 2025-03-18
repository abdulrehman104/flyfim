"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { cn } from "../lib/utils";
import { statsData } from "./data/constants/constants";

export default function ServedMillions() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Animation variants with more subtle timing
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

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-slate-50 py-24 md:py-32"
        >
            {/* Refined decorative elements with more professional styling */}
            <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
                <div className="absolute right-[-5%] top-[20%] h-[25rem] w-[25rem] rounded-full border border-blue-100 opacity-30"></div>
                <div className="absolute bottom-[10%] left-[-10%] h-[40rem] w-[40rem] rounded-full border border-blue-50 opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[30%] h-[30rem] w-[30rem] rounded-full border border-indigo-100 opacity-20"></div>

                {/* Added subtle grid backdrop */}
                <div className="bg-grid-slate-100/[0.03] absolute inset-0"></div>

                {/* Added subtle gradient orb */}
                <div className="bg-gradient-radial absolute left-[20%] top-[30%] h-[35rem] w-[35rem] rounded-full from-blue-400/5 to-transparent opacity-60 blur-3xl"></div>
            </div>

            <div className="container relative mx-auto px-4 md:px-6">
                {/* Enhanced heading section */}
                <div className="relative mb-24 flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={
                            isInView
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0.98, opacity: 0 }
                        }
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 max-w-3xl text-center"
                    >
                        <span className="mb-5 inline-block rounded border border-blue-100/30 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                            Global Impact
                        </span>
                        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-800 md:text-5xl">
                            {statsData.heading}
                        </h2>
                        <div className="mx-auto mb-6 h-0.5 w-24 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500"></div>
                        <p className="leading-relaxed text-slate-600 md:text-lg">
                            Delivering exceptional travel experiences worldwide
                            through our award-winning service and network of
                            premium partners
                        </p>
                    </motion.div>

                    {/* More subtle decorative elements */}
                    <motion.div
                        className="absolute -left-10 top-5 h-16 w-16 opacity-10"
                        initial={{ rotate: 0, x: -10 }}
                        animate={
                            isInView
                                ? { rotate: -10, x: 0 }
                                : { rotate: 0, x: -10 }
                        }
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="100"
                                    y2="100"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3B82F6" />
                                    <stop offset="1" stopColor="#4F46E5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    <motion.div
                        className="absolute -right-10 bottom-0 h-12 w-12 opacity-10"
                        initial={{ rotate: 0, x: 10 }}
                        animate={
                            isInView
                                ? { rotate: 10, x: 0 }
                                : { rotate: 0, x: 10 }
                        }
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="100"
                                height="100"
                                fill="url(#paint1_linear)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint1_linear"
                                    x1="0"
                                    y1="0"
                                    x2="100"
                                    y2="100"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2563EB" />
                                    <stop offset="1" stopColor="#4F46E5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </div>

                {/* Refined stat visualization */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative z-10"
                >
                    <div className="relative grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-0">
                        {/* Subtle connecting line */}
                        <div className="absolute left-0 right-0 top-1/3 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block"></div>

                        {statsData.stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                variants={itemVariants}
                                className={cn(
                                    "relative z-10 lg:col-span-3",
                                    index % 2 === 0 ? "lg:mt-12" : "lg:mb-12",
                                )}
                            >
                                <div
                                    className={cn(
                                        "group relative",
                                        index === 0 || index === 3
                                            ? "lg:ml-16 lg:mr-4"
                                            : "lg:ml-4 lg:mr-16",
                                    )}
                                >
                                    {/* Refined 3D/floating element with more beautiful styling */}
                                    <div className="relative z-10 transform overflow-hidden rounded-xl border border-blue-50 bg-white/95 p-8 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_60px_-30px_rgba(56,103,214,0.3)] md:p-10">
                                        {/* Subtle accent elements */}
                                        <div
                                            className={cn(
                                                "absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-5",
                                                index === 0
                                                    ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                                                    : index === 1
                                                      ? "bg-gradient-to-br from-indigo-600 to-blue-600"
                                                      : index === 2
                                                        ? "bg-gradient-to-br from-sky-600 to-blue-600"
                                                        : "bg-gradient-to-br from-indigo-600 to-sky-600",
                                            )}
                                        ></div>

                                        <div
                                            className={cn(
                                                "absolute inset-0 border-t-[3px] opacity-80",
                                                index === 0
                                                    ? "border-blue-500"
                                                    : index === 1
                                                      ? "border-indigo-500"
                                                      : index === 2
                                                        ? "border-sky-500"
                                                        : "border-slate-500",
                                            )}
                                        ></div>

                                        {/* Content with refined spacing */}
                                        <div className="relative flex h-full flex-col">
                                            {/* Professional icon presentation */}
                                            <div className="mb-7">
                                                <div
                                                    className={cn(
                                                        "relative inline-flex items-center justify-center",
                                                    )}
                                                >
                                                    <div
                                                        className={cn(
                                                            "flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br p-3",
                                                            index === 0
                                                                ? "from-blue-50 to-blue-100 text-blue-600"
                                                                : index === 1
                                                                  ? "from-indigo-50 to-indigo-100 text-indigo-600"
                                                                  : index === 2
                                                                    ? "from-sky-50 to-sky-100 text-sky-600"
                                                                    : "from-slate-50 to-slate-100 text-slate-700",
                                                        )}
                                                    >
                                                        {stat.icon}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Refined title with subtle animation */}
                                            <div className="mb-3 overflow-hidden">
                                                <motion.div
                                                    initial={{ y: 20 }}
                                                    animate={
                                                        isInView
                                                            ? { y: 0 }
                                                            : { y: 20 }
                                                    }
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: 0.1 * index,
                                                    }}
                                                >
                                                    <h3
                                                        className={cn(
                                                            "text-4xl font-bold tracking-tight md:text-5xl",
                                                            index === 0
                                                                ? "text-blue-600"
                                                                : index === 1
                                                                  ? "text-indigo-600"
                                                                  : index === 2
                                                                    ? "text-sky-600"
                                                                    : "text-slate-700",
                                                        )}
                                                    >
                                                        {stat.title}
                                                    </h3>
                                                </motion.div>
                                            </div>

                                            {/* Description with better typography */}
                                            <p className="mb-8 font-normal leading-relaxed text-slate-600">
                                                {stat.description}
                                            </p>

                                            {/* Beautiful metric visualization */}
                                            <div className="flex flex-grow items-end">
                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex flex-col space-y-2">
                                                        <span className="text-xs font-medium text-slate-500">
                                                            Performance Index
                                                        </span>
                                                        <div className="flex space-x-1.5">
                                                            {[...Array(5)].map(
                                                                (_, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className={cn(
                                                                            "h-1.5 w-6 rounded-full transition-all duration-300",
                                                                            i <
                                                                                Math.floor(
                                                                                    index ===
                                                                                        0
                                                                                        ? 4.5
                                                                                        : index ===
                                                                                            1
                                                                                          ? 3.5
                                                                                          : index ===
                                                                                              2
                                                                                            ? 5
                                                                                            : 4.5,
                                                                                )
                                                                                ? index ===
                                                                                  0
                                                                                    ? "bg-gradient-to-r from-blue-400 to-blue-500"
                                                                                    : index ===
                                                                                        1
                                                                                      ? "bg-gradient-to-r from-indigo-400 to-indigo-500"
                                                                                      : index ===
                                                                                          2
                                                                                        ? "bg-gradient-to-r from-sky-400 to-sky-500"
                                                                                        : "bg-gradient-to-r from-slate-400 to-slate-500"
                                                                                : "bg-slate-100",
                                                                        )}
                                                                        initial={{
                                                                            scaleX: 0,
                                                                            opacity: 0,
                                                                        }}
                                                                        animate={
                                                                            isInView
                                                                                ? {
                                                                                      scaleX: 1,
                                                                                      opacity:
                                                                                          i <
                                                                                          Math.floor(
                                                                                              index ===
                                                                                                  0
                                                                                                  ? 4.5
                                                                                                  : index ===
                                                                                                      1
                                                                                                    ? 3.5
                                                                                                    : index ===
                                                                                                        2
                                                                                                      ? 5
                                                                                                      : 4.5,
                                                                                          )
                                                                                              ? 1
                                                                                              : 0.5,
                                                                                  }
                                                                                : {
                                                                                      scaleX: 0,
                                                                                      opacity: 0,
                                                                                  }
                                                                        }
                                                                        transition={{
                                                                            duration: 0.4,
                                                                            delay:
                                                                                0.5 +
                                                                                i *
                                                                                    0.1,
                                                                        }}
                                                                    />
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <svg
                                                            width="50"
                                                            height="50"
                                                            viewBox="0 0 100 100"
                                                        >
                                                            <circle
                                                                cx="50"
                                                                cy="50"
                                                                r="40"
                                                                fill="none"
                                                                stroke="#F1F5F9"
                                                                strokeWidth="8"
                                                            />
                                                            <motion.circle
                                                                cx="50"
                                                                cy="50"
                                                                r="40"
                                                                fill="none"
                                                                stroke={
                                                                    index === 0
                                                                        ? "url(#blue-gradient)"
                                                                        : index ===
                                                                            1
                                                                          ? "url(#indigo-gradient)"
                                                                          : index ===
                                                                              2
                                                                            ? "url(#sky-gradient)"
                                                                            : "url(#slate-gradient)"
                                                                }
                                                                strokeWidth="8"
                                                                strokeDasharray="251.2"
                                                                strokeDashoffset="251.2"
                                                                strokeLinecap="round"
                                                                transform="rotate(-90 50 50)"
                                                                initial={{
                                                                    strokeDashoffset: 251.2,
                                                                }}
                                                                animate={
                                                                    isInView
                                                                        ? {
                                                                              strokeDashoffset:
                                                                                  251.2 -
                                                                                  (index ===
                                                                                  0
                                                                                      ? 251.2 *
                                                                                        0.9
                                                                                      : index ===
                                                                                          1
                                                                                        ? 251.2 *
                                                                                          0.78
                                                                                        : index ===
                                                                                            2
                                                                                          ? 251.2 *
                                                                                            0.95
                                                                                          : 251.2 *
                                                                                            0.85),
                                                                          }
                                                                        : {
                                                                              strokeDashoffset: 251.2,
                                                                          }
                                                                }
                                                                transition={{
                                                                    duration: 1.5,
                                                                    delay: 0.5,
                                                                    ease: "easeOut",
                                                                }}
                                                            />
                                                            <defs>
                                                                <linearGradient
                                                                    id="blue-gradient"
                                                                    x1="0%"
                                                                    y1="0%"
                                                                    x2="100%"
                                                                    y2="100%"
                                                                >
                                                                    <stop
                                                                        offset="0%"
                                                                        stopColor="#60A5FA"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stopColor="#3B82F6"
                                                                    />
                                                                </linearGradient>
                                                                <linearGradient
                                                                    id="indigo-gradient"
                                                                    x1="0%"
                                                                    y1="0%"
                                                                    x2="100%"
                                                                    y2="100%"
                                                                >
                                                                    <stop
                                                                        offset="0%"
                                                                        stopColor="#818CF8"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stopColor="#4F46E5"
                                                                    />
                                                                </linearGradient>
                                                                <linearGradient
                                                                    id="sky-gradient"
                                                                    x1="0%"
                                                                    y1="0%"
                                                                    x2="100%"
                                                                    y2="100%"
                                                                >
                                                                    <stop
                                                                        offset="0%"
                                                                        stopColor="#38BDF8"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stopColor="#0EA5E9"
                                                                    />
                                                                </linearGradient>
                                                                <linearGradient
                                                                    id="slate-gradient"
                                                                    x1="0%"
                                                                    y1="0%"
                                                                    x2="100%"
                                                                    y2="100%"
                                                                >
                                                                    <stop
                                                                        offset="0%"
                                                                        stopColor="#94A3B8"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stopColor="#334155"
                                                                    />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div
                                                                className={cn(
                                                                    "rounded px-2 py-1 text-xs font-medium",
                                                                    index === 0
                                                                        ? "bg-blue-50 text-blue-700"
                                                                        : index ===
                                                                            1
                                                                          ? "bg-indigo-50 text-indigo-700"
                                                                          : index ===
                                                                              2
                                                                            ? "bg-sky-50 text-sky-700"
                                                                            : "bg-slate-50 text-slate-700",
                                                                )}
                                                            >
                                                                {index === 0
                                                                    ? "90%"
                                                                    : index ===
                                                                        1
                                                                      ? "78%"
                                                                      : index ===
                                                                          2
                                                                        ? "95%"
                                                                        : "85%"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Beautiful connecting lines with gradient */}
                                    {index < statsData.stats.length - 1 && (
                                        <div className="absolute -right-[15%] left-[60%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block"></div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Beautiful footer element */}
                <div className="mt-24 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-8 left-1/2 h-px w-[220px] -translate-x-1/2 transform bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                        <div className="flex items-center space-x-3 rounded-full border border-blue-100/40 bg-white px-7 py-3.5 text-sm font-medium shadow-lg backdrop-blur-sm">
                            <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80"></span>
                            <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                                Trusted by leading enterprises worldwide
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add gradient definitions for global use */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient
                        id="blue-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}
