import React from 'react';
import '../styles/Loader.css';

const Loader = ({ hide }) => {
  return (
    <div className={`loader-container ${hide ? 'fade-out' : ''}`}>
      <div className="glass-panel">
        <div className="typing-loader">
          <span className="bracket">&lt;</span>
          <span className="text">loading portfolio</span>
          <span className="bracket">/&gt;</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
