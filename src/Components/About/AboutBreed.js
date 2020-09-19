import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Segment, Container, Image } from "semantic-ui-react";
import Tabs from "./Tabs";

const src = '/images/wireframe/image-text.png'

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
