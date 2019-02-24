import React from 'react';
import styled from 'styled-components';
import { GoLocation, GoMail } from 'react-icons/go';

const UserContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 520px) {
        flex-direction: column;
    };
`
const Location = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
`

const UserLocation = styled.p`
    color: #586069;
    font-size: 12px;
    margin-left: 10px;
`
const Email = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const UserEmail = styled.p`
    color: #586069;
    font-size: 12px;
    margin-left: 10px;
`

const UserContacts = (props) => (
    <UserContactsContainer>
        <Location>
            <GoLocation style= {{color: '#586069'}} />
            <UserLocation>{props.userDescLocation}</UserLocation>
        </Location>
        <Email>
          <GoMail style= {{color: '#586069'}}/>
          <UserEmail>example@email.com</UserEmail>
        </Email>
    </UserContactsContainer>
);

export default UserContacts;