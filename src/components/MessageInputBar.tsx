import React, { useState } from 'react';

interface Props {
  sendMessage: (content: string) => void; 
}

export const MessageInputBar: React.FC<Props> = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    sendMessage(inputValue);
    setInputValue(''); 
  };

  return (
    <div className='MessageInputBar-container'>
      <input 
        type='text' 
        placeholder='Type a message...' 
        className='MessageInputBar-input' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button className='MessageInputBar-button' onClick={handleSend}>
        Send
      </button>
    </div>
  );
};
