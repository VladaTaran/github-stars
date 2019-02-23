import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userDescription';
import styled from 'styled-components';
import { GoLocation, GoStar, GoMail } from 'react-icons/go';

const Container = styled.div`
  display: flex;
`
const List = styled.ul`
  list-style: none;
  margin: 24px auto;
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

const UserLink = styled.a`
  text-decoration: none;
  color: #0366d6;
`

const UserName = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
`

const StarsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  flex-direction: row;
  align-items: center;
`

const StarsNumber = styled.p`
  font-size: 12px;
  margin-right: 10px;
  color: #586069;
`

const UserWork = styled.div`
  font-size: 14px;
  margin-top: 8px;
`
const UserLocation = styled.p`
  color: #586069;
  font-size: 12px;
  marginLeft: '10px';
`

const UserContacts = styled.div`
  display: flex;
  align-items: center;
`

class Stars extends React.Component {    

componentDidMount() {
  this.props.dispatch(getUsers('https://api.github.com/search/users?q=location:kyiv&page=1&per_page=10&sort:follovers'));
}


render() {
  const { usersList, usersDesc } = this.props; 
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
                  {usersDesc.map(userDesc => {
                    if(userDesc.login === user.login) {
                      return (
                        <React.Fragment key={user.id+userDesc.login}>
                          <div style={{display: 'flex',flexDirection: 'row',marginBottom: '10px'}}>
                            <UserLink href={user.html_url}>{user.login}</UserLink>
                            <UserName>{userDesc.name}</UserName>
                            <StarsContainer style={{ position: 'absolute', right: '20px'}}>
                              <StarsNumber>{userDesc.stars}</StarsNumber>
                              <GoStar />
                            </StarsContainer>
                          </div>
                          <UserWork>{userDesc.bio}</UserWork>
                          <UserContacts>
                            <GoLocation style= {{color: '#586069'}} />
                            <UserLocation>{userDesc.location}</UserLocation>
                            <GoMail style= {{color: '#586069', marginLeft: '10px'}}/>
                            <p>{userDesc.email}</p>
                          </UserContacts>
                          </React.Fragment>
                        )
                      }
                    }
                  )}
                </ListItemInfo>
              </ListItem>
            )}
          </List>
        </Container>
      );
    }
  };

const mapStateToProps = state => {
  // console.log(state.usersList.usersDesc)
  return {
    bio: state.usersList.bio,
    usersList: state.usersList.usersList,
    usersDesc: state.usersList.usersDesc
  }
};

export default connect(mapStateToProps)(Stars);