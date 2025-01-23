import React from 'react';
import { VideoGenerator } from './components/VideoGenerator';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            AI Video Generator
          </h1>
          <p className="text-gray-400">Transform your ideas into stunning videos with AI</p>
        </header>
        <VideoGenerator />
      </div>
    </div>
  );
};