import { useEffect, useState } from 'react';
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

export const MessagesWindow = ({ selectedUser, loggedInUserId }: Props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser) {
        try {
          const response = await fetch(`/api/messages/${loggedInUserId}/${selectedUser._id}`);
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    fetchMessages();
  }, [selectedUser, loggedInUserId]); 
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
      <MessageInputBar />
    </div>
  );
};
