import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";
import Tabs from "./Tabs";

class AboutBreed extends Component {
  render() {
    return (
      <Container className="AboutBreed">
        <Tabs />
      </Container>
    );
  }
}

export default AboutBreed;
