import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './EmployeeDetail.css'

class EmployeeCard extends Component {
  render() {
    console.log("card render")
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require()} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-petname">{this.props.employee.name}</span></h3>
          <p>Type: {this.props.employee.type}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire me $itch!</button>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
          <button type="button"onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
          <button type="button"onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard