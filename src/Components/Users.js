import React, { useState, useEffect } from "react";
import "./Style.css";

const url = "https://jsonplaceholder.typicode.com/users";

function UsersData() {
  const [users, setUsers] = useState([]);

  const getUserFromAPI = async () => {
    const Response = await fetch(url);
    const users = await Response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUserFromAPI();
  }, []);

  console.log(users);
  return (
    <div>
      <h1>User data From User API</h1>
      {users &&
        users.map((user) => {
          const { name, username, email } = user;
          return (
            <div className="data">
              <h2>{name}</h2>
              <h4>{username}</h4>
              <h4>{email}</h4>
              {/* <p>{address}</p> */}
            </div>
          );
        })}
    </div>
  );
}

export default UsersData;
