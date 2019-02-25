import React from 'react';
import styled from 'styled-components';
import UserStars from './UserStars';

const UserNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    @media screen and (max-width: 520px) {
        display: block;
        margin-bottom: 0;
    }
`

const UserLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #0366d6;
  
`

const UserName = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
  @media screen and (max-width: 520px) {
    margin: 8px 0 0 0;
  }
`

const UserNameInfo = (props) => (
    <UserNameContainer>
        <UserLink href={props.userHtml_url} target="_blank">{props.userLogin}</UserLink>
        <UserName>{props.userDescName}</UserName>
        <UserStars userDescStars = {props.userDescStars} />
    </UserNameContainer>
);

export default UserNameInfo;