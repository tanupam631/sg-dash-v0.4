import React, { useState } from 'react';
import { ArrowLeft, Languages, Plus, Sparkles } from 'lucide-react';

interface ShareBookLearningsScreenProps {
  onBack: () => void;
}

const ShareBookLearningsScreen: React.FC<ShareBookLearningsScreenProps> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState('post-formats');
  const [bookName, setBookName] = useState('Psychology of Money');
  const [keyLearnings, setKeyLearnings] = useState('Doing well with money has little to do with how smart you are and a lot to do with how you behave.');
  const [resonatingQuote, setResonatingQuote] = useState('"Wealth is What You Don\'t See"');

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share your learnings from a book</h1>
          <p className="text-gray-600">Share the learnings from a book and let AI create a post for you.</p>
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

        {/* Book Name Section */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What is the name of the book?
          </label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Psychology of Money"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Key Learnings Section */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What are few key learnings from that book that you want to share with your audience?
          </label>
          <textarea
            value={keyLearnings}
            onChange={(e) => setKeyLearnings(e.target.value)}
            placeholder="Doing well with money has little to do with how smart you are and a lot to do with how you behave."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Resonating Quote Section */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What quotes in the book resonated with you the most and why?
          </label>
          <input
            type="text"
            value={resonatingQuote}
            onChange={(e) => setResonatingQuote(e.target.value)}
            placeholder="\"Wealth is What You Don't See\""
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
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

export default ShareBookLearningsScreen;
  )
}
  )
}