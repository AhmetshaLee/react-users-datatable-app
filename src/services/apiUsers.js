async function getUsers() {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getUsers;
