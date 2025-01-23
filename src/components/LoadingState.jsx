import React from 'react';

export const LoadingState = () => {
  return (
    <div className="mt-8 p-8 bg-gray-800/50 rounded-lg flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-gray-400">Generating your video... This may take a few minutes</p>
      <div className="mt-4 w-full max-w-xs bg-gray-700 rounded-full h-1.5">
        <div className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-1/3 animate-pulse" />
      </div>
    </div>
  );
};