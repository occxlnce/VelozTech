
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Build the future of technology with VelozTech</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Why VelozTech?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                At VelozTech, we're passionate about creating intelligent solutions that make a difference. Join a team where innovation meets purpose.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-700">Work on cutting-edge projects using the latest technologies.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">Continuous learning and career development programs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                  <p className="text-gray-700">Work with talented professionals in a supportive environment.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-700">Flexible working arrangements and comprehensive benefits.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Current Openings</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">Software Developer</h3>
                  <p className="text-gray-600">Full-time • Pretoria, RSA</p>
                  <p className="text-gray-700 mt-2">Join our development team to build innovative software solutions using modern technologies.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">UI/UX Designer</h3>
                  <p className="text-gray-600">Full-time • Pretoria, RSA</p>
                  <p className="text-gray-700 mt-2">Create beautiful and intuitive user experiences for our clients' digital products.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">Project Manager</h3>
                  <p className="text-gray-600">Full-time • Pretoria, RSA</p>
                  <p className="text-gray-700 mt-2">Lead cross-functional teams to deliver successful technology projects on time and within budget.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Application Process</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Submit Application</h3>
                    <p className="text-gray-700">Send your CV and cover letter to our HR team.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Initial Review</h3>
                    <p className="text-gray-700">We'll review your application and get back to you within a week.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interview Process</h3>
                    <p className="text-gray-700">Technical and cultural fit interviews with our team.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Welcome Aboard</h3>
                    <p className="text-gray-700">Join the VelozTech family and start making an impact.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Join Us?</h2>
              <p className="text-gray-700 mb-6">
                Don't see the perfect role? We're always looking for talented individuals to join our team.
              </p>
              <p className="text-gray-700">
                Send your CV and a brief introduction to: <span className="text-orange-500 font-medium">careers@velotech.co.za</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
