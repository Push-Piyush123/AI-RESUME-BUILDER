import React from "react";
import { FaRobot, FaEdit, FaFileDownload } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Service</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FaRobot className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold">Smart Resume Generation</h2>
          <p className="text-gray-600 mt-2">Let AI do the heavy lifting</p>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Simply write about yourself in your own words. Our AI will analyze your text and:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <FaRobot className="text-blue-600 text-sm" />
              </div>
              <span>Automatically fill in your <strong>name, contact details</strong>, and <strong>sections</strong></span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <FaRobot className="text-blue-600 text-sm" />
              </div>
              <span>Identify and organize your <strong>skills</strong> and <strong>projects</strong></span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <FaEdit className="text-blue-600 text-sm" />
              </div>
              <span>Let you <strong>edit</strong> and refine every detail</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <FaFileDownload className="text-blue-600 text-sm" />
              </div>
              <span><strong>Save</strong> or <strong>print</strong> your professional resume</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">How to use:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Describe your background in simple words</li>
              <li>Let AI analyze and structure your information</li>
              <li>Review and edit the generated resume</li>
              <li>Download or print the final version</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600">
        <p> No subscriptions. Just smart resume generation.</p>
      </div>
    </div>
  );
};

export default Services;