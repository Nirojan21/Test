"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have any project in your Mind?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Mail us any time:</p>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-900 font-semibold hover:text-primary transition-colors"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call us 24/7:</p>
                  <a
                    href="tel:+263-2165-2166"
                    className="text-gray-900 font-semibold hover:text-primary transition-colors"
                  >
                    +263-2165-2166
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


