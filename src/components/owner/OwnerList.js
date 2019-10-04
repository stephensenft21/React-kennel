import React, { Component } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owner: []
  };
  deleteEmployee = id => {
    OwnerManager.delete(id)
    .then(() => {
      OwnerManager.getAll()
      .then((newOwner) => {
        this.setState({
            owner: newOwner
        })
      })
    })
  }

  componentDidMount() {
    console.log("Owner LIST: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    OwnerManager.getAll().then(owner => {
      this.setState({
        owner: owner
      });
    });
  }

  render() {
    console.log("Owner LIST: Render");
    console.log(this.state.owner);
    return (
      <div className="container-cards">
        {" "}
        {this.state.owner.map(owner => (
          <OwnerCard 
          key={owner.id} 
          owner={owner} 
          deleteOwner={this.deleteOwner}
          {...this.props}
          />
        ))}{" "}
      </div>
    );
  }
}

export default OwnerList;
