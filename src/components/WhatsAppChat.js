// components/WhatsAppChat.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  const phoneNumber = '9204444065'; // Replace with your WhatsApp number (with country code)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppChat;


