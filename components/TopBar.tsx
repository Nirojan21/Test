"use client";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white py-2 px-4 text-sm"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span>We are providing your creative business solutions. Contact Us +</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:info@example.com" className="hover:text-blue-200 transition-colors">
            info@example.com
          </a>
          <a href="tel:+210-3860-8880" className="hover:text-blue-200 transition-colors">
            +210-3860-8880
          </a>
        </div>
      </div>
    </motion.div>
  );
}


