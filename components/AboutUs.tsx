"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const features = [
    "24/7 Call Services Available",
    "Great Skilled Consultant",
    "Expert Team Members",
    "How to improve business",
    "Business is the best plan",
    "Services we provide",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Business professionals"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Conference room"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden col-span-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                alt="Customer support"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold mb-2">More About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Can Bring Your Business to #1
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CEO Info & Contact */}
            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-16 h-16 rounded-full overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                  alt="Andrew David"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-gray-900">Andrew David</p>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
              <motion.a
                href="tel:+256-21650-2166"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-auto bg-primary text-white p-4 rounded-full hover:bg-primary-dark transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.a>
              <span className="text-gray-700 font-semibold">+256-21650-2166</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


