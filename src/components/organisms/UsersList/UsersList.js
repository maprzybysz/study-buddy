import React from 'react';
import { users } from 'data/data';
import UsersListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
