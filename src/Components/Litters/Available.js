import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Label,
  Button,
  Divider,
  Segment,
  Grid,
  Image,
} from "semantic-ui-react";

export default class Available extends Component {
  render() {
    return (
      <Container>
          <h1>Available Puppies</h1>
          <Grid celled floated="left" width={5}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="data:image/jpeg;base64,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" />
              </Grid.Column>
              <Grid.Column width={13}>
                <p>Coco</p>
                <p>
                  This dog is from this litter and is this color and blah blah
                  ablah it is a fawn and it will be ready to go home in two
                  weeks
                </p>
                <Label tag as='a'>$1500</Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="https://i.ytimg.com/vi/yvm1pq7bB0k/hqdefault.jpg" />
              </Grid.Column>
              <Grid.Column width={13}>
                <p>Mickey</p>

                <p>
                  This dog is from this litter and is this color and blah blah
                  ablah it is a merle and will be ready to go home beginning of
                  December.
                </p>
                <Label tag as='a'>$2500</Label>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="https://i.pinimg.com/originals/57/ac/53/57ac532f5974a0417d3fbc1dbca34840.jpg" />
              </Grid.Column>
              <Grid.Column width={13}>
                <p>Tank</p>

                <p>
                  This dog is from this litter and is this color and blah blah
                  ablah this is a lilac just like leo and is ready to go home in
                  just a few weeks.
                </p>
                <Label tag as='a'>$3500</Label>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        <Link to="/Pricing">
          <Button color='teal' onClick={this.clearDropdown}>Reserve your puppy</Button>
        </Link>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <h4>Note</h4>
            </Grid.Column>
            <Grid.Column width={13}>
              <p>
                All puppies born will be priced individually. Price varies
                according to Color, Markings, Carrier Genes, Gender, Structure,
                Pedigree, Breeding Rights, etc.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={5}>
            <Grid.Column width={3}>
              <h4>Price Range</h4>
            </Grid.Column>
            <Grid.Column width={5}>
              <span>Standard: Fawn/ Fallow, Red, White</span>
              <p>Fawn/ Fallow - $2,500</p>
              <p>Red - $2,600</p>
              <p>White - $3,000</p>
            </Grid.Column>
            <Grid.Column column="three" width={5}>
              <span>
                Non Standard Colors: Black, Blue, Lilac, Markings, Black Mask,
                Brindle, Merle, Piebald, Ticked, White Markings, Full Suit or
                Tri Points.
              </span>
              <p>Black - $3,500 Blue - $4,000 Lilac - $5,500</p>
              <p>Markings: Black Mask - $3,200 Brindle - $3,600</p>
              <p>Merle - $8,250 Piebald - $7,425 Ticked - $4,325</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button>More Info on Coloring</Button>
      </Container>
    );
  }
}
