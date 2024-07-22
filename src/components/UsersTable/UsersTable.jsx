import styles from './styles.module.css';

function UsersTable({ users }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Возраст</th>
          <th>Пол</th>
          <th>Номер телефона</th>
          <th>Адрес</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName} {user.maidenName}
              </td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.city}, {user.address.address}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Пользователи не найдены</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UsersTable;
