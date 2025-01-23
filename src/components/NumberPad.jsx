import React from 'react';

export const NumberPad = ({ value, onChange, onSubmit }) => {
  const handleNumberClick = (num) => {
    const newValue = value + num;
    onChange(newValue);
  };

  const handleDelete = () => {
    onChange(value="");
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="w-full max-w-md  mx-auto" >
      <div className="mb-4 h-16 bg-cyber-dark border-2 border-neon-blue rounded-lg flex items-center justify-end px-4 overflow-hidden">
        <span className="text-3xl text-neon-blue font-cyber">{value || '0'}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-cyber-light border-2 border-neon-blue text-neon-blue h-16 rounded-lg 
                     hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300 
                     text-2xl font-cyber flex items-center justify-center" 
                     style={{ minWidth: '3em' }}
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleDelete}
          className="bg-cyber-light border-2 border-neon-purple text-neon-purple h-16 rounded-lg 
                   hover:bg-neon-purple hover:text-cyber-dark transition-all duration-300 
                   text-xl font-cyber flex items-center justify-center"
        >
          ╳
        </button>
        <button
          onClick={onSubmit}
          className="bg-cyber-light border-2 border-neon-green text-neon-green h-16 rounded-lg 
                   hover:bg-neon-green hover:text-cyber-dark transition-all duration-300 
                   text-xl font-cyber flex items-center justify-center"
        >
          ↵
        </button>
      </div>
    </div>
  );
};