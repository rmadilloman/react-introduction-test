import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Container, BackLink, AlbumImage } from './styles';

const SongDetail = () => {
  const { id } = useParams();
  const url = `/api/v1/json/2/album.php?m=${id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading album details...</p>;
  if (error) return <p>Error: {error}</p>;

  const album = data?.album?.[0];
  if (!album) return <p>Album not found.</p>;

  return (
    <Container>
      <BackLink as={Link} to="/">Back to Search</BackLink>
      <h1>{album.strAlbum}</h1>
      <p><strong>Artist:</strong> {album.strArtist}</p>
      <p><strong>Year:</strong> {album.intYearReleased || 'N/A'}</p>
      <p><strong>Genre:</strong> {album.strGenre || 'N/A'}</p>
      {album.strAlbumThumb && <AlbumImage src={album.strAlbumThumb} alt={album.strAlbum} />}
      <p><strong>Description:</strong></p>
      <p>{album.strDescriptionEN || 'No description available.'}</p>
    </Container>
  );
};

export default SongDetail;