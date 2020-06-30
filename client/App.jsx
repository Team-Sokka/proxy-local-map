import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import GalleryModule from './components/GalleryModule.jsx'
import MapModule from './components/MapModule.jsx';
import NearbyListingsModule from './components/NearbyListingsModule.jsx';

const App = (props) => (
  <React.Fragment>
    <Navbar/>
    {/* Breadcrumbs Module */}
    <GalleryModule/>
    {/* Basic Information and Contact Form */}
    {/* 3D View */}
    <MapModule />
    {/* Description */}
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