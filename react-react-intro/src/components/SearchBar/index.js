import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../../redux/slices/searchSlice';
import { Form, Input, Button } from './styles';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(fetchSongs(input.trim()));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search for an artist. (Michael Jackson, Coldplay)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;