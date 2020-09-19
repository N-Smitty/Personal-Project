import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ModalComp(props) {
  const [open, setOpen] = React.useState(false);
  console.log(props);
  const handleClick = () => {
    // axios.post()
  };

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button onClick={handleClick}>Submit Results</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your form has been submitted. Better Bulldogs Co will get back to you
          within the next hour. Return to <Link to="/">Home Page</Link>.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState.dog;
};

export default connect(mapStateToProps)(ModalComp);
