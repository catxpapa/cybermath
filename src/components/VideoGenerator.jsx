import React, { useState } from 'react';
import { PromptInput } from './PromptInput';
import { LoadingState } from './LoadingState';
import { VideoPreview } from './VideoPreview';

export const VideoGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const generateVideo = async (prompt) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('https://api-hub-579483274893.us-central1.run.app/v1/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
        },
        body: JSON.stringify({
          model: "minimax/video-01",
          inputs: {
            prompt
          }
        })
      });

      const data = await response.json();
      
      if (data.file?.download_url) {
        setVideoUrl(data.file.download_url);
      } else {
        throw new Error('Failed to generate video');
      }
    } catch (err) {
      setError('An error occurred while generating the video. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <PromptInput onGenerate={generateVideo} disabled={isLoading} />
      
      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {isLoading && <LoadingState />}
      
      {videoUrl && !isLoading && <VideoPreview url={videoUrl} />}
    </div>
  );
};