import React, { useState } from 'react';
import { X, Save, Send, Calendar, Globe, Users, Lock, Bold, Italic, Smile, Hash, BarChart3, Eye, Smartphone, Monitor, Tablet, MessageSquare, Heart, Share, MoreHorizontal, Plus } from 'lucide-react';

interface PostComposerProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'manual' | 'repurpose' | 'carousel' | 'voice-notes';
}

const PostComposer: React.FC<PostComposerProps> = ({ isOpen, onClose, mode }) => {
  const [postContent, setPostContent] = useState('');

  if (!isOpen) return null;

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Write Post</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Draft</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg">
            <BarChart3 className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Check Score</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-600" />
          </div>
          
          <div className="border-l border-gray-300 pl-4">
            <span className="text-sm font-medium text-gray-900">Post Preview</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Smartphone className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Tablet className="w-4 h-4" />
            </button>
            <button className="p-1 text-blue-600">
              <Monitor className="w-4 h-4" />
            </button>
          </div>
          
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Feedback
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Editor */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center space-x-4 px-6 py-3 border-b border-gray-200">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Bold className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Italic className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Smile className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Hash className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Globe className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Calendar className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* AI Rewrite Tooltip */}
          <div className="relative px-6 py-4">
            <div className="absolute top-4 left-6 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm flex items-center space-x-2 z-10">
              <X className="w-4 h-4" />
              <span className="font-medium">Rewrite with AI</span>
            </div>
            <div className="bg-gray-900 text-white px-3 py-1 rounded text-xs mt-8 inline-block">
              Try our powerful AI to improve and rewrite your content.
            </div>
          </div>
          
          {/* Editor Area */}
          <div className="flex-1 px-6">
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Add your content..."
              className="w-full h-full resize-none border-none outline-none text-lg leading-relaxed"
            />
          </div>
          
          {/* Bottom Info */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>Last saved at Aug 1, 2025, 4:15 AM</span>
                <span>{postContent.length} characters</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Tags:</span>
                <button className="text-blue-600 hover:text-blue-700">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                Save as Draft
              </button>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                + Create Public Link
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                Publish ▼
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-96 border-l border-gray-200 bg-gray-50">
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              {/* LinkedIn Post Preview Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">N</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Now</div>
                  <div className="text-sm text-gray-500">• 1st</div>
                </div>
              </div>
              
              {/* Post Content Preview */}
              <div className="mb-4">
                {postContent ? (
                  <p className="text-gray-900 whitespace-pre-wrap">{postContent}</p>
                ) : (
                  <p className="text-gray-400 italic">Your post content will appear here...</p>
                )}
              </div>
              
              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">👍</span>
                    </div>
                    <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">❤️</span>
                    </div>
                  </div>
                  <span>88</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>4 comments</span>
                  <span>1 repost</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded transition-colors duration-200">
                  <Heart className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Like</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded transition-colors duration-200">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Comment</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded transition-colors duration-200">
                  <Share className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Share</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded transition-colors duration-200">
                  <Send className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;