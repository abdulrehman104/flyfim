"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ChevronDown, HelpCircle, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { navbarData } from "./data/constants/constants";
import { NavbarData } from "./data/types/types";

export default function Navbar({ data = navbarData }: { data?: NavbarData }) {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchText, setSearchText] = useState(data.cityNames[0]);
    const [showDestinations, setShowDestinations] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const searchInputRef = useRef<HTMLInputElement>(null);
    const destinationsRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);
    const languageDropdownRef = useRef<HTMLDivElement>(null);

    // Animation variants
    const dropdownVariants: Variants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: 10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: "easeIn",
            },
        },
    };

    const sheetVariants: Variants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: [0.32, 0.72, 0, 1],
            },
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.2,
                ease: [0.32, 0.72, 0, 1],
            },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Animate search text with different city names
    useEffect(() => {
        const interval = setInterval(() => {
            const randomCity =
                data.cityNames[
                    Math.floor(Math.random() * data.cityNames.length)
                ];
            setSearchText(randomCity);
        }, 3000);

        return () => clearInterval(interval);
    }, [data.cityNames]);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close destinations dropdown if clicked outside
            if (
                destinationsRef.current &&
                !destinationsRef.current.contains(event.target as Node)
            ) {
                setShowDestinations(false);
            }

            // Close language dropdown if clicked outside
            if (
                languageDropdownRef.current &&
                !languageDropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }

            // Close notifications dropdown if clicked outside
            if (
                notificationsRef.current &&
                !notificationsRef.current.contains(event.target as Node)
            ) {
                setNotificationsOpen(false);
            }

            // Close user menu if clicked outside
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)
            ) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle search focus
    const handleSearchFocus = useCallback(() => {
        if (searchInputRef.current) {
            searchInputRef.current.select();
        }
    }, []);

    // Function to handle tab switching in the sheet
    const [activeTab, setActiveTab] = useState("languages");

    // Close sheet handler
    const closeSheet = () => {
        setIsSheetOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 h-16 transition-all duration-300 ease-in-out",
                scrolled
                    ? "border-b border-gray-200/10 bg-white/90 py-1 shadow-sm backdrop-blur-md"
                    : "bg-transparent py-2",
            )}
        >
            <div className="container mx-auto h-full px-4">
                <div className="flex h-full items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex h-full items-center gap-2">
                        <Link
                            href="/"
                            className="group relative z-10 flex h-full items-center"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Headout Logo"
                                    width={110}
                                    height={30}
                                    className={cn(
                                        "h-auto w-[100px] transition-all duration-300 sm:w-[110px]",
                                        "group-hover:scale-105",
                                        scrolled ? "invert-0" : "invert",
                                    )}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Search Input - Appears on scroll */}
                    <div
                        className={cn(
                            "absolute left-1/2 hidden w-full max-w-[350px] -translate-x-1/2 transition-all duration-300 ease-out md:block",
                            scrolled
                                ? "translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-4 opacity-0",
                        )}
                    >
                        <div className="group relative">
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder={`Search for ${searchText}`}
                                className={cn(
                                    "w-full rounded-full border border-gray-200/30 bg-white/95 py-1.5 pl-9 pr-3 text-sm",
                                    "shadow-sm transition-all duration-200",
                                    "focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:ring-offset-1",
                                    "group-hover:border-blue-500/30 group-hover:shadow",
                                )}
                                onFocus={handleSearchFocus}
                                aria-label="Search destinations"
                            />
                            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-blue-500/70" />
                        </div>
                    </div>

                    <div className="flex items-center gap-1 md:gap-3">
                        {/* Desktop: Dropdown Menu */}
                        <div
                            className="hidden md:block"
                            ref={languageDropdownRef}
                        >
                            <div className="relative">
                                <motion.button
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    className={cn(
                                        "flex h-9 items-center gap-1.5 rounded-full px-3 text-sm transition-all duration-200",
                                        "hover:scale-105",
                                        scrolled
                                            ? "text-gray-800 hover:bg-gray-100"
                                            : "text-white hover:bg-white/10",
                                    )}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span>English / USD</span>
                                    <motion.div
                                        animate={{
                                            rotate: isDropdownOpen ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            className="absolute right-0 z-50 mt-2 w-[420px] rounded-xl border border-gray-200/40 bg-white/95 p-0 shadow-lg backdrop-blur-sm"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={dropdownVariants}
                                        >
                                            <div className="w-full">
                                                <div className="border-b px-5 py-3">
                                                    <div className="grid w-full grid-cols-2 rounded-lg bg-gray-100/50 p-1">
                                                        <button
                                                            onClick={() =>
                                                                setActiveTab(
                                                                    "languages",
                                                                )
                                                            }
                                                            className={cn(
                                                                "rounded-md py-1.5 text-sm font-medium transition-all duration-200",
                                                                activeTab ===
                                                                    "languages"
                                                                    ? "bg-white text-gray-900 shadow-sm"
                                                                    : "text-gray-600 hover:text-gray-900",
                                                            )}
                                                        >
                                                            Languages
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setActiveTab(
                                                                    "currencies",
                                                                )
                                                            }
                                                            className={cn(
                                                                "rounded-md py-1.5 text-sm font-medium transition-all duration-200",
                                                                activeTab ===
                                                                    "currencies"
                                                                    ? "bg-white text-gray-900 shadow-sm"
                                                                    : "text-gray-600 hover:text-gray-900",
                                                            )}
                                                        >
                                                            Currencies
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="max-h-[320px] overflow-auto p-4">
                                                    {activeTab ===
                                                        "languages" && (
                                                        <div className="grid grid-cols-2 gap-1.5">
                                                            {data.languages.map(
                                                                (language) => (
                                                                    <button
                                                                        key={
                                                                            language.code
                                                                        }
                                                                        className={cn(
                                                                            "w-full justify-start rounded-lg px-3 py-2.5 text-left transition-all duration-200",
                                                                            language.highlight
                                                                                ? "bg-blue-500/10 font-medium text-blue-600 shadow-sm hover:bg-blue-500/20"
                                                                                : "hover:scale-[1.02] hover:bg-gray-100 focus:bg-gray-100",
                                                                        )}
                                                                    >
                                                                        {
                                                                            language.name
                                                                        }
                                                                    </button>
                                                                ),
                                                            )}
                                                        </div>
                                                    )}

                                                    {activeTab ===
                                                        "currencies" && (
                                                        <div className="space-y-5">
                                                            <div>
                                                                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                    Popular
                                                                    currencies
                                                                </h3>
                                                                <div className="grid grid-cols-2 gap-1.5">
                                                                    {data.popularCurrencies.map(
                                                                        (
                                                                            currency,
                                                                        ) => (
                                                                            <button
                                                                                key={
                                                                                    currency.code
                                                                                }
                                                                                className={cn(
                                                                                    "flex h-auto flex-col items-start justify-start rounded-lg px-3 py-2.5 text-left transition-all duration-200",
                                                                                    currency.highlight
                                                                                        ? "bg-blue-500/10 text-blue-600 shadow-sm hover:bg-blue-500/20"
                                                                                        : "hover:scale-[1.02] hover:bg-gray-100 focus:bg-gray-100",
                                                                                )}
                                                                            >
                                                                                <span className="text-sm font-medium">
                                                                                    {
                                                                                        currency.code
                                                                                    }{" "}
                                                                                    {currency.symbol &&
                                                                                        currency.symbol}
                                                                                </span>
                                                                                <span className="text-xs text-gray-500">
                                                                                    {
                                                                                        currency.name
                                                                                    }
                                                                                </span>
                                                                            </button>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="mb-3 flex items-center">
                                                                    <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                        More
                                                                        currencies
                                                                    </h3>
                                                                    <div className="ml-3 h-px flex-1 bg-gray-200"></div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-1.5">
                                                                    {data.moreCurrencies
                                                                        .slice(
                                                                            0,
                                                                            10,
                                                                        )
                                                                        .map(
                                                                            (
                                                                                currency,
                                                                            ) => (
                                                                                <button
                                                                                    key={
                                                                                        currency.code
                                                                                    }
                                                                                    className="flex h-auto flex-col items-start justify-start rounded-lg px-3 py-2.5 text-left transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100 focus:bg-gray-100"
                                                                                >
                                                                                    <span className="text-sm font-medium">
                                                                                        {
                                                                                            currency.code
                                                                                        }{" "}
                                                                                        {currency.symbol &&
                                                                                            currency.symbol}
                                                                                    </span>
                                                                                    <span className="text-xs text-gray-500">
                                                                                        {
                                                                                            currency.name
                                                                                        }
                                                                                    </span>
                                                                                </button>
                                                                            ),
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile: Sheet */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={() => setIsSheetOpen(true)}
                                className={cn(
                                    "flex h-9 items-center gap-1 rounded-full px-2.5 text-sm transition-all duration-200",
                                    "hover:scale-105",
                                    scrolled
                                        ? "text-gray-800 hover:bg-gray-100"
                                        : "text-white hover:bg-white/10",
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span>English / USD</span>
                                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                            </motion.button>

                            <AnimatePresence>
                                {isSheetOpen && (
                                    <>
                                        {/* Backdrop */}
                                        <motion.div
                                            className="fixed inset-0 z-50 bg-black/25"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={closeSheet}
                                        />

                                        {/* Sheet content */}
                                        <motion.div
                                            className="fixed bottom-0 right-0 top-0 z-50 flex w-full flex-col overscroll-contain border-l bg-white p-0 shadow-2xl sm:max-w-md"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={sheetVariants}
                                        >
                                            <div className="flex h-full flex-col">
                                                <div className="flex shrink-0 items-center justify-between border-b bg-gray-50/10 p-5">
                                                    <h2 className="text-lg font-semibold">
                                                        Languages & Currencies
                                                    </h2>
                                                    <button
                                                        onClick={closeSheet}
                                                        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100"
                                                    >
                                                        <X className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Close
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="flex max-h-full flex-1 flex-col">
                                                    <div className="shrink-0 border-b p-4">
                                                        <div className="grid w-full grid-cols-2 rounded-lg bg-gray-100/50 p-1">
                                                            <button
                                                                onClick={() =>
                                                                    setActiveTab(
                                                                        "languages",
                                                                    )
                                                                }
                                                                className={cn(
                                                                    "rounded-md py-1.5 text-sm font-medium transition-all duration-200",
                                                                    activeTab ===
                                                                        "languages"
                                                                        ? "bg-white text-gray-900 shadow-sm"
                                                                        : "text-gray-600 hover:text-gray-900",
                                                                )}
                                                            >
                                                                Languages
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    setActiveTab(
                                                                        "currencies",
                                                                    )
                                                                }
                                                                className={cn(
                                                                    "rounded-md py-1.5 text-sm font-medium transition-all duration-200",
                                                                    activeTab ===
                                                                        "currencies"
                                                                        ? "bg-white text-gray-900 shadow-sm"
                                                                        : "text-gray-600 hover:text-gray-900",
                                                                )}
                                                            >
                                                                Currencies
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="h-full flex-1 overflow-auto p-0">
                                                        <div className="h-full px-4 py-4">
                                                            {activeTab ===
                                                                "languages" && (
                                                                <div className="grid grid-cols-1 gap-2 pb-6 sm:grid-cols-2">
                                                                    {data.languages.map(
                                                                        (
                                                                            language,
                                                                        ) => (
                                                                            <button
                                                                                key={
                                                                                    language.code
                                                                                }
                                                                                className={cn(
                                                                                    "h-auto w-full justify-start rounded-lg px-3 py-2.5 text-left text-sm font-normal transition-all duration-200",
                                                                                    language.highlight
                                                                                        ? "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
                                                                                        : "hover:scale-[1.02] hover:bg-gray-100",
                                                                                )}
                                                                            >
                                                                                {
                                                                                    language.name
                                                                                }
                                                                            </button>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            )}

                                                            {activeTab ===
                                                                "currencies" && (
                                                                <div className="space-y-6 pb-6">
                                                                    {/* Popular Currencies */}
                                                                    <div>
                                                                        <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                            Popular
                                                                            currencies
                                                                        </h3>
                                                                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                                                            {data.popularCurrencies.map(
                                                                                (
                                                                                    currency,
                                                                                ) => (
                                                                                    <button
                                                                                        key={
                                                                                            currency.code
                                                                                        }
                                                                                        className={cn(
                                                                                            "flex h-auto flex-col items-start justify-start rounded-lg p-3 text-left transition-all duration-200",
                                                                                            currency.highlight
                                                                                                ? "bg-blue-500/10 text-blue-600 shadow-sm hover:bg-blue-500/20"
                                                                                                : "hover:scale-[1.02] hover:bg-gray-100",
                                                                                        )}
                                                                                    >
                                                                                        <span className="font-medium">
                                                                                            {
                                                                                                currency.code
                                                                                            }{" "}
                                                                                            {currency.symbol &&
                                                                                                currency.symbol}
                                                                                        </span>
                                                                                        <span className="text-xs text-gray-500">
                                                                                            {
                                                                                                currency.name
                                                                                            }
                                                                                        </span>
                                                                                    </button>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* More Currencies */}
                                                                    <div>
                                                                        <div className="mb-3 flex items-center">
                                                                            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                                More
                                                                                currencies
                                                                            </h3>
                                                                            <div className="ml-3 h-px flex-1 bg-gray-200"></div>
                                                                        </div>

                                                                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                                                            {data.moreCurrencies.map(
                                                                                (
                                                                                    currency,
                                                                                ) => (
                                                                                    <button
                                                                                        key={
                                                                                            currency.code
                                                                                        }
                                                                                        className="flex h-auto flex-col items-start justify-start rounded-lg p-3 text-left transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100"
                                                                                    >
                                                                                        <span className="font-medium">
                                                                                            {
                                                                                                currency.code
                                                                                            }{" "}
                                                                                            {currency.symbol &&
                                                                                                currency.symbol}
                                                                                        </span>
                                                                                        <span className="text-xs text-gray-500">
                                                                                            {
                                                                                                currency.name
                                                                                            }
                                                                                        </span>
                                                                                    </button>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            className={cn(
                                "flex h-9 items-center gap-1 rounded-full px-3 transition-all duration-200",
                                "hover:scale-105",
                                scrolled
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white hover:bg-white/10",
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link href="/help" className="flex items-center">
                                <HelpCircle className="mr-1 h-3.5 w-3.5" />
                                <span className="text-sm">Help</span>
                            </Link>
                        </motion.button>

                        <Link
                            href="/signin"
                            className={cn(
                                "hidden h-9 items-center justify-center rounded-full px-4 text-sm font-normal transition-all duration-300 sm:flex",
                                "hover:scale-105",
                                scrolled
                                    ? "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white"
                                    : "border border-white bg-transparent text-white hover:bg-white hover:text-black",
                            )}
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
