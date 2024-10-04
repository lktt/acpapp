import React, { useState } from 'react';

const ReservationSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <h2>Search Reservations</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search by guest name or reservation ID" 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default ReservationSearch;
