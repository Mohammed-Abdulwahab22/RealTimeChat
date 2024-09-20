import React from 'react';

export const MessageInputBar = () => {
  return (
    <div className='MessageInputBar-container'>
      <input 
        type='text' 
        placeholder='Type a message...' 
        className='MessageInputBar-input' 
      />
      <button className='MessageInputBar-button'>Send</button>
    </div>
  );
};
