import React from 'react';
import {FormContainer, Form, FlexContainerRow, SimpleInput, MessageText, Submit, CheckboxContainer, CheckBox, LegalDisclaimer} from '../styles.js'

const ContactAgent = (props) => (
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
)




export default ContactAgent;