"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    date: "20 Oct, 2022",
    title: "How to improve your business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    date: "18 Oct, 2022",
    title: "Best practices for digital marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    date: "15 Oct, 2022",
    title: "Growing your startup business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    date: "12 Oct, 2022",
    title: "Web development trends 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function BlogNews() {
  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Our Daily News Posts</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Blog & News
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                <a
                  href="#"
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


