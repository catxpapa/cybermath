import { useEffect, useCallback } from 'react';

export const useAudio = () => {
  const playCorrect = useCallback(() => {
    const audio = new Audio('/correct.mp3');
    audio.play().catch(error => console.log('Audio play failed:', error));
  }, []);

  const playWrong = useCallback(() => {
    const audio = new Audio('/wrong.mp3');
    audio.play().catch(error => console.log('Audio play failed:', error));
  }, []);

  return { playCorrect, playWrong };
};