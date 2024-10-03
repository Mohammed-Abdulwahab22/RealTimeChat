import React, { useState } from 'react';

interface Props {
  sendMessage: (content: string) => void; 
}

export const MessageInputBar: React.FC<Props> = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');  
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();  
    }
  };

  return (
    <div className='MessageInputBar-container'>
      <input 
        type='text' 
        placeholder='Type a message...' 
        className='MessageInputBar-input' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyDown={handleKeyDown}  
      />
      <button className='MessageInputBar-button' onClick={handleSend}>
        Send
      </button>
    </div>
  );
};
