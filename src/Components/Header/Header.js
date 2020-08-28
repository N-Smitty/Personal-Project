import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { Menu, Container, Segment, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/userReducer";

function Header(props) {
  const [dropdownView, setDropdownView] = useState("");

  const aboutDropdown = () => {
    setDropdownView("About");
  };

  const litterDropdown = () => {
    setDropdownView("Litter");
  };

  const breedingDropdown = () => {
    setDropdownView("Breeding");
  };

  const clearDropdown = () => {
    setDropdownView("");
  };

  const logoutUser = () => {
    console.log("hit head");
    axios.post("/api/logout").then(() => {
      props.history.push("/")
      props.logoutUser()
    })
  };

  console.log(props.user);
  return (
    <>
      <Menu className="main-header">
        <Link to="/">
          <h1>Better Bulldogs Co</h1>
        </Link>
        <Link to="/">
          <a class="item">Home</a>
        </Link>
        <nav>
          <span class="item" onClick={aboutDropdown}>
            About
            <i class="dropdown icon"></i>
          </span>
          {dropdownView === "About" ? (
            <div className="view">
              <Link to="/AboutBreed">
                <span class="item" onClick={clearDropdown}>
                  The Breed
                </span>
              </Link>
              <Link to="/">
                <span class="item" onClick={clearDropdown}>
                  About Us
                </span>
              </Link>
            </div>
          ) : null}
        </nav>
        <nav class="menu">
          <span class="item" onClick={litterDropdown}>
            Litters
            <i class="dropdown icon"></i>
          </span>
          {dropdownView === "Litter" ? (
            <div className="dropdownView">
              <Link to="/Gallery">
                <span class="item" onClick={clearDropdown}>
                  Gallery
                </span>
              </Link>
              <Link to="/Available">
                <span class="item" onClick={clearDropdown}>
                  Available
                </span>
              </Link>
            </div>
          ) : null}
        </nav>
        <nav class="menu">
          <span class="item" onClick={breedingDropdown}>
            Breeding
            <i class="dropdown icon"></i>
          </span>
          {dropdownView === "Breeding" ? (
            <div className="dropdownView">
              <Link to="/Stud">
                <span class="item" onClick={clearDropdown}>
                  Stud Service
                </span>
              </Link>
              <Link to="/Progesterone">
                <span class="item" onClick={clearDropdown}>
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
            <span class="item" onClick={clearDropdown}>
              Reserve Puppy
            </span>
          </Link>
        </nav>
        <nav>
          <Link to="/AccountView">
            <span class="item">Account</span>
          </Link>
        </nav>
        <div class="ui right floated header">
          {!props.user ? (
            <Link to="/Auth">
              <Button className="login-btn">Login</Button>
            </Link>
          ) : (
            <Button onClick={() => logoutUser()} className="login-btn">
              Logout
              <Icon name="power off" />
            </Button>
          )}
        </div>
      </Menu>
      <div className="nav-bar__height"></div>
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

// <>
// <Menu class="ui dropdown">
//   <Link to="/">
//     <h1>Better Bulldogs Co</h1>
//   </Link>
//   <Link to="/">
//     <a class="item">Home</a>
//   </Link>
//   <nav class="menu">
//     <span class="item" onClick={this.aboutDropdown}>
//       About
//     <i class="dropdown icon"></i>
//     </span>
//       {this.state.dropdownView === "About" ? (
//         <div className="view">
//           <Link to="/AboutBreed">
//             <span class="item" onClick={this.clearDropdown}>
//               The Breed
//             </span>
//           </Link>
//           <Link to="/">
//             <span class="item" onClick={this.clearDropdown}>
//               About Us
//             </span>
//           </Link>
//         </div>
//       ) : null}
//       </nav>
//     <nav class="menu">
//       <span class="item" onClick={this.litterDropdown}>
//         Litters
//         <i class="dropdown icon"></i>
//       </span>
//       {this.state.dropdownView === "Litter" ? (
//         <div className="dropdownView">
//           <Link to="/Gallery">
//             <span class="item" onClick={this.clearDropdown}>
//               Gallery
//             </span>
//           </Link>
//           <Link to="/Available">
//             <span class="item" onClick={this.clearDropdown}>
//               Available
//             </span>
//           </Link>
//         </div>
//       ) : null}
//     </nav>
//     <nav class="menu">
//       <span class="item" onClick={this.breedingDropdown}>
//         Breeding
//         <i class="dropdown icon"></i>
//       </span>
//       {this.state.dropdownView === "Breeding" ? (
//         <div className="dropdownView">
//           <Link to="/Stud">
//             <span class="item" onClick={this.clearDropdown}>
//               Stud Service
//             </span>
//           </Link>
//           <Link to="/Progesterone">
//             <span class="item" onClick={this.clearDropdown}>
//               Progesterone Tracker
//             </span>
//           </Link>
//         </div>
//       ) : null}
//     </nav>
//     <nav>
//       <Link class="item" to="/Contact">
//         <span>Contact</span>
//       </Link>
//     </nav>
//     <nav>
//       <Link to="/Pricing">
//         <span class="item" onClick={this.clearDropdown}>
//           Reserve Puppy
//         </span>
//       </Link>
//     </nav>
//     <nav>
//       <Link to="/AccountView">
//         <span class="item">Account</span>
//       </Link>
//     </nav>
//     <div className="auth-btns">
//       {!this.props.user ? (
//         <Link to="/Auth">
//           <Button className="login-btn">Login</Button>
//         </Link>
//       ) : (
//         <Button onClick={() => this.logoutUser()} className="login-btn">
//           Logout
//           <Icon name="power off" />
//         </Button>
//       )}
//     </div>
// </Menu>
// <div className="nav-bar__height"></div>
// </>
