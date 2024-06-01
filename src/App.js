import './App.css';
import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';

function App() {
  return <ShakaPlayer autoPlay src="../demoVideo.mp4" />;
}

export default App;
