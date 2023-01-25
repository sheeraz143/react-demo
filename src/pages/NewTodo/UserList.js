import { useState } from "react";
import axios from "axios";
function UserList() {
  const [usersList, setUsersList] = useState(null);

  function fetchingUsers() {
    axios.get("https://dummyjson.com/users").then(value => {
      setUsersList(value.data);
    });
  }

  fetchingUsers();
  return (
    <div>
      <ul>
        {usersList == null ? (
          <div>No data</div>
        ) : (
          usersList.users.map((item, index) => {
            return (
              <li>
                <a href={`userdetail`}>{item.firstName}</a>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default UserList;
