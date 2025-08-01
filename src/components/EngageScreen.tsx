import React, { useState } from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import CreateNewListModal from './CreateNewListModal';

const EngageScreen: React.FC = () => {
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  const handleCreateNewListClick = () => {
    setShowCreateListModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateListModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Engage & Grow</h1>
          <p className="text-gray-600">
            Be the first to engage with your favourite LinkedIn profiles and company pages' posts
          </p>
        </div>
        <button
          onClick={handleCreateNewListClick}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          <Plus className="w-5 h-5" />
          <span>Create New List</span>
        </button>
      </div>

      {/* Discover Your Top Commenters Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-semibold">B</span>
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-semibold">C</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">Discover Your Top Commenters</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  NEW
                </span>
              </div>
              <p className="text-gray-600">
                Head over to Analytics to see who engages with you the most and create a custom engage list.
              </p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
            <span>View Top Commenters</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* My new list Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 w-80">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">😊</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">My new list</h3>
            <p className="text-gray-500">0 contacts</p>
          </div>
        </div>
      </div>

      {/* Create New List Modal */}
      <CreateNewListModal 
        isOpen={showCreateListModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EngageScreen;