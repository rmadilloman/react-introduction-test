import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../../redux/slices/searchSlice';  // import the new thunk
import { addSong } from '../../redux/slices/librarySlice';
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
const SearchResults = () => { 
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);
    const handleRetry = () => {
      // skip use of refetch
      alert('Retry did not succeed');
    };
  if (loading) return <Message>Loading albums...</Message>;
  if (error) return (
    <Message>
      Error: {error}
      <StyledButton onClick={() => dispatch(handleRetry, fetchSongs)}>Try Again</StyledButton>
    </Message>
  );

  if (results.length === 0) return <Message>No albums found. Try searching!</Message>;

  return (
    <Section>
      <Title>Search Results</Title>
      <Grid>
        {results.map((album) => (
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
              <StyledButton variant="add" onClick={() => dispatch(addSong(album))}>
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