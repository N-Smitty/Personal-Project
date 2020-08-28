import React, { useState } from "react";
import axios from "axios";
import { Segment, Button, Input } from "semantic-ui-react";

export default function Form(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //   };
  // }
  const [fName, setFName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(fName);
  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  function editProfile() {
    axios.put("/api/user/update", this.state).then(() => {
      this.props.history.push("/AccountView");
    });
  }

  return (
    <Segment>
      <Input type="file" name="editImage" />
      <Input
        icon="user"
        iconPosition="left"
        name="firstName"
        value={fName}
        onChange={(e) => setFName(e.target.value)}
        placeholder="First Name"
      />{" "}
      <Input
        icon="user outline"
        iconPosition="left"
        name="last_name"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
        placeholder="Last Name"
      />{" "}
      <Input
        icon="envelope outline"
        iconPosition="left"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john.smith@gmail.com"
      />{" "}
      <Input
        icon="lock"
        iconPosition="left"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />{" "}
      <select class="ui search dropdown">
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <Button onClick={editProfile}>Save Changes</Button>
    </Segment>
  );
}
