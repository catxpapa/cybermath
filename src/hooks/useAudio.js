import { useEffect, useCallback } from 'react';

export const useAudio = () => {
  const playCorrect = useCallback(() => {
    const audio = new Audio('/win.wav');
    audio.play().catch(error => console.log('Audio play failed:', error));
  }, []);

  const playWrong = useCallback(() => {
    const audio = new Audio('/fail.wav');
    audio.play().catch(error => console.log('Audio play failed:', error));
  }, []);

  return { playCorrect, playWrong };
};