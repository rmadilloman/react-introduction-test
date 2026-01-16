import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SongDetail from './components/SongDetail';
import Library from './components/Library';
 // No searchTerm or onAddToLibrary
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <SearchBar /> 
          <Routes>
            <Route path="/" element={
              <>
                <SearchResults />
                <Library />
              </>
            } />
            <Route path="/song/:id" element={<SongDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;