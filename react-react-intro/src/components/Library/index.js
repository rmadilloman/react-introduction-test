import React from 'react';
import { Section, Title, Grid, AlbumCard, NoImage } from './styles';

const Library = ({ albums }) => {
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
          </AlbumCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Library;