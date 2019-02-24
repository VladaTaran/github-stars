import React from 'react';
import { getUsers } from '../selectors/getUsers';
import UserNameInfo from './UserName';
import UserContacts from './UserContacts';
import ErrorPage from './ErrorPage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1012px;
  margin: 0 auto;
`
const List = styled.ul`
  list-style: none;
  margin: 24px auto;
  @media screen and (max-width: 520px) {
    margin: 0;
  }
`
const ListItem = styled.li`
  display: flex;
  padding: 24px 0;
  border-top: 1px solid #e1e4e8;
`
const ListItemImg = styled.img`
  max-width: 48px;
  width: 100%;
  height: 100%;
`
const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-weight: 400;
  line-height: 20px;
  min-height: 48px;
  padding: 0;
`

const UserWork = styled.div`
  font-size: 14px;
  margin-top: 8px;
  @media screen and (max-width: 520px) {
    width: 200px;
    margin-top: 0;
  }
`

class GitHubStars extends React.Component {    

componentDidMount() {
  this.props.dispatch(getUsers('https://api.github.com/search/users?q=location:kyiv&page=1&per_page=10&sort:follovers'));
}


render() {
  const { usersList, usersDesc, error } = this.props; 
    if(error === true) {
      return (
        <ErrorPage />
      )
    } else {
      return (
        <Container>
          <List>
            {usersList.map(user => 
              <ListItem key={user.id}>
                <ListItemImg  
                  src={user.avatar_url} 
                  alt="user avatar"
                />
                <ListItemInfo>
                  {usersDesc.map(userDesc => (userDesc.login === user.login) && (
                        <React.Fragment key={user.id+userDesc.login}>
                          <UserNameInfo 
                            userHtml_url = {user.html_url}
                            userLogin = {user.login}
                            userDescName = {userDesc.name}
                            userDescStars = {userDesc.stars}
                          />
                          <UserWork>{userDesc.bio}</UserWork>
                          <UserContacts 
                            userDescLocation = {userDesc.location}
                            // userDescEmail = {userDesc.email}
                          />
                        </React.Fragment>
                      ))
                    }
                </ListItemInfo>
              </ListItem>
            )
          }
          </List>
        </Container>
      );
    }
  }
};

export default GitHubStars;