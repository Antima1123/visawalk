"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="w-full text-center">
        <p className="font-[600] text-xl md:text-3xl dark:text-white text-[#009B8D]">
          Remote{" "}
          <span className="text-[#009B8D]">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-black font-[600] max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 45.4215, lng: -75.6972 }, // Canada (Ottawa)
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -33.8688, lng: 151.2093 }, // Australia (Sydney)
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 37.7749, lng: -122.4194 }, // USA (San Francisco)
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -40.9006, lng: 174.886 }, // New Zealand (Wellington)
          },
          {
            start: { lat: 45.4215, lng: -75.6972 }, // canada
            end: { lat: 28.6139, lng: 77.209 }, // new delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 50.8503, lng: 4.3517 }, // Europe (Brussels, Belgium)
          },
        ]}
      />
    </div>
  );
}
