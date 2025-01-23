import React from 'react';

export const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <img 
          src="https://heyboss.heeyo.ai/user-assets/jaC4nJ5U.png" 
          alt="cyber mecha" 
          className="w-48 h-48 object-contain animate-float mb-4" 
        />
        <h1 className="text-5xl font-bold text-neon-blue animate-glow tracking-wider">
          CYBER MATH
        </h1>
      </div>
      
      <div className="grid gap-6 max-w-md w-full">
        <button
          onClick={() => onStart('easy')}
          className="bg-cyber-light border-2 border-neon-green text-neon-green py-4 px-8 rounded-lg hover:bg-neon-green hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          TRAINING MODE
        </button>
        <button
          onClick={() => onStart('medium')}
          className="bg-cyber-light border-2 border-neon-blue text-neon-blue py-4 px-8 rounded-lg hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          BATTLE MODE
        </button>
        <button
          onClick={() => onStart('hard')}
          className="bg-cyber-light border-2 border-neon-purple text-neon-purple py-4 px-8 rounded-lg hover:bg-neon-purple hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          MECHA WARS
        </button>
      </div>
    </div>
  );
};