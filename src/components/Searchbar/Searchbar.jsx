import React, { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  function inputHandler({ target: { value } }) {
    setInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={input}
          onChange={inputHandler}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
