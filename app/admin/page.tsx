"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2, Activity, Send, Mail } from "lucide-react";

export default function BackendAdmin() {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [healthLoading, setHealthLoading] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [appointmentResult, setAppointmentResult] = useState<any>(null);
  const [appointmentLoading, setAppointmentLoading] = useState(false);

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeResult, setSubscribeResult] = useState<any>(null);
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  // Health Check
  const checkHealth = async () => {
    setHealthLoading(true);
    setHealthStatus(null);
    try {
      const response = await fetch("/api/health");
      const data = await response.json();
      setHealthStatus({ success: true, data });
    } catch (error: any) {
      setHealthStatus({ success: false, error: error.message });
    } finally {
      setHealthLoading(false);
    }
  };

  // Test Appointment
  const testAppointment = async () => {
    setAppointmentLoading(true);
    setAppointmentResult(null);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });
      const data = await response.json();
      setAppointmentResult({
        success: response.ok,
        status: response.status,
        data,
      });
    } catch (error: any) {
      setAppointmentResult({
        success: false,
        error: error.message,
      });
    } finally {
      setAppointmentLoading(false);
    }
  };

  // Test Subscribe
  const testSubscribe = async () => {
    setSubscribeLoading(true);
    setSubscribeResult(null);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribeEmail }),
      });
      const data = await response.json();
      setSubscribeResult({
        success: response.ok,
        status: response.status,
        data,
      });
    } catch (error: any) {
      setSubscribeResult({
        success: false,
        error: error.message,
      });
    } finally {
      setSubscribeLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Backend API Admin Panel
          </h1>
          <p className="text-gray-600">
            Test and monitor all backend API endpoints
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Health Check Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-gray-900">Health Check</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Check server status and API information
            </p>
            <button
              onClick={checkHealth}
              disabled={healthLoading}
              className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {healthLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4" />
                  Check Health
                </>
              )}
            </button>
            {healthStatus && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                {healthStatus.success ? (
                  <div>
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Healthy</span>
                    </div>
                    <pre className="text-xs overflow-auto max-h-64">
                      {JSON.stringify(healthStatus.data, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-5 h-5" />
                    <span>Error: {healthStatus.error}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Appointment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Send className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-gray-900">Appointment</h2>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={appointmentData.name}
                onChange={(e) =>
                  setAppointmentData({ ...appointmentData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={appointmentData.email}
                onChange={(e) =>
                  setAppointmentData({ ...appointmentData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <textarea
                placeholder="Message"
                value={appointmentData.message}
                onChange={(e) =>
                  setAppointmentData({ ...appointmentData, message: e.target.value })
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
              />
              <button
                onClick={testAppointment}
                disabled={appointmentLoading}
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {appointmentLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Test Appointment
                  </>
                )}
              </button>
            </div>
            {appointmentResult && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                {appointmentResult.success ? (
                  <div>
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Success ({appointmentResult.status})</span>
                    </div>
                    <pre className="text-xs overflow-auto max-h-48">
                      {JSON.stringify(appointmentResult.data, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                      <XCircle className="w-5 h-5" />
                      <span className="font-semibold">Error ({appointmentResult.status})</span>
                    </div>
                    <pre className="text-xs overflow-auto max-h-48">
                      {JSON.stringify(appointmentResult.data || appointmentResult.error, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Subscribe Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-gray-900">Subscribe</h2>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                onClick={testSubscribe}
                disabled={subscribeLoading}
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {subscribeLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Test Subscribe
                  </>
                )}
              </button>
            </div>
            {subscribeResult && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                {subscribeResult.success ? (
                  <div>
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Success ({subscribeResult.status})</span>
                    </div>
                    <pre className="text-xs overflow-auto max-h-48">
                      {JSON.stringify(subscribeResult.data, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                      <XCircle className="w-5 h-5" />
                      <span className="font-semibold">Error ({subscribeResult.status})</span>
                    </div>
                    <pre className="text-xs overflow-auto max-h-48">
                      {JSON.stringify(subscribeResult.data || subscribeResult.error, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* API Endpoints Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">API Endpoints</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Health Check</h3>
              <p className="text-sm text-gray-600 mb-2">GET /api/health</p>
              <a
                href="/api/health"
                target="_blank"
                className="text-primary hover:underline text-sm"
              >
                Open in new tab →
              </a>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Appointment</h3>
              <p className="text-sm text-gray-600 mb-2">GET/POST /api/appointment</p>
              <a
                href="/api/appointment"
                target="_blank"
                className="text-primary hover:underline text-sm"
              >
                Open in new tab →
              </a>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Subscribe</h3>
              <p className="text-sm text-gray-600 mb-2">GET/POST /api/subscribe</p>
              <a
                href="/api/subscribe"
                target="_blank"
                className="text-primary hover:underline text-sm"
              >
                Open in new tab →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <a
            href="/"
            className="text-primary hover:underline"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}


