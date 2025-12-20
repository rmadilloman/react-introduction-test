import React from 'react';

class Song extends React.Component {
  render() {
    const { title, artist, duration } = this.props;  // Destructure props

    return (
      <div className="playlist-div">
        <h3>{title}</h3>
        <p><strong>Artist:</strong> {artist}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>
    );
  }
}

export default Song;