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
  max-width: 992px;
`;
export const ContentInnerContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 66.6vw;
  max-width: 992px;
`;

export const BasicInformationGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  width: 100%;
`
export const BasicInformationSectionOne = styled.div`
  grid-column: 1;
  > h1 {
    font-size: 28px;
  }
`

export const BasicInformationSectionTwo = styled.div`
  grid-column: 2;
  > h1 {
    font-size: 28px;
  }
`

export const BasicInformationFormSection = styled.div`
  grid-column: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`

export const BasicInformationLocalSection = styled.div`
grid-column-start: 1;
grid-column-end: 3;
grid-row: 2;
`

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

export const FontAwesomeIcon = styled.i`
  padding: 10px 10px 10px 0px;
  color: #869099;
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

//Contact Agent

export const FlexContainerRow = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

export const FormContainer = styled.div`
padding: 16px;
`

export const Form = styled.form`
border-radius: 5px;
overflow:scroll;
max-height: 87%;
display: flex;
flex-direction: column;
align-items: center;
`
export const SimpleInput = styled.input`
display: inline-block;
border-radius: 8px;
border-color: rgb(205, 209, 212);
border-style: solid;
border-width: 1px;
padding: 8px;
font-size: 16px;
line-height: 1.5;
width: 94%;
margin: 8px;
`

export const MessageText = styled.textarea`
border-radius: 8px;
border-color: rgb(205, 209, 212);
border-style: solid;
border-width: 1px;
padding: 8px;
font-size: 16px;
line-height: 1.5;
height: 78px;
width: 94%;
margin: 8px;
resize: none;
`

export const Submit = styled.button`
display: inline-block;
border-radius: 8px;
border-color: rgb(217, 60, 35);
border-style: solid;
border-width: 1px;
padding: 8px;
font-size: 16px;
line-height: 1.5;
width: 100%;
margin: 8px;
background-color: rgb(217, 60, 35);
color: rgb(255, 255, 255);
font-weight: 400;
transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
&:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(217, 60, 35);
}
`
export const CheckboxContainer = styled.div`
display: flex;
width: 100%;
color: rgb(134, 144, 153);
font-size: 12px;
line-height: 2;
margin: 3px;
align-items: center;
`;

export const CheckBox = styled.input`
display: inline-block;
border-radius: 8px;
border-color: rgb(205, 209, 212);
border-style: solid;
border-width: 1px;
font-size: 16px;
line-height: 1.5;
`

export const LegalDisclaimer = styled.div`
font-size: 10px;
line-height: 16px;
color: rgb(134, 144, 153);
`