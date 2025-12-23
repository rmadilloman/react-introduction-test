import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import './components/App.css';

const App = () => {
  const fakeSearchResults = [
    { id: 1, title: "Traffic", artist: "VeenBlox", duration: "3:36" },
    { id: 2, title: "Destructor", artist: "Gee J", duration: "3:50" },
    { id: 3, title: "RISE", artist: "League of Legends Music", duration: "3:13" },
    { id: 4, title: "Beethoven Virus", artist: "BanYa", duration: "3:38" },
  ];

  const [searchResults] = useState(fakeSearchResults);
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (song) => {
    // Prevent duplicates
    if (!myLibrary.find((s) => s.id === song.id)) {
      setMyLibrary([...myLibrary, song]);
    }
  };

  // Log every time library updates
  useEffect(() => {
    console.log('Library updated:', myLibrary);
  }, [myLibrary]);

  return (
    <div className="App">
      <Header />
      <main>
        <SearchResults songs={searchResults} onAddToLibrary={addToLibrary} />
        <Library songs={myLibrary} />
      </main>
    </div>
  );
};

export default App;