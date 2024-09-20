import React from 'react';
import { MessageInputBar } from './MessageInputBar';
import ChatHeader from './ChatHeader';

export const MessagesWindow = () => {
  const user = {
    name: 'John Doe',
    profileImage: 'src/assets/App-people-chatting.png', 
  };

  // Sample messages
  const messages = [
    { id: 1, text: "Hello!", sender: "recipient" },
    { id: 2, text: "Hi there!", sender: "sender" },
    { id: 3, text: "How are you?", sender: "recipient" },
    { id: 4, text: "I'm good, thanks!", sender: "sender" },
  ];

  return (
    <div className='MessagesWindow-container'>
      <ChatHeader user={user} />
      <div className='MessagesWindow-content'>
        {messages.map(message => (
          <p 
            key={message.id} 
            className={message.sender === 'sender' ? 'message-sender' : 'message-recipient'}
          >
            {message.text}
          </p>
        ))}
      </div>
      <MessageInputBar />
    </div>
  );
};
