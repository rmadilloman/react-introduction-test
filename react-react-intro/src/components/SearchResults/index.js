import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {
  Section,
  Title,
  Grid,
  Card,
  AlbumImage,
  ButtonGroup,
  StyledButton,
  Message,
} from './styles';

const SearchResults = ({ searchTerm, onAddToLibrary }) => {
  const url = searchTerm
    ? `/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
    : null;

  const { data, loading, error, refetch } = useFetch(url);

  if (!searchTerm) return <Message>Type an artist name to search.</Message>;
  if (loading) return <Message>Loading albums...</Message>;
  if (error) return (
    <Message>
      Error: {error}
      <StyledButton onClick={refetch}>Try Again</StyledButton>
    </Message>
  );

  const albums = data?.album || [];

  if (albums.length === 0) return <Message>No albums found for "{searchTerm}".</Message>;

  return (
    <Section>
      <Title>Albums by {searchTerm}</Title>
      <Grid>
        {albums.map((album) => (
          <Card key={album.idAlbum}>
            <AlbumImage
              src={album.strAlbumThumb || 'https://placehold.co/200x200?text=No+Image'}
              alt={album.strAlbum}
            />
            <h3>{album.strAlbum}</h3>
            <p>Year: {album.intYearReleased || 'Unknown'}</p>
            <ButtonGroup>
              {album.idAlbum && (
                <Link to={`/song/${album.idAlbum}`}>
                  <StyledButton>View Details</StyledButton>
                </Link>
              )}
              <StyledButton variant="add" onClick={() => onAddToLibrary(album)}>
                Add to Library
              </StyledButton>
            </ButtonGroup>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default SearchResults;