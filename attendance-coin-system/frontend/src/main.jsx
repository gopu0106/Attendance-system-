// frontend/src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/design-tokens.css';
import './styles/animations.css';
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(15, 23, 42, 0.95)',
          color: 'rgba(226, 232, 240, 0.95)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '12px',
          backdropFilter: 'blur(20px)',
        },
        success: {
          iconTheme: {
            primary: '#22c55e',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#f97373',
            secondary: '#fff',
          },
        },
      }}
    />
  </React.StrictMode>
);
