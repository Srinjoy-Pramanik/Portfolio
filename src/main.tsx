import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { init } from '@emailjs/browser';
import App from './App.tsx';
import './index.css';
import { EMAILJS_CONFIG } from './config/emailjs';

// Initialize EmailJS with your public key
init(EMAILJS_CONFIG.publicKey);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
