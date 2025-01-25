import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaunchPage from './pages/launchPage';
import AlbumPage from './pages/albumPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
