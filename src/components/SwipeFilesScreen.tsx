import React from 'react';
import { Plus, Download } from 'lucide-react';

const SwipeFilesScreen: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Swipe Files</h1>
        <p className="text-gray-600">
          Organize your creative process and build a gallery of inspiration and good ideas with a social media swipe file.
        </p>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        {/* Illustration */}
        <div className="mb-8">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Swipe Files Illustration"
            className="w-80 h-64 object-cover rounded-lg mx-auto"
          />
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Start building your swipe file!
          </h2>
          <p className="text-gray-600 text-lg">
            Add your first swipe file to get started.
          </p>
        </div>

        {/* New Swipe File Button */}
        <div className="mb-8">
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            <Plus className="w-5 h-5" />
            <span>New Swipe File</span>
          </button>
        </div>

        {/* OR Divider */}
        <div className="mb-8">
          <span className="text-gray-400 text-sm font-medium">OR</span>
        </div>

        {/* Chrome Extension Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-4 text-lg">
            Download the Chrome Extension to swipe any website with one click.
          </p>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium mx-auto">
            <Download className="w-5 h-5" />
            <span>Download Extension</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeFilesScreen;