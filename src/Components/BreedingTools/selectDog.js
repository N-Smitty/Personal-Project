import React, { Component } from "react";
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

class selectDog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogId: "",
    };
  }


  componentDidMount() {
    this.setState({ dogId: this.props.dogId });
  }

  changePage = (route, nav) => {
    this.props.updateDogInfo(this.state.dogId);
    this.props.history.push(`/${route}`);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [dogId, setDogId] = useState("");

  render() {
    return (
      <Container>
        <Segment class="inline fields">
          <h1>Progesterone Tracker</h1>
          <p>Select dog</p>
          <DropdownComp
            class="field"
            updateParentWithDogId={(dogId) => this.state( {dogId} )}
            // onClick={() => this.setState({ dogId })}
          />
          <Link to="/view1">
            <Button
              className="start-btn"
              onClick={() => this.changePage("View1", "next")}
            >
              Get Started
              <Icon name="chevron circle right" />
            </Button>
          </Link>
        </Segment>
        <Progress value="1" total="4" progress="ratio" />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "stateeee");
  return {
    dogInfo: state.dogReducer,
    user: state.userReducer,
  };
}

export default connect(mapStateToProps, { updateDogInfo })(selectDog);
