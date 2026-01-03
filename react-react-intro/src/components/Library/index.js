import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
import { Section, Title, Grid, AlbumCard, NoImage, RemoveButton} from './styles';

const Library = () => { // {albums}
  const dispatch = useDispatch();
  const albums = useSelector((state) => state);
  if (albums.length === 0) {
    return (
      <Section>
        <Title>My Library</Title>
        <p style={{ textAlign: 'center' }}>Your library is empty</p>
      </Section>
    );
  }

  return (
    <Section>
      <Title>My Library ({albums.length})</Title>
      <Grid>
        {albums.map((album, index) => (
          <AlbumCard key={album.idAlbum || album.strAlbum} isNew={index === albums.length - 1}>
            {album.strAlbumThumb ? (
              <img
                src={album.strAlbumThumb}
                alt={album.strAlbum}
                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
            ) : (
              <NoImage>No Image</NoImage>
            )}
            <h3>{album.strAlbum}</h3>
            <p>{album.intYearReleased || 'Unknown'}</p>
            <RemoveButton
              onClick={() => dispatch(removeSong(album.idAlbum))}
            >
              Remove
            </RemoveButton>
          </AlbumCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Library;