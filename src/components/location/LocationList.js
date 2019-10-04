import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    location: []
  };
  deleteLocation = id => {
    LocationManager.delete(id)
    .then(() => {
      LocationManager.getAll()
      .then((newLocation) => {
        this.setState({
            location: newLocation
        })
      })
    })
  }

  componentDidMount() {
    console.log("Location LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll().then(location => {
      this.setState({
        location: location
      });
    });
  }

  render() {
    console.log("Location LIST: Render");
    console.log(this.state.location);
    return (
      <div className="container-cards">
        {" "}
        {this.state.location.map(location => (
          <LocationCard 
          key={location.id} 
          location={location}
          deleteLocation={this.deleteLocation} 
          {...this.props}
          />
        ))}{" "}
      </div>
    );
  }
}

export default LocationList;
