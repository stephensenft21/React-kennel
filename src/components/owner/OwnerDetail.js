import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        type: "",
        loadingStatus: true,
    }
    handleDelete = () => {
      //invoke the delete function in AnimalManger and re-direct to the animal list.
      this.setState({loadingStatus: true})
      OwnerManager.delete(this.props.ownerId)
      .then(() => this.props.history.push("/owners"))
  }


    componentDidMount(){
        console.log("OwnerDetail: ComponentDidMount");
        //get(id) from OwnerManager and hang on to that data; put it into state
        OwnerManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                type: owner.type,
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
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove Owner</button>
          </div>
        </div>
      );
    }
}

export default OwnerDetail;