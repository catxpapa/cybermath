import React from 'react';

export const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <img 
          src="/ico.png" 
          alt="cyber mecha" 
          className="w-48 h-48 object-contain animate-float mb-4" 
        />
        <h1 className="text-5xl font-bold text-neon-blue animate-glow tracking-wider">
          数战勇士
        </h1>
      </div>
      
      <div className="grid gap-6 max-w-md w-full">
        <button
          onClick={() => onStart('easy')}
          className="bg-cyber-light border-2 border-neon-green text-neon-green py-4 px-8 rounded-full hover:bg-neon-green hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          训练模式（简单）
        </button>
        <button
          onClick={() => onStart('medium')}
          className="bg-cyber-light border-2 border-neon-blue text-neon-blue py-4 px-8 rounded-full hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          战斗模式（中等）
        </button>
        <button
          onClick={() => onStart('hard')}
          className="bg-cyber-light border-2 border-neon-purple text-neon-purple py-4 px-8 rounded-full hover:bg-neon-purple hover:text-cyber-dark transition-all duration-300 transform hover:scale-105"
        >
          战争模式（高级）
        </button>
      </div>
    </div>
  );
};