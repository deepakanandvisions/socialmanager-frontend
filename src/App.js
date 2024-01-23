import React from 'react';
import SsembleSkeltonLoading from './components/SsembleSkeltonLoading';
import ShortsMaker from './components/ShortsMaker/ShortsMaker';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthSection from './components/ShortsMaker/AuthSection';
import NotFound from './components/ShortsMaker/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
function App() {
  const shortcodeSettings = {};
  return (
    
    <Routes>
    <Route path="/" element={<ShortsMaker shortcodeSettings={shortcodeSettings} />} />
    <Route path="/upload" element={<AuthSection />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TermsOfServices />} />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
    
  );
}

export default App;
