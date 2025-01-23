import React, { useState } from 'react';

const ButtonWithConfirmation = ({ onExit }) => {
    const [confirming, setConfirming] = useState(false);

    const handleClick = () => {
        if (confirming) {
            onExit();
        } else {
            setConfirming(true);
        }
    };


     const handleContinue = () => {
         setConfirming(false);
      };

    const buttonText = confirming ? '确定结束' : '结束任务';
    const buttonBgColor = confirming ? 'bg-red-500' : 'bg-cyber-light'; //移除透明度
    const buttonTextColor = confirming ? 'text-white' : 'text-neon-purple';
    const buttonBorderColor = confirming ? 'border-red-500' : 'border-neon-purple';


    return (
      <>
          <button
              onClick={handleClick}
              className={`relative z-10 p mb-4 transition-colors duration-300  rounded-lg border-2 px-3
               ${buttonBgColor} ${buttonBorderColor} ${confirming ? 'text-white hover:text-white' : 'text-neon-purple hover:text-neon-purple'} `}
          >
              {buttonText}
          </button>
        {confirming && (
            <button
                onClick={handleContinue}
                 className="relative z-10 p mb-4 text-white bg-neon-green hover:bg-neon-green/80 transition-colors duration-300  rounded-lg border-2 px-3  border-neon-green "
            >
               继续游戏
            </button>
        )}
      </>
    );
};

export default ButtonWithConfirmation;