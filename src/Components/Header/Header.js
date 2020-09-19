import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import {
  Menu,
  Icon,
  MenuItem,
  Dropdown,
  Button, DropdownItem
} from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/userReducer";

function Header(props) {
  // const [dropdownView, setDropdownView] = useState("");

  // const aboutDropdown = () => {
  //   setDropdownView("About");
  // };

  // const litterDropdown = () => {
  //   setDropdownView("Litter");
  // };

  // const breedingDropdown = () => {
  //   setDropdownView("Breeding");
  // };

  // const clearDropdown = () => {
  //   setDropdownView("");
  // };

  const logoutUser = () => {
    console.log("hit head");
    axios.post("/api/logout").then(() => {
      props.history.push("/");
      props.logoutUser();
    });
  };

  console.log(props.user);
  return (
    <>
      <Menu fixed="top" className="main-header">
        <h2>Better Bulldogs Co</h2>

        <Dropdown.Item header as={Link} to="/">Home</Dropdown.Item>
        <Dropdown text="About" pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="The Breed" as={Link} to="/AboutBreed" />
            <Dropdown.Item text="About Us" as={Link} to="/" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Litters" pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="Gallery" as={Link} to="/Gallery" />
            <Dropdown.Item text="Available" as={Link} to="/Available" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Breeding" pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="Progesterone Tracker" as={Link} to="/SelectDog" />
            <Dropdown.Item text="Stud Service" as={Link} to="/Stud" />
          </Dropdown.Menu>
        </Dropdown>
        <DropdownItem header as={Link} to="/Pricing">Reserve Puppy</DropdownItem>
        <DropdownItem header as={Link} to="/Contact">Contact Us</DropdownItem>
        <Dropdown className="profile" text="Profile" pointing="top left">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/AccountView' text="My Account" icon="user" />
                 <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
                 {!props.user ? (

                 <Button as={Link} to="/Auth" basic button>Login</Button>
                 ) : (

                  <Dropdown.Item as={Link} to="/" onClick={() => logoutUser()} text="Sign Out" icon="power" />
                  )}
                </Dropdown.Menu>
              </Dropdown>

      </Menu>
    </>
  );
}



function mapStateToProps(state) {
  console.log(state.user.user);
  return {
    user: state.user.user,
  };
}
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));





{/* <Menu className="main-header">
  <Link to="/">
    <h1>Better Bulldogs Co</h1>
  </Link>
  <Link to="/">
    <a class="item">Home</a>
  </Link>
  <nav class="menu">
    <span class="item" onClick={this.aboutDropdown}>
      About
    <i class="dropdown icon"></i>
    </span>
      {this.state.dropdownView === "About" ? (
        <div className="view">
          <Link to="/AboutBreed">
            <span class="item" onClick={this.clearDropdown}>
              The Breed
            </span>
          </Link>
          <Link to="/">
            <span class="item" onClick={this.clearDropdown}>
              About Us
            </span>
          </Link>
        </div>
      ) : null}
      </nav>
    <nav class="menu">
      <span class="item" onClick={this.litterDropdown}>
        Litters
        <i class="dropdown icon"></i>
      </span>
      {this.state.dropdownView === "Litter" ? (
        <div className="dropdownView">
          <Link to="/Gallery">
            <span class="item" onClick={this.clearDropdown}>
              Gallery
            </span>
          </Link>
          <Link to="/Available">
            <span class="item" onClick={this.clearDropdown}>
              Available
            </span>
          </Link>
        </div>
      ) : null}
    </nav>
    <nav class="menu">
      <span class="item" onClick={this.breedingDropdown}>
        Breeding
        <i class="dropdown icon"></i>
      </span>
      {this.state.dropdownView === "Breeding" ? (
        <div className="dropdownView">
          <Link to="/Stud">
            <span class="item" onClick={this.clearDropdown}>
              Stud Service
            </span>
          </Link>
          <Link to="/Progesterone">
            <span class="item" onClick={this.clearDropdown}>
              Progesterone Tracker
            </span>
          </Link>
        </div>
      ) : null}
    </nav>
    <nav>
      <Link class="item" to="/Contact">
        <span>Contact</span>
      </Link>
    </nav>
    <nav>
      <Link to="/Pricing">
        <span class="item" onClick={this.clearDropdown}>
          Reserve Puppy
        </span>
      </Link>
    </nav>
    <nav>
      <Link to="/AccountView">
        <span class="item">Account</span>
      </Link>
    </nav>
    <div class="ui right floated header" >
      {!this.props.user ? (
        <Link to="/Auth">
          <Button className="login-btn">Login</Button>
        </Link>
      ) : (
        <Button onClick={() => this.logoutUser()} className="login-btn">
          Logout
          <Icon name="power off" />
        </Button>
      )}
    </div>
</Menu>
<div className="nav-bar__height"></div>
</> */}