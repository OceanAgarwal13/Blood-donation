// src/components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Bot is typing...
    setMessages((prev) => [...prev, { sender: 'bot', text: 'Typing...' }]);

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      const reply = res.data.reply;

      setMessages((prev) => [
        ...prev.slice(0, -1), // remove "Typing..."
        { sender: 'bot', text: reply }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: 'Something went wrong.' }
      ]);
    }
  };

  return (
    <div className="container mt-4 p-4" style={{ background: 'rgba(32, 39, 36, 0.67)', maxWidth: 600, boxShadow:'0 0 30px #7a810f', border:'1px dashed #7a810f', borderRadius:'2rem'}}>
      <h3 className="text-center text-danger mb-4">💬 Chat with BLOT 💬</h3>
      <div className="chat-box p-4 mb-4" style={{ height: 300, overflowY: 'auto', border:'2px solid #7a810f', borderRadius:'2rem', background:'rgba(121, 129, 15, 0.17)' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'text-end' : 'text-start'}>
            <span
              className={`d-inline-block p-2 rounded mb-1 ${
                msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
              }`}
              style={{ maxWidth: '70%' }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{background:'wheat'}}
        />
        <button className="btn btn-danger fw-bold" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
