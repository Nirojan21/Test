"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Alan Doson",
    role: "UI Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Stive Shkollo",
    role: "Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Archer Graham",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Amelia Clover",
    role: "Finance Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Beckett Hayden",
    role: "Deputy Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Julian Wyat",
    role: "Business Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

export default function ExpertTeam() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Our Expert Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Expert Members
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                {socialIcons.map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ scale: 1.2, color: "#1e40af" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


