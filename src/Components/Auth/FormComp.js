import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Segment, Button, Input, Form, Container } from "semantic-ui-react";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog_name: "",
      dog_age: "",
      breed: "",
      heat_number: "",
      insemination_type: "",
      //   ng_ml: "",
      //   date_taken: "",
      //   time_taken: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  createDog = () => {
    axios.post("/api/createDog", this.state).then(() => {
      this.props.history.push("/AccountView");
    });
  };

  render() {
    return (
      <Form>
        <Input type="file" />
        <Input
          icon="heart outline"
          iconPosition="left"
          name="dog_name"
          value={this.state.dog_name}
          onChange={this.handleChange}
          placeholder="Dog Name"
        />
        <Input
          icon="calendar outline"
          iconPosition="left"
          name="dog_age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Dog Age"
        />{" "}
        <Input
          icon="info"
          iconPosition="left"
          name="breed"
          value={this.state.breed}
          onChange={this.handleChange}
          placeholder="Breed"
        />{" "}
        <Input
          icon="hashtag"
          iconPosition="left"
          name="heat_number"
          value={this.state.heat_number}
          onChange={this.handleChange}
          placeholder="Number of Heat"
        />{" "}
        {/* <input
          name="insemination_type"
          value={this.state.insemination_type}
          onChange={this.handleChange}
          placeholder=""
        />{" "} */}
        <Link to="/AccountView">
          <Button onClick={this.createDog}>Add Dog</Button>
        </Link>
      </Form>
    );
  }
}

export default FormComp;
