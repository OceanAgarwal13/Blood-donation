import React from 'react';
import Chatbot from '../components/Chatbot';

export default function HelpPage() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-warning mb-4 mt-4 pt-4">🤖 Help Center 🤖</h1>
      <h5 className="text-white text-center mb-5">Need help? Chat with our assistant below.</h5>
      <Chatbot />
    </div>
  );
}
