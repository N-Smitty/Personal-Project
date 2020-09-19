import React, { useState } from "react";
import { Link } from "react-router-dom";

// import "./Home.scss";
import {
  Accordion,
  Icon,
  Container,
  Step,
  Button,
  Divider,
  Header,
  Grid,
} from "semantic-ui-react";
import pic from "./leoBella.jpg";

export default function Home(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  console.log(activeIndex);
  return (
    <Container>
      <img src={pic} alt="mainPhoto" class="ui massive centered image" />
      
      <h1>Better Bulldogs Co</h1>


      <h3>Steps</h3>
      <Step.Group>
        <Button.Group>
          <Button>Step 1</Button>
          <Step>Login/Register</Step>
          <Button>Step 2</Button>
          <Step>Create dog profile</Step>
          <Button>Step 3</Button>
          <Step>Fill out breeding form</Step>
          <Button>Step 4</Button>
          <Step>Get Results</Step>
        </Button.Group>
      </Step.Group>

      <Header as="h4">
        <Header.Content>
          FAQ's <Header.Subheader>Frequently Asked Questions</Header.Subheader>
        </Header.Content>
      </Header>

      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
      <Container>
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <img
                src={pic}
                alt="mainPhoto"
                class="ui medium centered circular image"
                radius={360}
              />
              <h3>About Us</h3>
              <p>
                We are family owned breeders who take absolute pride in
                producing the highest quality English Bulldogs . We are very
                educated and experienced with the breed and have done everything
                in our power to ensure we provide you with the healthiest and
                most exotic puppy. All of our dogs and puppies are a part of our
                family. They are kept indoors at all times & showered with love.
              </p>{" "}
            </Grid.Column>
            <Grid.Column width={5}>
              <img
                src={pic}
                alt="mainPhoto"
                class="ui medium centered circular image"
                radius={360}
              />

              <h3>Our Puppies</h3>
              <p>
                All puppies are bred with AKC Registered, fully health checked
                parents through UC Davis. They will be available at 8 weeks,
                vaccinated and de-wormed. In addition we offer health
                guarantees. Our English Bulldog puppies are a part of our big
                family. They are brought up around our 3 children and house of
                fellow Bulldogs. This creates a wonderful temperament for your
                home with one of our puppies.{" "}
              </p>
            </Grid.Column>
            <Grid.Column width={5}>
              <img
                src={pic}
                alt="mainPhoto"
                class="ui medium centered circular image"
                radius={360}
              />
              <h3>Exotic DNA</h3>
              <p>
                During the breeding process here at Mamba Bulldogs we strive to
                produce beautiful puppies with exotic coloring and patterns.
                There is an absolute science to the matching of each dog and we
                have gone above and beyond to ensure we do this in the most
                educated and healthy way possible. Our puppies are all carriers
                of color and most of them are labeled triple carriers. Please
                ask about your puppies genetic makeup.
              </p>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider />
      <footer className="footer">
       Copyright &copy; 2020 Better Bulldogs Co. All rights reserved.
      </footer>
    </Container>
  );
}
