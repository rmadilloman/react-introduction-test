import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SongDetail from './components/SongDetail';
import Library from './components/Library';
import './components/App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <SearchBar onSearch={handleSearch} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchResults
                    searchTerm={searchTerm}
                  />
                  <Library/> 
                </>
              }
            />
            <Route path="/song/:id" element={<SongDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;