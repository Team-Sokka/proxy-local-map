import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Breadcrumbs from './components/Breadcrumbs.jsx';
import GalleryModule from './components/GalleryModule.jsx';
import BasicInformation from './components/BasicInformation.jsx'
import MapModule from './components/MapModule.jsx';
import Description from './components/Description.jsx';
import NearbyListingsModule from './components/NearbyListingsModule.jsx';

const App = (props) => (
  <React.Fragment>
    <Navbar/>
    <Breadcrumbs/>
    <GalleryModule/>
    {/* Basic Information and Contact Form */}
    <BasicInformation />
    {/* 3D View */}
    {/* <MapModule /> */}
    <Description />
    {/* Home Details */}
    {/* Price History */}
    <NearbyListingsModule/>
    {/* Similar Homes */}
    {/* New Listings */}

    {/* END of Basic Reqs */}
    {/* Property Taxes and Assessment */}
    {/* Price Trends */}
    {/* Comparable Map */}
    {/* Comparable Addresses */}
    {/* Neighborhood Overview */}
    {/* What Locals Say */}
    {/* LGBT Local Legal Protections */}
    {/* Affodability */}
    {/* Contact An Agent */}
    {/* Listing Provided By */}
    {/* Footer */}
  </React.Fragment>
)

ReactDOM.render(<App/>, document.getElementById('app'));