import React from 'react';
import styled from 'styled-components';
const ContactAgent = (props) => (
  <React.Fragment>
{/*  */}
  <FormContainer>
    <Form>
      <FlexContainerRow>
        <SimpleInput placeholder={'Name'} type={'text'} value={''}></SimpleInput>
        <SimpleInput placeholder={'Phone'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type={'tel'} value={''} ></SimpleInput>
      </FlexContainerRow>
      <SimpleInput placeholder={'Email'} type={'email'} value={''}></SimpleInput>
      <MessageText type={'text'} value={''} placeholder={'I am interested in 3 Lumahai St, Honolulu, HI 96825'}></MessageText>
      <Submit>Request Info</Submit>
      <CheckboxContainer>
        <CheckBox type={'checkbox'}/><label style={{marginBottom: "0px"}}>I want to talk about financing</label>
      </CheckboxContainer>
    </Form>
    <LegalDisclaimer>
    By pressing Request Info, you agree that House Reactor and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our <a target="_blank" href="https://www.trulia.com/terms">Terms of Use</a>&nbsp;House Reactor does not endorse any <span><a target="_blank">real estate professionals</a></span>&nbsp;
    </LegalDisclaimer>
  </FormContainer>
{/*  */}
  </React.Fragment>
)

const SubmitButton = styled.button`
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: white;
    color: red;
  }
`

const FlexContainerRow = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

const FormContainer = styled.div`
padding: 16px;
`

const Form = styled.form`
border-radius: 5px;
overflow:scroll;
max-height: 87%;
display: flex;
flex-direction: column;
align-items: center;
`
const SimpleInput = styled.input`
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

const MessageText = styled.textarea`
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

const Submit = styled.button`
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
const CheckboxContainer = styled.div`
display: flex;
width: 100%;
color: rgb(134, 144, 153);
font-size: 12px;
line-height: 2;
margin: 3px;
align-items: center;
`;

const CheckBox = styled.input`
display: inline-block;
border-radius: 8px;
border-color: rgb(205, 209, 212);
border-style: solid;
border-width: 1px;
font-size: 16px;
line-height: 1.5;
`

const LegalDisclaimer = styled.div`
font-size: 10px;
line-height: 16px;
color: rgb(134, 144, 153);
`

export default ContactAgent;