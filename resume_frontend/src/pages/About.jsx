import React from "react";
import { FaRobot, FaUserTie, FaFilePdf, FaCode, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">About AI Resume Generator</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Project</h2>
          <p className="flex items-start">
            The AI Resume Generator is an innovative platform that helps job seekers create professional, 
            ATS-friendly resumes with artificial intelligence. Our system analyzes your skills and experience 
            to generate optimized resume content tailored to your target job roles.
          </p>
          <p className="flex items-start">
            Developed as a academic project, this tool combines modern web technologies with AI capabilities 
            to simplify the resume creation process.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaRobot className="text-blue-500 mt-1 mr-3 text-xl" />
              <span>AI-powered content suggestions</span>
            </li>
            <li className="flex items-start">
              <FaUserTie className="text-green-500 mt-1 mr-3 text-xl" />
              <span>Professional template designs</span>
            </li>
            <li className="flex items-start">
              <FaFilePdf className="text-purple-500 mt-1 mr-3 text-xl" />
              <span>Instant PDF download</span>
            </li>
            <li className="flex items-start">
              <FaCode className="text-yellow-500 mt-1 mr-3 text-xl" />
              <span>Real-time editing interface</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Project Vision</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          "To democratize access to professional resume building tools using AI, helping candidates 
          showcase their skills effectively and land their dream jobs."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaCode className="text-4xl mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-600">
            Built with React.js, Tailwind CSS, and Vite for a fast, responsive interface
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaDatabase className="text-4xl mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <p className="text-gray-600">
            Node.js/Express for processing
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaRobot className="text-4xl mx-auto mb-4 text-purple-500" />
          <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
          <p className="text-gray-600">
            Ollama"s Deepseek-R1 for intelligent resume suggestions and optimizations
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Developed By</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-medium">Fighters Team</p>
            <p className="text-gray-600">MIT Academy of Engineering</p>
            <p className="text-sm text-blue-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;