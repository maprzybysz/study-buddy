import React from 'react';
import { users } from 'data/data';
import UsersListItem from 'components/UserListItem/UserListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
