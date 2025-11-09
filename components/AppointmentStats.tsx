"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AppointmentStats() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: "success", text: data.message || "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage({ type: "error", text: data.error || "Error sending message. Please try again." });
      }
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { number: "650+", label: "Project Working" },
    { number: "540+", label: "Project Finished" },
    { number: "120+", label: "Award Winning" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-primary font-semibold mb-2">Get in Touch</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Make an Appointment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              {submitMessage && (
                <div
                  className={`p-4 rounded-lg mb-4 ${
                    submitMessage.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className="w-full bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-purple-600 p-8 rounded-lg text-white relative overflow-hidden"
          >
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

            <div className="relative z-10">
              <p className="text-blue-200 mb-2">Global Business Solution</p>
              <h2 className="text-4xl font-bold mb-12">
                We Build 350+ Global Startup Business
              </h2>

              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

