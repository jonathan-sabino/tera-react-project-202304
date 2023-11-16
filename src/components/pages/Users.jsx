import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import UserListWrapper from "../molecules/UserListWrapper";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  console.log("users", users);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
