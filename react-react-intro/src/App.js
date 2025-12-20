import React from 'react';
import './components/App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends React.Component {
  componentDidMount() {
    console.log('The app has loaded');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="playlist-main">
          <h2>My Playlist</h2>
          
          <Song title="Traffic" artist="VeenBlox" duration="3:36" />
          <Song title="Destructor" artist="Gee J" duration="3:50" />
          <Song title="RISE" artist="League of Legends Music" duration="3:13" />
          <Song title="Beethoven Virus" artist="BanYa" duration="3:38" />
        </main>
      </div>
    );
  }
}

export default App;