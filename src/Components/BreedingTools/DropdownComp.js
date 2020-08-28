import { Dropdown } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
//this will be to select a specific dog to account

class DropdownComp extends Component {
  constructor() {
    super();

    this.state = {
      userId: "",
      options: [],
      selectedDogId: -1,
    };
  }

  componentDidMount() {
    Axios.get("/api/dog/profile", this.props.user.user_id)
      .then((res) => {
        console.log("Dog info: ", res);
        let dogInfos = [];
        dogInfos = res.data.map((dog, i) => {
          return {
            key: i,
            text: dog.dog_name,
            value: dog.dog_id,
          };
        });
        this.setState({
          options: dogInfos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = async (e, { value }) => {
    await this.setState({ selectedDogId: value });
    this.props.updateParentWithDogId(this.state.selectedDogId)
  };

  render() {
    return (
      <>
        <Dropdown
          clearable
          options={this.state.options}
          selection
          onChange={this.handleChange}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(DropdownComp);
