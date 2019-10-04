import React, { Component } from "react";
//import the components we will need
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };



  getData = () => {

    AnimalManager.getAll().then(animals => {
      this.setState({
        animals: animals
      });
    });
    
  }
 

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    this.getData()
  }



  render() {
    console.log("ANIMAL LIST: Render");
    console.log(this.state.animals);
    return (
      <React.Fragment>

        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>

            Lets Make a PUPPY</button>
        </section>

        <div className="container-cards">
          {" "}
          {this.state.animals.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          ))
          }
          {" "}
        </div>
      </React.Fragment>
    );
  }
}

export default AnimalList;
