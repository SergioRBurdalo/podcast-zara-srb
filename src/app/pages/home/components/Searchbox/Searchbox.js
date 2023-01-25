import React, { useEffect, useState } from 'react';
import './Searchbox.css'

const DELAY_DEBOUNCE_TIMEOUT = 650;

export function Searchbox({ onChange, onSearch, placeholder }){
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (onSearch) {
        onSearch(searchValue);
      }
    }, DELAY_DEBOUNCE_TIMEOUT);

    return () => clearTimeout(delayDebounce);
  }, [onSearch, searchValue]);

  const handleSubmit = (event) => {
    if (onSearch) {
      onSearch(searchValue);
    }

    event.preventDefault();
  };

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }

    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} role="search" aria-label="On this page">
      <input
        className="search-input"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        name="search"
        spellCheck={false}
      />
    </form>
  );
}
