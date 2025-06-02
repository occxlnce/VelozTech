
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Eye, Database, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Your privacy matters to us. Learn how we protect your data.</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Professional information (company name, job title)</li>
                <li>Communication preferences</li>
                <li>Technical information (IP address, browser type, device information)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and deliver our services</li>
                <li>Respond to your comments and questions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Information Sharing</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
              <p className="text-gray-700">
                We may share your information with trusted service providers who assist us in operating our website and conducting our business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">4. Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
