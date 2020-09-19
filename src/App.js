import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";
import { connect } from "react-redux";
import axios from "axios";
import { updateUser } from "./Redux/userReducer";
import "semantic-ui-css/semantic.min.css";
import { Responsive, Segment, Container } from "semantic-ui-react";

function App(props) {
  // useEffect(() => {
  //   axios.get("/auth/session").then((res) => {
  //     props.updateUser(res.data);
  //   });
  // });

  return (
    <Responsive as={Segment} minWidth={320} maxWidth={2559}>
      <Container className="main">
        <HashRouter>
          <div>
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Container>
    </Responsive>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { updateUser })(App);
