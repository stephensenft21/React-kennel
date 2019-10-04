import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './OwnerDetail.css'

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require()} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-petname">Billy</span></h3>
          <p>Type: Human</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove Owner</button>
          <Link to={`/owners/${this.props.owner.id}`}><button> Owner Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard