import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateNewListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateNewListModal: React.FC<CreateNewListModalProps> = ({ isOpen, onClose }) => {
  const [listTitle, setListTitle] = useState('My new list');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">Create new List</h2>

        {/* Icon Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Icon</label>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">😊</span>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              Select Icon
            </button>
          </div>
        </div>

        {/* List Title Section */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">List title</label>
          <input
            type="text"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter list title"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Discard
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Create List
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListModal;