import React from 'react';
import styled from 'styled-components';
import gitHubError from '../img/gitHubError.png';

const Error = styled.div`
  margin: 0 auto;
  max-width: 960px;
  max-height: auto;
  text-align: center;
`
const ErrorImage = styled.div`
  background: url(${gitHubError}) center no-repeat;
  height: 380px;
  background-size: contain;
  @media screen and (max-width: 520px) {
    height: 160px;
  }
`
const ErrorTitle = styled.span`
  color: #787878;
  font-size: 22px;
  font-weight: 600;
  @media screen and (max-width: 520px) {
    font-size: 18px;
  }
`
const ErrorMessage = styled.p`
  color: #787878;
  font-size: 20px;
  font-weight: 400;
  @media screen and (max-width: 520px) {
    font-size: 16px;
    margin: 20px;
  }
`

const ErrorPage = () => (
    <Error>
        <ErrorImage />
        <ErrorTitle>Looks like something went wrong!</ErrorTitle>
        <ErrorMessage>
          We track errors automatically, but if the 
          problem persists feel free to contact
          us. In the meantime, try refreshing.
        </ErrorMessage>
    </Error>
);

export default ErrorPage;