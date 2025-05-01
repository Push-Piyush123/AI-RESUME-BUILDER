import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold"></h2>
          
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 text-xl" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600">
                MIT Academy of Engineering<br />
                Alandi (D), Pune<br />
                Maharashtra 412105
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FaPhone className="text-blue-500 mt-1 mr-3 text-xl" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">+91 8830738884</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FaEnvelope className="text-blue-500 mt-1 mr-3 text-xl" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">piyushlende93@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaClock className="text-blue-500 mt-1 mr-3 text-xl" />
            <div>
              <h3 className="font-medium">Hours</h3>
              <p className="text-gray-600">Monday-Friday: 9AM-5PM</p>
            </div>
          </div>
        </div>

        {/* Map Section - MIT AOE Location */}
        <div className="h-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden">
          <iframe 
            title="MIT AOE Location"
            src="https://maps.google.com/maps?q=MIT+Academy+of+Engineering,+Alandi+(D),+Pune&z=15&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-700 text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;