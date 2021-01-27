import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

import "./UserList.css";

function UsersList(props) {
  if (props.items?.length === 0) {
    return (
      <Card>
        <h2>no users found</h2>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {props.items?.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          PlaceCount={user.places.length}
        />
      ))}
    </ul>
  );
}

export default UsersList;
