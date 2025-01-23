import React from 'react';

export const VideoPreview = ({ url }) => {
  return (
    <div className="mt-8 space-y-4">
      <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-video">
        <video 
          src={url} 
          controls
          className="w-full h-full"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="flex justify-end">
        <a
          href={url}
          download="generated-video.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          Download Video
        </a>
      </div>
    </div>
  );
};