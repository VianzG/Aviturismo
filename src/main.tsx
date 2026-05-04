import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ItineraryPage from './components/ItineraryPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/itinerary/:bookingId" element={<ItineraryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
