import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(user) {
    setUsers((prevUsers) => [user, ...prevUsers]);
  }

  function deleteUserHandler(userId) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} onDeleteUser={deleteUserHandler} />
    </>
  );
}

export default App;
