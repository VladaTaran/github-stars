import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';
import { GoStar } from 'react-icons/go';

const StarsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10%;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 520px) {
    position: static;
  }
`

const StarsNumber = styled.p`
  font-size: 12px;
  margin-right: 10px;
  color: #586069;
`

const UserStars = (props) => (
    <StarsContainer>
          <StarsNumber>{numeral(props.userDescStars).format('0,0')}</StarsNumber>
          <GoStar />
    </StarsContainer>
);

export default UserStars;