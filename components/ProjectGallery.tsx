"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80",
    title: "Digital Startup Agency",
    category: "Branding",
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    title: "Business Growth Check",
    category: "Design",
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
    title: "Digital Business Path",
    category: "Development",
  },
  {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    title: "Business Growth Model",
    category: "Marketing",
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    title: "Strategy Growth Check",
    category: "Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    title: "Marketing Solution",
    category: "Marketing",
  },
];

export default function ProjectGallery() {
  return (
    <section id="pages" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Our Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Recent Project Gallery
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white text-center"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </motion.div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


