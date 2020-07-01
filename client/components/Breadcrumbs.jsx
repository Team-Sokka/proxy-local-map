import React from 'react';
import {ContentOuterContainer, ContentInnerContainerRow } from '../styles.js'

const Breadcrumbs = (props) => (
  <ContentOuterContainer style={{padding: "10px"}}>
    <ContentInnerContainerRow>
      <span style={{color: "rgb(0, 120, 130)"}}>
        <span style={{padding: "0px 20px 0px 0px"}}>Back To Search </span>
        <span> For Sale > HI > Honolulu > 96825 > 9 Lumahai St.</span>
      </span>
    </ContentInnerContainerRow>
  </ContentOuterContainer>
)

export default Breadcrumbs;