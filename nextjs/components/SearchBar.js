import { useState } from 'react';
import styles from '../styles/Searchbar.module.css'; // Adjust path as necessary

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input 
        type="text" 
        placeholder="Search reservations or guests..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className={styles.searchInput} 
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default Searchbar;
