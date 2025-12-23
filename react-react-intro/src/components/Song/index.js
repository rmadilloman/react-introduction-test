import React from 'react';
import './styles.css';

const Song = ({ title, artist, duration, onAdd }) => {
  return (
    <div className="song-card">
      <h3>{title}</h3>
      <p><strong>Artist:</strong> {artist}</p>
      <p><strong>Duration:</strong> {duration}</p>
      {onAdd && (
        <button className="add-button" onClick={onAdd}>
          Add to My Library
        </button>
      )}
    </div>
  );
};

export default Song;