import React, { useState } from 'react';
import { ArrowLeft, Languages, Plus, Sparkles, Upload } from 'lucide-react';

interface GeneratePostFromPDFScreenProps {
  onBack: () => void;
}

const GeneratePostFromPDFScreen: React.FC<GeneratePostFromPDFScreenProps> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState('post-formats');
  const [instructions, setInstructions] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log('File dropped:', e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file selection logic here
      console.log('File selected:', e.target.files[0]);
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate a post from a PDF</h1>
          <p className="text-gray-600">Upload a PDF and generate a post from it</p>
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

        {/* Upload PDF Section */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Upload PDF
          </label>
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ${
              dragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-600 mb-2">Choose a file or drag & drop it here.</p>
                <label className="inline-block">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                    Browse File
                  </span>
                </label>
              </div>
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

        {/* Add Your Instructions Section */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Add your instructions
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Focus on the specific part of the PDF"
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
          />
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

export default GeneratePostFromPDFScreen;