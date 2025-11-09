"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-purple-600/90 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')",
          }}
        />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,500"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl mb-4"
        >
          A Complete Business Solution for Everyone
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          Hallo! We are Solve Your
          <br />
          <span className="text-blue-300">Creative Business</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-primary transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


