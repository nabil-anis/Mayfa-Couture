
import React from 'react';
import { InstagramIcon, TikTokIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-green/30 dark:bg-charcoal-black/30">
      <div className="container mx-auto px-6 py-8 text-center text-charcoal-black/70 dark:text-cream-white/70">
        <p className="font-playfair text-xl mb-2">Mayfa Couture</p>
        <p className="text-sm font-inter mb-4">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.instagram.com/mayfa.couture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-soft-gold dark:hover:text-soft-gold transition-colors duration-300"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.tiktok.com/@mayfa.couture" 
            aria-label="TikTok" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-soft-gold dark:hover:text-soft-gold transition-colors duration-300"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
  );
};

export default Footer;
