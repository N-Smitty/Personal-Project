import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Litters.scss";
import {
  Segment,
  Button,
  Container,
  Icon,
  Grid,
  Image,
  Divider,
  Input,
} from "semantic-ui-react";

class pricing extends Component {
  render() {
    return (
      <Container >
        <h1>Pricing</h1>
        <Segment style={{ maxWidth: 620 }} className="pricing-sheet">
          <h6>Place A Deposit</h6>
          <h5>Reserve your new puppy today!</h5>
          <p>
            See the puppy of your dreams? Place a deposit today and reserve the
            puppy of your choice before someone else does. Puppies will be
            available at 8 weeks. We ship worldwide at buyers expense. Give one
            of these beauties their FurEver home!
          </p>
          <Button className="form-button" color="teal">
            Buy Now
          </Button>{" "}
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Icon name="cc apple pay" />
                <Icon name="cc amex" />
                <Icon name="cc mastercard" />
                <Icon name="cc visa" />
                <Icon name="cc discover" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default pricing;
