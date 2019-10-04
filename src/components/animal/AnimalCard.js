import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Animal.css'
import { firstLetterCase } from '../../modules/helpers'
import AnimalManager from '../../modules/AnimalManager';

class AnimalCard extends Component {
  myScopedFunction = () => console.log("Hello World")
  // this.props.deleteAnimal(this.props.animal.id)

  handleDelete = id =>{
    AnimalManager.delete(id).then(() => this.props.getData())


  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img className={this.props.animal.id === 4 ? "spinner" : ""} src={require(`./Images${this.props.url}`)} alt="My Dog" /> */}
          </picture>
          <h3>Name:  <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.handleDelete(this.props.animal.id)}>Discharge</button>
          <button type="button" onClick={this.myScopedFunction}>Push Me</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;