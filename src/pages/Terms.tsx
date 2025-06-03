
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, FileText, Users, Lock } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">Please read these terms carefully before using our services</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 mb-4">
                By accessing and using VelozTech's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-700">
                These Terms of Service govern your use of our website and services. If you disagree with any part of these terms, then you may not access our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">2. Use License</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access VelozTech's services for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Service Terms</h2>
              </div>
              <p className="text-gray-700 mb-4">
                VelozTech provides technology solutions and services. We reserve the right to modify or discontinue any service without notice.
              </p>
              <p className="text-gray-700">
                All services are provided "as is" and VelozTech makes no representations or warranties of any kind, express or implied.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">4. Privacy and Data</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
              </p>
              <p className="text-gray-700">
                We collect and use information in accordance with our Privacy Policy to provide and improve our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms & Conditions, please contact us at:
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

export default Terms;
