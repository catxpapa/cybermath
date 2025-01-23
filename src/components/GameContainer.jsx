import React, { useState, useEffect } from 'react';
import { NumberPad } from './NumberPad';
import { useAudio } from '../hooks/useAudio';
import ButtonWithConfirmation from './ButtonWithConfirmation';


export const GameContainer = ({ difficulty, onExit }) => {
    const [score, setScore] = useState(0);
    const [problem, setProblem] = useState({ question: '', answer: '' });
    const [input, setInput] = useState('');
    const [streak, setStreak] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const { playCorrect, playWrong } = useAudio();

    const generateProblem = () => {
        const max = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 50;
        const num1 = Math.floor(Math.random() * max);
        const num2 = Math.floor(Math.random() * max);
        const operators = difficulty === 'easy' ? ['+'] : difficulty === 'medium' ? ['+', '-'] : ['+', '-', '*'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
    
        let answer;
        switch (operator) {
            case '+': answer = num1 + num2; break;
            case '-': // 确保 num1 >= num2
                    
                      const finalNum1 = Math.max(num1, num2); // 确保 num1 >= num2
                      const finalNum2 = Math.min(num1, num2); // 确保 num2 <= num1
                      answer = finalNum1 - finalNum2;
                      setProblem({
                          question: `${finalNum1} - ${finalNum2} = ?`,
                          answer: answer.toString()
                      });
                      return; // 提前返回，避免重复设置 problem
            case '*': answer = num1 * num2; break;
            default: answer = num1 + num2;
        }
    
        setProblem({
            question: `${num1} ${operator} ${num2} = ?`,
            answer: answer.toString()
        });
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = () => {
        if (input === problem.answer) {
            playCorrect();
            setScore(score + (streak + 1) * 10);
            setStreak(streak + 1);
            setInput('');
            generateProblem();
        } else {
            playWrong();
            setIsShaking(true);
            setStreak(0);
            setTimeout(() => {
                setIsShaking(false);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-end min-h-screen p-4 relative">
            <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-8 bg-cyber-dark/80 backdrop-blur-sm p-4 rounded-lg border border-neon-blue">
                <div className="text-neon-green text-2xl text-nowrap font-bold">得分: {score}</div>
                <div className="text-neon-purple text-2xl text-nowrap font-bold">连击: {streak}</div>
            </div>
          
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <img
                    src="/m1.png"
                    className="absolute top-20 right-20 w-96 h-96 opacity-50 animate-float-large"
                    alt="cyber enemy"
                />
                <img
                    src="/m2.png"
                    className="absolute bottom-20 left-20 w-96 h-96 opacity-50 animate-float-large-delayed"
                    alt="cyber enemy"
                />
                <img
                    src="/m3.png"
                    className="absolute top-1/2 right-1/4 w-96 h-96 opacity-50 animate-float-large-reverse"
                    alt="cyber enemy"
                />
            </div>

            <ButtonWithConfirmation onExit={onExit} />  {/* 使用ButtonWithConfirmation组件 */}
            <div className="relative z-10">
                <div className={`bg-cyber-light/80 backdrop-blur-sm p-8 rounded-lg border-2 border-neon-blue shadow-lg max-w-md w-full mb-8 ${isShaking ? 'animate-shake' : ''}`}>
                    <h2 className="text-4xl mb-8 text-center animate-glow">{problem.question}</h2>

                    <NumberPad
                        value={input}
                        onChange={setInput}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};