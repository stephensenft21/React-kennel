import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employee: []
  };

  deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => {
        EmployeeManager.getAll()
          .then((newEmployees) => {
            this.setState({
              employee: newEmployees
            })
          })
      })
  }

  componentDidMount() {
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll().then(employee => {
      this.setState({
        employee: employee
      });
      console.log(employee)
    });
  }

  render() {
    console.log("EMPLOYEE LIST: Render");
    console.log(this.state.employee);
    return (

      <>

        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>

            New Employee</button>
        </section>
        <div className="container-cards">
          {"..............."}
          {this.state.employee.map(employee => (

            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={this.deleteEmployee}
              {...this.props} />

          ))}{"................."}
        </div>
      </>
    );
  }
}

export default EmployeeList;
