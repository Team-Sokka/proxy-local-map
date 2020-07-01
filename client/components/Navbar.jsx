import React from 'react';
import { ReverseButton, NavContainer, LeftNav, RightNav, Search, SearchIcon, SignupLoginButton }from '../styles.js';

const Navbar = (props) => (
  <NavContainer>
    <LeftNav>
      <img src="assets/logo_size.jpg"/>
      <Search placeholder={'Honolulu, HI'}/>
      <SearchIcon>
        <i className="fa fa-search" aria-hidden="true"></i>
      </SearchIcon>
      <ReverseButton>Buy</ReverseButton>
      <ReverseButton>Rent</ReverseButton>
      <ReverseButton>Mortgage</ReverseButton>
    </LeftNav>
    <RightNav>
      <ReverseButton>Saved Homes</ReverseButton>
      <ReverseButton>Saved Searches</ReverseButton>
      <SignupLoginButton>Sign up or Log in</SignupLoginButton>
    </RightNav>
  </NavContainer>
)


export default Navbar;