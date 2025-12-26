import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './styles.css';

const SongDetail = () => {
  const { id } = useParams();
  const url = `/api/v1/json/2/album.php?m=${id}`;  // Note "2" for the test key

  const { data, loading, error } = useFetch(url);

  if (loading) return <p className="message">Loading album details...</p>;
  if (error) return <p className="error">Error loading album: {error}</p>;

  const album = data?.album?.[0];

  if (!album) return <p className="message">Album not found.</p>;

  return (
    <div className="song-detail">
      <Link to="/">Back to Search</Link>
      <h1>{album.strAlbum}</h1>
      <p><strong>Artist:</strong> {album.strArtist}</p>
      <p><strong>Year:</strong> {album.intYearReleased || 'N/A'}</p>
      <p><strong>Genre:</strong> {album.strGenre || 'N/A'}</p>
      {album.strAlbumThumb && (
        <img src={album.strAlbumThumb} alt={album.strAlbum} />
      )}
      <p><strong>Description:</strong></p>
      <p>{album.strDescriptionEN || 'No description available.'}</p>
    </div>
  );
};


export default SongDetail;