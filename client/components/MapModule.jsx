import React from 'react';
import { ContentOuterContainer, ContentInnerContainer }from '../styles.js';

const MapModule = () => (
  <React.Fragment>
    <ContentOuterContainer>
      <ContentInnerContainer>
        <h3>Local Information</h3>
      </ContentInnerContainer>
    </ContentOuterContainer>
    <div id="mapModule"></div>
  </React.Fragment>
)

export default MapModule;