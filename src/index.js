import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// React v18 이후 버전에서는 react-dom/client 모듈에서 불러와야 함
const root = createRoot(document.getElementById('root'));
root.render(<App />);