import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import {
  Segment,
  Label,
  Container,
  Icon,
  Grid,
  Image,
  Divider,
  Input,
} from "semantic-ui-react";

class Stud extends Component {
  render() {
    return (
      <Segment>
        <p className="form">
          Sir Leo is open for stud! You're not going to want to miss out on this
          health and sperm tested boy! He is going to make some waves. AKC
          registered! UPDATE Leo's last 5 litters have averaged 7 pups! If you
          want big healthy litters, Leo is your guy! Leo has some of the
          healthiest sperm in the state. Great mobility is fantastic count! Due
          to corona, we have decided to keep his into rate at $750 for the rest
          of the year. This is an amazing deal! normal rate is $1500 this
          includes 3 artificial insemination's done at our place! We are
          guaranteeing a litter. If she doesn't take, we will either stud again
          at the next heat or give a full cash refund. We're invested in your
          success! Leo is a true lilac caring dd bb NN atat Chocolate, Black,
          Blue and the dilute variant. In addition, he carries BOTH Tri variants
          and shows them fantastically! Not only will he give a HUGE variety to
          the color of your program, but will also help structurally. Leo is a
          Kodiak/Frankie decedent; some of the best colored bulldogs out there.
          Additional pictures of the dam and sire along with Leo’s past litters
          are also attached Lastly, you can expect great assistance post
          insemination. We love helping people produce healthy happy bulldogs!
        </p>

        <Link to="/Contact">
          <Label as="a" content="Message us about Leo" icon="mail" />
        </Link>
      </Segment>
    );
  }
}

export default Stud;
