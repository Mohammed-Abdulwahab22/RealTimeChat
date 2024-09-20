import React from 'react';
import { MessageInputBar } from './MessageInputBar';

export const MessagesWindow = () => {
  return (
    <div className='MessagesWindow-container'>
      <div className='MessagesWindow-content'>
        {/* Messages would go here */}
        <p>Messages will appear here...</p>
      </div>
      <MessageInputBar />
    </div>
  );
};
