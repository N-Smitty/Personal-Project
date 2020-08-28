import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './stripe';
import axios from 'axios';
import './stripeCheckout.css';

class stripeCheckout extends Component {
  onToken = async(token) => {
    token.card = void 0;

    await axios.post('/api/payment', {token, amount: 100})
          .then(() => {
            alert('Payment Submitted')
          })
          .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="stripeCheckout">
        <StripeCheckout 
          label='Proceed to Checkout'
          token={this.onToken}
          stripeKey={stripe.publicKey}
          amount={100}
          //shippingAddress={true}
          //billingAddress={true}
          />
      </div>
    );
  }
}

export default stripeCheckout;