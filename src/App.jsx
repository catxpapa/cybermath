import React, { useState, useEffect } from 'react';
import { GameContainer } from './components/GameContainer';
import { StartScreen } from './components/StartScreen';

export const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="min-h-screen bg-cyber-dark font-cyber text-neon-blue overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 min-w-full min-h-full object-cover opacity-20 z-0"
      >
        <source src="https://cdn.pixabay.com/video/2024/03/02/202718-918779955_medium.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 w-full h-screen">
        {!gameStarted ? (
          <StartScreen onStart={(level) => {
            setDifficulty(level);
            setGameStarted(true);
          }} />
        ) : (
          <GameContainer difficulty={difficulty} onExit={() => setGameStarted(false)} />
        )}
      </div>
    </div>
  );
};