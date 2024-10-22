const SearchReservations = ({ searchTerm, onSearch }) => {
    const handleInputChange = (event) => {
      onSearch(event.target.value);
    };
  
    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search reservations by guest name, ID, room type..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ padding: '10px', width: '60%' }}
        />
      </div>
    );
  };
  
  export default SearchReservations;
  