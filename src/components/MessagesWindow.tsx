import React from 'react';
import { MessageInputBar } from './MessageInputBar';
import ChatHeader from './ChatHeader';

export const MessagesWindow = () => {
  const user = {
    name: 'John Doe',
    profileImage: 'src/assets/App-people-chatting.png', 
  };

  const messages = [
    { id: 1, text: "Hello!", sender: "recipient" },
    { id: 2, text: "Hi there!", sender: "sender" },
    { id: 3, text: "How are you?", sender: "recipient" },
    { id: 4, text: "I'm good, thanks! How about you? What have you been up to? I haven't heard from you in a while!", sender: "sender" },
  ];

  const MAX_LINE_LENGTH = 30;

  const formatMessageText = (text: string) => {
    if (text.length <= MAX_LINE_LENGTH) return [text];

    const lines = [];
    let start = 0;
    while (start < text.length) {
      lines.push(text.substring(start, start + MAX_LINE_LENGTH));
      start += MAX_LINE_LENGTH;
    }

    return lines;
  };

  return (
    <div className='MessagesWindow-container'>
      <ChatHeader user={user} />
      <div className='MessagesWindow-content'>
        {messages.map(message => (
          <div
            key={message.id}
            className={message.sender === 'sender' ? 'message-sender' : 'message-recipient'}
          >
            {formatMessageText(message.text).map((line, index) => (
              <span key={index} style={{ display: 'block', margin: 0 }}>
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
      <MessageInputBar />
    </div>
  );
};
