import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'; 
import { MessageInputBar } from './MessageInputBar';
import ChatHeader from './ChatHeader';

interface User {
  _id: string;
  username: string;
  profileImage?: string;
}

interface Props {
  selectedUser: User | null;
  loggedInUserId: string;
}

const socket = io('http://localhost:5000'); 

export const MessagesWindow = ({ selectedUser, loggedInUserId }: Props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser) {
        try {
          const response = await fetch(`http://localhost:5000/api/messages/messages/${loggedInUserId}/${selectedUser._id}`);
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    fetchMessages();
  }, [selectedUser, loggedInUserId]);

  useEffect(() => {
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const messageData = {
      senderId: loggedInUserId,
      recipientId: selectedUser?._id,
      content,
    };

    socket.emit('sendMessage', messageData);

    const token = localStorage.getItem('auth-token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': `${token}`,
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        const newMessage = await response.json();
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        const errorData = await response.json();
        console.error('Error sending message:', errorData.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className='MessagesWindow-container'>
      {selectedUser && (
        <ChatHeader
          user={{
            name: selectedUser.username,
            profileImage: selectedUser.profileImage || 'src/assets/default-profile.png'
          }}
        />
      )}
      <div className='MessagesWindow-content'>
        {messages.map(message => (
          <div
            key={message._id}
            className={message.senderId === loggedInUserId ? 'message-sender' : 'message-recipient'}
          >
            {message.content}
          </div>
        ))}
      </div>
      <MessageInputBar sendMessage={sendMessage} />
    </div>
  );
};
