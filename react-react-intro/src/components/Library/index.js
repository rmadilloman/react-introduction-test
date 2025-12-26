import React from 'react';
import './styles.css';

const Library = ({ albums }) => {
  if (albums.length === 0) {
    return (
      <section className="library">
        <h2>My Library</h2>
        <p>Your library is empty</p>
      </section>
    );
  }

  return (
    <section className="library">
      <h2>My Library ({albums.length})</h2>
      <div className="library-grid">
        {albums.map((album) => (
          <div key={album.idAlbum || album.strAlbum} className="library-album">
            <h3>{album.strAlbum}</h3>
            <p>{album.intYearReleased || 'Unknown'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;