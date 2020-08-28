import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class DogList extends Component {
    render() {
      let dogs = this.props.dog.dogs;
      let mappedDogs = dogs.map((dog) => {
        return (
          <div>
            <div>
              <p>{dog.name}</p>
              <p>{dog.age}</p>
              <p>{dog.breed}</p>
              <p>{dog.heat}</p>
  
            </div>
            <div>Breeding Info</div>
          </div>
        );
      });
      return (
        <div>
          <button onClick={this.props.history.push("/Progesterone")}>
            Add Another Dog
          </button>
          <div>{mappedDogs}</div>
        </div>
      );
    }
  }
  
  export default connect((state) => state, {})(withRouter(DogList));
  