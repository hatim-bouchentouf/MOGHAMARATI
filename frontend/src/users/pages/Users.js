import React from "react";
import UserList from "../components/UserList";

function Users() {
  const User = [
    {
      id: "u1",
      name: "chanko",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rFK6PyNnOcoGsvxeejP17gHaD4%26pid%3DApi&f=1",
      places: 3,
    },
    {
      id: "u2",
      name: "chanko",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rFK6PyNnOcoGsvxeejP17gHaD4%26pid%3DApi&f=1",
      places: 3,
    },
    {
      id: "u3",
      name: "chanko",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rFK6PyNnOcoGsvxeejP17gHaD4%26pid%3DApi&f=1",
      places: 3,
    },
  ];
  return (
    <div>
      <UserList items={User} />
    </div>
  );
}

export default Users;
