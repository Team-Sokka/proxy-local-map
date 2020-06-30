import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx'
import Map from './components/MapModule.jsx'


const App = (props) => (
  <React.Fragment>
    <Navbar/>
    {/* Breadcrumbs Module */}
    {/* Gallery Module */}
    {/* Basic Information and Contact Form */}
    {/* 3D View */}
    <Map />
    {/* Description */}
    {/* Home Details */}
    {/* Price History */}
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