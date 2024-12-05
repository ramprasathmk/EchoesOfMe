import React, { useState } from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const ChatBox = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
`;

const MessageItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const InputBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (input.trim() && email.trim()) {
      setMessages([...messages, { text: input, sender: 'user', email }]);
      setInput('');
      setEmail('');
      // Simulate a response from the chat system
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a response from the chat system.', sender: 'system' },
        ]);
      }, 1000);
    }
  };

  return (
    <StyledChat>
      <ChatBox>
        <MessageList>
          {messages.map((message, index) => (
            <MessageItem key={index}>
              <strong>{message.sender}:</strong> {message.text} <br />
              <em>{message.email}</em>
            </MessageItem>
          ))}
        </MessageList>
        <InputBox>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </InputBox>
      </ChatBox>
    </StyledChat>
  );
};

export default Chat;
