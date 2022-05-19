import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/data';
import UsersListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper, StyledList } from './UserList.styles';


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usersData) {
          resolve([...usersData]);
        } else {
          reject({ message: 'Error' });
        }
      }, 2000);
    });
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};


export default UsersList;
