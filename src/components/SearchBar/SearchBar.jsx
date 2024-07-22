import styles from './styles.module.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <input
        type="text"
        placeholder="Поиск..."
        className={styles.searchBar}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
