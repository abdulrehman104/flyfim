"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative h-[650px] w-full">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content container */}
      <div className="container mx-auto relative h-full flex flex-col items-start pt-32 px-12">
        <div className="max-w-3xl mt-64">
          <h1 className="md:text-5xl font-bold text-white mb-8 leading-tight">
            The world&apos;s best experiences curated just for you
          </h1>

          {/* Search bar */}
          <div className="w-full max-w-lg relative">
            <Input
              type="text"
              placeholder="Search for experiences and cities"
              className="pl-4 pr-10 py-6 h-14 text-lg rounded-md w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
