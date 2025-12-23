import React from 'react';
import Song from '../Song';
import './styles.css';

const Library = ({ songs }) => {
  return (
    <section className="library">
      <h2>My Library</h2>
      {songs.length === 0 ? (
        <p>This is an empty library!.</p>
      ) : (
        songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))
      )}
    </section>
  );
};

export default Library;