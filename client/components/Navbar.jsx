import React from 'react';
import styled from 'styled-components';

const Navbar = (props) => (
  <NavContainer>
    <h1>Navigation</h1>
    <Search/>

  </NavContainer>
)

const NavContainer = styled.div`
  background-color: rgb(255,255,255);
  border: 1px solid rgb(232, 233, 234);
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
`
const Search = styled.input`
  background-color: rgb(245,246,247);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(245,246,247);
  padding: 8px 64px 8px 16px;
`

export default Navbar;