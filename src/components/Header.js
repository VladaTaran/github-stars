import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

const HeaderContainer = styled.div`
  display: block;
  background-color: #24292e;
  padding: 12px 0;
  text-align: left;
`
const HeaderTitle = styled.div`
  color: white;
  align-items: center;
  display: flex;
`
const HeaderLink = styled.a`
  text-decoration: none;
`

const HeaderAbout = styled.p`
  margin: 0 auto;
  text-align: center;
  color: hsla(0,0%,100%,.7);
`

const GitHubIcon = styled(GoMarkGithub)`\
  color: white; 
  height: 32px; 
  width: 32px; 
  padding-left: 40px;
`

const Header = () => (
    <HeaderContainer>
        <HeaderTitle>
          <HeaderLink href='https://github.com/'>
          <GitHubIcon />
          </HeaderLink>
          <HeaderAbout>Git Hub Stars</HeaderAbout>
        </HeaderTitle>
    </HeaderContainer>
);

export default Header;