"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscribeMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeMessage({ type: "success", text: data.message || "Subscribed successfully!" });
        setEmail("");
      } else {
        setSubscribeMessage({ type: "error", text: data.error || "Error subscribing. Please try again." });
      }
    } catch (error) {
      setSubscribeMessage({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Branding Design",
    "Website Development",
    "App Design",
    "Digital Marketing",
    "Market Research",
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">axela</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Office Info</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <a href="tel:+256-2165-2166" className="hover:text-white transition-colors">
                  (256) 2165 2166
                </a>
              </p>
              <p className="leading-relaxed">
                255 Project Dakota Road
                <br />
                California Newyork
              </p>
            </div>
          </motion.div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Subscribe</h3>
            <p className="text-gray-300 mb-4">Don't worry we don't spam</p>
            {subscribeMessage && (
              <div
                className={`p-3 rounded-lg mb-4 text-sm ${
                  subscribeMessage.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {subscribeMessage.text}
              </div>
            )}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Our Services</a>
            </div>
            <p>Copyright @2021 Axela. By RaxaThemes</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

