import React from 'react';
import Song from '../Song';
import './styles.css';

const SearchResults = ({ songs, onAddToLibrary }) => {
  return (
    <section className="search-results">
      <h2>Search Results</h2>
      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            onAdd={() => onAddToLibrary(song)}
          />
        ))
      )}
    </section>
  );
};

export default SearchResults;