import styled from 'styled-components';

export const ContentOuterContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66.6vw;
`;

export const PrimaryButton = styled.button`
  color: rgb(255,255,255);;
  background-color: rgb(0,120,130);
  border-color: transparent;
  box-shadow: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  text-align:center;
  margin: 5px;
  padding: 8px 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    color: rgb(0, 120, 130);
    background-color: rgb(255,255,255);
    border-color:rgb(0, 120, 130);
  }
`
export const ReverseButton = styled.button`
  color: rgb(0,0,0);
  background-color: rgb(255,255,255);
  border-color: transparent;
  box-shadow: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  text-align:center;
  margin: 5px;
  padding: 8px 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    color: rgb(255,255,255);
    background-color: rgb(0, 120, 130);
    border-color:rgb(255,255,255);
  }
`

export const SignupLoginButton = styled.button`
  color: rgb(0,0,0);
  background-color: rgb(255,255,255);
  border-color: rgb(205, 209, 212);
  box-shadow: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  text-align:center;
  margin: 5px;
  padding: 8px 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    background-color: rgba(205, 209, 212, 0.35);
    border-color: rgba(205, 209, 212, 0.35);
  }
`

//Originally for Navbar
export const NavContainer = styled.div`
  background-color: rgb(255,255,255);
  border: 1px solid rgb(232, 233, 234);
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 1px 10px;
  border-bottom: 1px solid rgb(232, 233, 234);
}
`
export const RightNav =styled.div`
display: flex;
align-items: center;
`;

export const LeftNav =styled.div`
display: flex;
align-items: center;
`;
export const Search = styled.input`
  background-color: rgb(245,246,247);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(245,246,247);
  border-radius: 8px 0px 0px 8px;
  margin-left: 10px;
  width: 25vw;
  height: 40px;
  &:focus{
    background-color: white;
  }
`
export const SearchIcon = styled.button`
border: 1px solid red;
padding: 1px 10px;
height: 40px;
display: flex;
align-items: center;
color: white;
background-color: rgb(217, 60, 35);
border-radius: 0px 8px 8px 0px;
&:hover {
  background-color: rgb(170, 60, 35);
}
`