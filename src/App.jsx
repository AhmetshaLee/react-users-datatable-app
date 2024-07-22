import { useEffect, useState } from 'react';
import UsersTable from './components/UsersTable/UsersTable';
import SearchBar from './components/SearchBar/SearchBar';
import getUsers from './services/apiUsers';

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const searchKeys = [
    'firstName',
    'lastName',
    'maidenName',
    'age',
    'gender',
    'phone',
    'city',
    'address',
  ];

  const handleSearch = (data) => {
    const searchQueryLower = searchQuery.toLowerCase().split(' ');

    const isMatch = (obj) => {
      for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
          if (isMatch(value)) {
            return true;
          }
        } else if (
          searchKeys.includes(key) &&
          value.toString().toLowerCase().includes(searchQueryLower)
        ) {
          return true;
        }
      }
      return false;
    };

    return data.filter(isMatch);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Тестовое задание. Таблица пользователей и API</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UsersTable users={handleSearch(users)} />
      </div>
    </>
  );
}

export default App;
