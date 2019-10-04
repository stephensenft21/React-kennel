import { Route, Redirect } from "react-router-dom";

import React, { Component } from "react";
import Home from "./home/Home";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail"
import AnimalDetail from "./animal/AnimalDetail"
import OwnerDetail from "./owner/OwnerDetail"
// import EmployeeDetail from "./employee/EmployeeDetail"
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/home" render={props => { return <Home /> }} />{" "}


        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }} />

        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        {/*End of Animal Routes*/}

        {/*Beginning Employee Routes*/}

        <Route path="/employees/newEmployee" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }} />

        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />


        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }} />

        <Route exact path="/owners" render={props => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail OwnerId={parseInt(props.match.params.OwnerId)} {...props} />
        }} />







        {/*this route defines the path to the locationForm when the user clicks the new location button */}
        <Route path="/location/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        {/*this route defines the path to the locationList when the user clicks the login button */}
        <Route exact path="/locations" render={props => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />



        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    );

  }
}



export default ApplicationViews;


