"use client";

import { motion } from "framer-motion";
import { Megaphone, BarChart3, Lightbulb, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Online Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: BarChart3,
    title: "Business Solution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Lightbulb,
    title: "Creative Layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Service We Provide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 border-2 border-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href="#"
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


