import React, { useEffect, useState } from 'react';
import './Searchbox.css'

const DELAY_DEBOUNCE_TIMEOUT = 650;

export function Searchbox({ onChange, onSearch, placeholder }){
  const [searchValue, setSearchValue] = useState('');

  // Wait a short timeout before executing the search.
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (onSearch) {
        onSearch(searchValue);
      }
    }, DELAY_DEBOUNCE_TIMEOUT);

    return () => clearTimeout(delayDebounce);
  }, [onSearch, searchValue]);

  const handleSubmit = (event) => {
    // Execute submit event from props.
    if (onSearch) {
      onSearch(searchValue);
    }

    // Avoid default behavior from form element.
    event.preventDefault();
  };

  const handleChange = (event) => {
    // Execute change event from props.
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
