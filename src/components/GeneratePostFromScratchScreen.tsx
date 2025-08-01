import React, { useState } from 'react';
import { ArrowLeft, Languages, Plus, Sparkles } from 'lucide-react';

interface GeneratePostFromScratchScreenProps {
  onBack: () => void;
}

const GeneratePostFromScratchScreen: React.FC<GeneratePostFromScratchScreenProps> = ({ onBack }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('post-formats');

  const toneOptions = [
    'Professional',
    'Casual',
    'Friendly',
    'Authoritative',
    'Inspirational',
    'Humorous',
    'Educational',
    'Conversational'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Back Button */}
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 mr-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate Post from Scratch</h1>
          <p className="text-gray-600">Use the power of AI-generated content to create impactful LinkedIn posts.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Language Selector */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">
              <Languages className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>

        {/* Post Content Input */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What do you want to post about?
          </label>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Describe what you want to write..."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Tone of Voice Selector */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Select your Tone of Voice
          </label>
          <div className="relative">
            <select
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700"
            >
              <option value="">Select an option</option>
              {toneOptions.map((tone) => (
                <option key={tone} value={tone.toLowerCase()}>
                  {tone}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Post Format or Content Style */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-6">
            Select Post format or Content style
          </label>
          
          <div className="space-y-6">
            {/* Post Formats Option */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <input
                  type="radio"
                  id="post-formats"
                  name="content-type"
                  value="post-formats"
                  checked={selectedFormat === 'post-formats'}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <label htmlFor="post-formats" className="block font-semibold text-gray-900 mb-2 cursor-pointer">
                    Post Formats
                  </label>
                  <p className="text-gray-600 mb-4">
                    Generate your content in different formats that to get you more reach.
                  </p>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <Plus className="w-4 h-4" />
                    <span>Select a post format</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Style Option */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <input
                  type="radio"
                  id="content-style"
                  name="content-type"
                  value="content-style"
                  checked={selectedFormat === 'content-style'}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <label htmlFor="content-style" className="block font-semibold text-gray-900 cursor-pointer">
                      Content Style
                    </label>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                      Beta
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Generate your content that can mimic your writing style and personalized tone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-start">
          <button className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Generate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratePostFromScratchScreen;