import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Breeding.scss";
import { updateDogInfo } from "../../Redux/dogReducer";
import { connect } from "react-redux";
import {
  Segment,
  Button,
  Input,
  Container,
  Progress,
  Icon,
} from "semantic-ui-react";
import DropdownComp from "./DropdownComp";

function Progesterone(props) {
  // const [dogId, setDogId] = useState("");
  const [ng_ml, setNgml] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

 const changePage = (route, nav) => {
    this.props.updateInsemination(this.state.selectedOption);
    this.props.history.push(`/${route}`);
  };

  return (
    <Container text-align="center" class="ui form">
      <Segment class="inline fields">
        {/* <p>Select dog</p>
          <DropdownComp class='field'
            updateParentWithDogId={(dogId) => setDogId( dogId )}
          /> */}
        <Input
          icon="chart bar outline"
          iconPosition="left"
          name="ng_ml"
          value={ng_ml}
          onChange={(e) => setNgml(e.target.value)}
          placeholder="ng_ml"
        />{" "}
        <Input
          class="field"
          name="date_taken"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date Taken"
        />{" "}
        <Input
          class="field"
          type="time"
          name="time_taken"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time Taken"
        />
         <Button
              onClick={() => this.changePage("SelectDog", "prev")}
            >
              Prev
            </Button>
        <Link to="/view1">
          <Button
            className="start-btn"
            onClick={() =>
              props.updateDogInfo({
                ng_ml: ng_ml,
                date_taken: date,
                time_taken: time,
              })
            }
          >
            Next <Icon name="chevron circle right" />
          </Button>
        </Link>
      </Segment>
      <Progress value="2" total="4" progress="ratio" />
    </Container>
  );
}

function mapStateToProps(state) {
  console.log(state, "stateeee");
  return {
    dogInfo: state.dogReducer,
    user: state.userReducer,
  };
}

export default connect(mapStateToProps, { updateDogInfo })(Progesterone);
