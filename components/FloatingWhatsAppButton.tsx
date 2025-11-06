
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-green-600"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
