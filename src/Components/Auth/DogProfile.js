import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
import axios from "axios";
import {
  Segment,
  Container,
  Button,
  Input,
  Icon,
  Label,
} from "semantic-ui-react";

// import './Breeding.scss';

export default function DogProfile(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [heat, setHeat] = useState("");
  const inseminationType = "";
  const ng_ml = 0;

  console.log(name);
  console.log(age);
  console.log(heat)
  console.log(breed);
  const createDog = () => {
    const body = { name, age, breed, heat, inseminationType, ng_ml };
    axios.post("/api/createDog", body);
    props.history.push("/AccountView");
  };

  return (
    <Container className="form">
      <Segment>
        <h3>Step 2</h3>
        <span>
          Thank you for registering with us! Welcome to our bulldog family.
          Please fill out your Dam’s info.
        </span>
      </Segment>
      <Segment>
        <Link to="/AccountView">
          <Button>cancel dog profile</Button>
        </Link>
      </Segment>
      <div>
        <Segment className="form-container">
          <h4>Tell us about your dog</h4>
          <label>Name</label>
          <Input
            className="form-inputs"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <label>Age</label>
          <Input
            className="form-inputs"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Input>
          <label>Breed</label>
          <Input
            className="form-inputs"
            placeholder="Enter Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          ></Input>
          <label>Heat</label>
          <Input
            className="form-inputs"
            placeholder="Number of Heat"
            value={heat}
            onChange={(e) => setHeat(e.target.value)}
          ></Input>
        </Segment>
      </div>
      <Button onClick={() => createDog()}>Submit</Button>
    </Container>
  );
}
