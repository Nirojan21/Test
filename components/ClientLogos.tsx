"use client";

import { motion } from "framer-motion";

const clients = ["Darleo", "Clarity", "Adden", "Pichart", "Marcus"];

export default function ClientLogos() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors">
                {client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


