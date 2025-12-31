import React, { useState } from 'react';
import { Form, Input, Button } from './styles';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
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