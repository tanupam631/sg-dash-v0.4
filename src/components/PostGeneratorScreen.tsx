import React from 'react';
import { Edit3, Mic, FileText, Youtube, Link, Sparkles } from 'lucide-react';

const PostGeneratorScreen: React.FC = () => {
  const templates = [
    {
      title: "Share your learnings from a book",
      description: "Share the learnings from a book and let AI create a post for you.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      title: "Share tips on your topic of interest",
      description: "Share the tips on your topic of interest and let AI create a post for you.",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Share your recent learning",
      description: "Share the details of your recent learning and let AI create a post for you.",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    },
    {
      title: "Share your favourite tool",
      description: "Share the details of your favourite tool and let AI create a post for you.",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      title: "Share your recent struggle",
      description: "Share the details of your recent struggle and let AI create a post for you.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate posts with AI</h1>
        <p className="text-gray-600">
          Select a template to generate high-quality posts with AI
        </p>
      </div>

      {/* Generate Posts Section */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Generate Post from Scratch */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Edit3 className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Post from Scratch</h3>
                <p className="text-gray-600">
                  Use the power of AI-generated content to create impactful LinkedIn posts.
                </p>
              </div>
            </div>
          </div>

          {/* Generate post from audio */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate post from audio</h3>
                <p className="text-gray-600">
                  Record your thoughts and generate post from it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repurpose Content Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Repurpose Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Generate a post from a PDF */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate a post from a PDF</h3>
                <p className="text-gray-600">
                  Upload a PDF and generate a post from it
                </p>
              </div>
            </div>
          </div>

          {/* Generate a post from a Youtube video */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Youtube className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate a post from a Youtube video</h3>
                <p className="text-gray-600">
                  Share a Youtube video link and generate a post from it
                </p>
              </div>
            </div>
          </div>

          {/* Generate a post from an article */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Link className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate a post from an article</h3>
                <p className="text-gray-600">
                  Share a link to a blog post and generate a post from it
                </p>
              </div>
            </div>
          </div>

          {/* Format your content */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Format your content</h3>
                <p className="text-gray-600">
                  Use the power of AI to format your clunky content into readable posts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Templates Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recommended Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className={`${template.bgColor} rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-100`}
            >
              <h3 className={`text-lg font-semibold ${template.textColor} mb-3`}>
                {template.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {template.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostGeneratorScreen;