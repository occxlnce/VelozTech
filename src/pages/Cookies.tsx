
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600">Learn about how we use cookies to improve your experience</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Cookie className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">1. What Are Cookies</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              </p>
              <p className="text-gray-700">
                They allow us to recognize your device and store some information about your preferences or past actions to improve your browsing experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">2. Types of Cookies We Use</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                  <p className="text-gray-700">Required for basic website functionality and cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Performance Cookies</h3>
                  <p className="text-gray-700">Help us understand how visitors interact with our website by collecting anonymous information.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="text-gray-700">Enable enhanced functionality and personalization, such as remembering your preferences.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <BarChart className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Cookies</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Improve website performance and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">4. Managing Cookies</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Cookie consent banner: Use our cookie preferences center when available</li>
                <li>Opt-out tools: Use third-party opt-out tools for advertising cookies</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Please note that disabling certain cookies may affect your browsing experience and limit some website functionality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Cookies</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-orange-500 font-medium mt-2">info@velotech.co.za</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
