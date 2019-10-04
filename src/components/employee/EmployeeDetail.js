import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
    name: "",
    type: "",
    loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    EmployeeManager.delete(this.props.employeeId)
      .then(() => this.props.history.push("/employees"))
  }

  componentDidMount() {
    console.log("EmployeeDetail: ComponentDidMount",this.props.employeeId);
    //get(id) from EmployeeManager and hang on to that data; put it into state
    EmployeeManager.get(this.props.employeeId)
      .then((employee) => {
        this.setState({
          name: employee.name,
          type: employee.type,
          loadingStatus: false
        });
      });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
          <p>Type: {this.state.type}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire Me Bitch!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;