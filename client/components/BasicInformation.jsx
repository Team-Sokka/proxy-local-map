import React from 'react';
import ContactAgent from './ContactAgent.jsx';
import MapModule from './MapModule.jsx';
import {ContentOuterContainer, ContentInnerContainerRow, BasicInformationGrid, BasicInformationSectionOne, BasicInformationSectionTwo, BasicInformationFormSection, BasicInformationLocalSection, FontAwesomeIcon, PrimaryButton } from '../styles.js'
const BasicInformation = (props) => (
  <ContentOuterContainer>
    <ContentInnerContainerRow>
      <BasicInformationGrid>
        <BasicInformationSectionOne>
          <h1>3859 Owena St.</h1>
          <div>Honolulu, HI 96825</div>
          <FontAwesomeIcon className="fa fa-bed" aria-hidden="true"> 5 Beds</FontAwesomeIcon>
          <FontAwesomeIcon className="fa fa-bath" aria-hidden="true"> 4 Baths</FontAwesomeIcon>
          <FontAwesomeIcon className="fa fa-calculator" aria-hidden="true"> 3,393 Sqft</FontAwesomeIcon>

        </BasicInformationSectionOne>
        <BasicInformationSectionTwo>
          <h1>$3,499,000 <svg className="svgMap" data-testid="property-trend-down" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#007822"></path></svg></h1>
          <span style={{textDecoration:"line-through"}}>$3,999,000</span><br/>
          <PrimaryButton>Get Pre-Qualified</PrimaryButton>
        </BasicInformationSectionTwo>
        <BasicInformationFormSection>
          <ContactAgent />
        </BasicInformationFormSection>
        <BasicInformationLocalSection>
          <MapModule/>
        </BasicInformationLocalSection>
      </BasicInformationGrid>


    </ContentInnerContainerRow>
  </ContentOuterContainer>

)

export default BasicInformation;