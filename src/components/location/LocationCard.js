import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './LocationDetail.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require()} alt="My Dog" /> */}
          </picture>
          <h3>Location Name:<span className="card-ptname">{this.props.location.name}</span></h3>
          <p>Address: {this.props.location.address} </p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close a Location</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Location Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard