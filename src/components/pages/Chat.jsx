import React, { useState } from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;

  .chat-box {
    width: 100%;
    max-width: 600px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .chat-input {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
  }

  .chat-input input {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .chat-input button {
    width: 18%;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .chat-input button:hover {
    background-color: #0056b3;
  }
`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'You' }]);
      setInput('');
    }
  };

  return (
    <StyledChat>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </StyledChat>
  );
}

export default Chat;
