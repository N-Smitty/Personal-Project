import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breeding.scss";
import Chart from "../Chart";
import axios from "axios";
import { connect } from "react-redux";
import { Segment, Button, Container, Progress } from "semantic-ui-react";
import ModalComp from "./ModalComp";

class view2 extends Component {
  constructor() {
    super();
    this.state = {
      results: {},
    };
  }
  componentDidMount() {
    let data = {
      dogId: this.props.dog.dogId,
      insemination: this.props.dog.insemination,
      dateTaken: this.props.dog.dateTaken,
      timeTaken: this.props.dog.timeTaken,
      nanograms: this.props.dog.nanograms,
    };
    console.log("data: ", data);
    axios
      .put("/api/dog/update", data)
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container className="form">
        <Segment>
          <h4>Let's take a look at your results!</h4>
          <h5>
            This method will no longer be effective. Consider Surgical
            Insemination.
          </h5>
          <Chart data="results" />
          <div className="view2-btns">
            <Link to="/View1">
              <Button className="form-button">Prev</Button>
            </Link>
            <ModalComp />
          </div>
        </Segment>
        <Progress
          value="4"
          total="4"
          progress="ratio"
          className="progress-bar"
        />
      </Container>
    );
  }
}

export default connect((state) => state, {})(view2);
