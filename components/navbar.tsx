"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchText, setSearchText] = useState("Dubai");
  const cityNames = ["Dubai", "New York", "Paris", "Tokyo", "London", "Rome", "Barcelona", "Singapore"];
  const searchInputRef = useRef<HTMLInputElement>(null);

  const languages = [
    { name: "English", code: "en", highlight: true },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
    { name: "Italiano", code: "it" },
    { name: "Deutsch", code: "de" },
    { name: "Português", code: "pt" },
    { name: "Nederlands", code: "nl" },
  ];

  const popularCurrencies = [
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "USD", symbol: "$", name: "United States Dollar", highlight: true },
    { code: "AED", symbol: "", name: "United Arab Emirates Dirham" },
    { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "GBP", symbol: "£", name: "British Pound" },
  ];

  const moreCurrencies = [
    { code: "ALL", symbol: "", name: "Albanian Lek" },
    { code: "AUD", symbol: "AU$", name: "Australian Dollar" },
    { code: "AZN", symbol: "₼", name: "Azerbaijan New Manat" },
    { code: "BHD", symbol: "", name: "Bahrain Dinar" },
    { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
    { code: "CHF", symbol: "", name: "Swiss Franc" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan Renminbi" },
    { code: "DKK", symbol: "", name: "Danish Krone" },
    { code: "EGP", symbol: "E£", name: "Egyptian Pound" },
    { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
    { code: "HUF", symbol: "Ft", name: "Hungary Forint" },
    { code: "IDR", symbol: "Rp", name: "Indonesia Rupiah" },
    { code: "ILS", symbol: "₪", name: "Israeli New Shekel" },
    { code: "ISK", symbol: "kr", name: "Icelandic Krona" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "KRW", symbol: "₩", name: "South Korean Won" },       
    { code: "LBP", symbol: "", name: "Lebanese Pound" },
    { code: "MAD", symbol: "", name: "Morocco Dirham" },
    { code: "MOP", symbol: "澳", name: "Macanese Pataca" },
    { code: "MXN", symbol: "", name: "Mexican Peso" },
    { code: "MYR", symbol: "", name: "Malaysian Ringgit" },
    { code: "NOK", symbol: "", name: "Norwegian Krone" },
    { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
    { code: "PLN", symbol: "zł", name: "Polish Zloty" },
    { code: "QAR", symbol: "ر.ق", name: "Qatari Riyal" },
    { code: "SAR", symbol: "", name: "Saudi Arabian Riyal" },
    { code: "SEK", symbol: "", name: "Swedish Krona" },
    { code: "THB", symbol: "฿", name: "Thai Baht" },
    { code: "TRY", symbol: "₺", name: "Turkey Lira" },
    { code: "TWD", symbol: "NT$", name: "Taiwan New Dollar" },
    { code: "VND", symbol: "₫", name: "Viet Nam Dong" },
    { code: "ZAR", symbol: "", name: "South African Rand" },
  ];  

  // Handle scroll event to show search bar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate search text with different city names
  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
      setSearchText(randomCity);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle search focus
  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.select();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className={`flex items-center ${scrolled ? 'text-purple-600' : 'text-white'}`}>
          <Image
            src="/Headout_logo_purps.svg"
            alt="Headout"
            width={120}
            height={40}
            className="h-8"
          />
        </Link>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`Search for ${searchText}`}
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-[350px] transition-all"
              onFocus={handleSearchFocus}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button
                className={`hover:underline flex items-center text-sm ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                English / USD
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              <div className="flex">
                {/* Languages Section */}
                <div className="w-[180px] p-5 border-r">
                  <h3 className="mb-3 text-lg font-medium">Languages</h3>
                  <div className="space-y-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                          language.highlight ? "bg-purple-50 text-purple-600" : "hover:bg-gray-100"
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Currencies Section */}
                <div className="flex-1">
                  <ScrollArea className="h-[450px]">
                    <div className="p-5">
                      {/* Popular Currencies */}
                      <h3 className="mb-3 text-lg font-medium">Popular currencies</h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {popularCurrencies.map((currency) => (
                          <button
                            key={currency.code}
                            className={`text-left p-2 rounded-md text-sm ${
                              currency.highlight ? "bg-purple-50 text-purple-600" : "hover:bg-gray-100"
                            }`}
                          >
                            <div className="font-medium">
                              {currency.code} {currency.symbol && currency.symbol}
                            </div>
                            <div className="text-gray-500">{currency.name}</div>
                          </button>
                        ))}
                      </div>

                      {/* More Currencies */}
                      <div className="flex items-center mb-3">
                        <h3 className="text-lg font-medium">More currencies</h3>
                        <Separator className="flex-1 ml-3" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {moreCurrencies.map((currency) => (
                          <button key={currency.code} className="text-left p-2 rounded-md text-sm hover:bg-gray-100">
                            <div className="font-medium">
                              {currency.code} {currency.symbol && currency.symbol}
                            </div>
                            <div className="text-gray-500">{currency.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link
            href="/help"
            className={`hover:underline flex items-center text-sm ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            <span>Help</span>
          </Link>
          
          <Button
            asChild
            variant="outline"
            className={`${scrolled ? 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white' : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'}`}
          >
            <Link href="/signin">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
