import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { Users2, Target, BookOpen, HandshakeIcon, UserCheck, LineChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your HR Strategy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert HR consulting solutions to help your business thrive in today's competitive landscape
            </p>
            <a href="#request" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About XYZ Consulting</h2>
              <p className="text-gray-600 mb-4">
                We are dedicated to helping organizations build exceptional workplaces through strategic HR solutions. With years of experience and a passion for excellence, we deliver transformative results.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading catalyst for organizational success by creating innovative HR solutions that empower businesses and their people to reach their full potential.
                </p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Talent Acquisition"
              description="Strategic recruitment solutions to attract and retain top talent"
              Icon={Users2}
            />
            <ServiceCard
              title="HR Strategy"
              description="Comprehensive HR planning aligned with your business goals"
              Icon={Target}
            />
            <ServiceCard
              title="Training & Development"
              description="Custom learning programs to enhance workforce capabilities"
              Icon={BookOpen}
            />
            <ServiceCard
              title="Employee Relations"
              description="Build and maintain positive workplace relationships"
              Icon={HandshakeIcon}
            />
            <ServiceCard
              title="Performance Management"
              description="Effective systems to optimize employee performance"
              Icon={UserCheck}
            />
            <ServiceCard
              title="HR Analytics"
              description="Data-driven insights for better HR decision making"
              Icon={LineChart}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Get in touch with our team of HR experts. We're here to help you transform your workplace.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="font-semibold w-24">Address:</span>
                  123 Business Avenue, Suite 200, New York, NY 10001
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-semibold w-24">Email:</span>
                  contact@xyzconsulting.com
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-semibold w-24">Phone:</span>
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Office"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Service Section */}
      <section id="request" className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Request Our Services</h2>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Talent Acquisition</option>
                <option>HR Strategy</option>
                <option>Training & Development</option>
                <option>Employee Relations</option>
                <option>Performance Management</option>
                <option>HR Analytics</option>
              </select>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">XYZ Consulting</span>
              </div>
              <p className="text-gray-400">
                Transforming workplaces through innovative HR solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white">About Us</a>
                <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Business Avenue</p>
                <p>Suite 200</p>
                <p>New York, NY 10001</p>
                <p>contact@xyzconsulting.com</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} XYZ Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;