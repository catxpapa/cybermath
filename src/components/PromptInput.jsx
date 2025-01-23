import React, { useState } from 'react';

export const PromptInput = ({ onGenerate, disabled }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the video you want to create..."
          className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-white placeholder-gray-400"
          disabled={disabled}
        />
      </div>
      
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => setPrompt('')}
          className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          disabled={disabled || !prompt}
        >
          Clear
        </button>
        
        <button
          type="submit"
          disabled={disabled || !prompt.trim()}
          className={`px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium transition-all
            ${disabled || !prompt.trim() 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:opacity-90'}`}
        >
          {disabled ? 'Generating...' : 'Generate Video'}
        </button>
      </div>
    </form>
  );
};