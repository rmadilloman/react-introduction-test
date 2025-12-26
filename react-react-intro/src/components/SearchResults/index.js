import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './styles.css';

const SearchResults = ({ searchTerm, onAddToLibrary }) => {
  const url = searchTerm
    ? `/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
    : null;

  const { data, loading, error, refetch } = useFetch(url);

  if (!searchTerm) {
    return <p className="message">Type an artist name to search for albums.</p>;
  }

  if (loading) return <p className="message">Loading albums...</p>;
  if (error) {
    return (
      <div className="error">
        <p>Error: {error.message}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  const albums = data?.album || [];
  console.log(albums.length)
  if (albums.length === 0) {
    return <p className="message">No albums found for "{searchTerm}".</p>;
  }

  return (
    <section className="search-results">
      <h2>Albums by {searchTerm}</h2>
      {albums.map((album) => (
        <div key={album.idAlbum} className="album-card">
          <img
            src={album.strAlbumThumb || 'https://via.placeholder.com/200'}
            alt={album.strAlbum}
          />
          <h3>{album.strAlbum}</h3>
          <Link to={`/song/${album.idAlbum}`}>
            <button>View Album Details</button>
          </Link>
          <button
              className="add-library-btn"
              onClick={() => onAddToLibrary(album)}
            >
              Add to My Library
            </button>
        </div>
      ))}
    </section>
  );
};

export default SearchResults;