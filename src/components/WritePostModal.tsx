import React, { useState } from 'react';
import { X, Edit3, Sparkles, LayoutGrid, Mic } from 'lucide-react';

interface WritePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOptionSelect: (option: 'manual' | 'repurpose' | 'carousel' | 'voice-notes') => void;
}

const WritePostModal: React.FC<WritePostModalProps> = ({ isOpen, onClose, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option as 'manual' | 'repurpose' | 'carousel' | 'voice-notes');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Write Post</h2>
          <p className="text-gray-600 mb-1">
            Record your Thoughts and Generate a Post
          </p>
          <p className="text-gray-500 text-sm">
            Share your ideas and let them shine in a post.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Write Manually Option */}
          <button
            onClick={() => handleOptionClick('manual')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'manual'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Edit3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Write Manually</h3>
              <p className="text-gray-600 text-sm">
                Compose your post by hand for a personal touch.
              </p>
            </div>
          </button>

          {/* Record Thoughts Option */}
          <button
            onClick={() => handleOptionClick('voice-notes')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'voice-notes'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Record your Thoughts and Generate a Post</h3>
              <p className="text-gray-600 text-sm">
                Speak your ideas and let them shine in a post.
              </p>
            </div>
          </button>

          {/* Repurpose Content Option */}
          <button
            onClick={() => handleOptionClick('repurpose')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'repurpose'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Repurpose from YouTube, Blog, PDF</h3>
              <p className="text-gray-600 text-sm">
                Transform existing content into new formats.
              </p>
            </div>
          </button>

          {/* Create Carousel Option */}
          <button
            onClick={() => handleOptionClick('carousel')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'carousel'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <LayoutGrid className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Create Carousel</h3>
              <p className="text-gray-600 text-sm">
                Build a captivating multi-slide post to engage audience.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePostModal;