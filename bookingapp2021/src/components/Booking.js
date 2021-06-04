import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import  axios from "axios"

const stripePromise = loadStripe('pk_test_51Ix6UrF51NUoOGwBeJKofEacEehk3bci5bhtgPYZBjo4D7FzQbAfxiAMkQvr7w1odNcyvmpiE16rlqUVuOvNflwR00qtJcp5GI');
function Booking({name, time, price}) {

//11.40

const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    const quantity = 3; // state /props 
    // Call your backend to create the Checkout Session

    // konsumerar / request 
    const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name,price:price, quantity:quantity})
    //('/create-checkout-session', { method: 'POST' });

    console.log(response)

    const sessionId = response.data.id

    console.log(sessionId)
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };


    return (
        <div>
          <li> name: {name}</li> 
           <li>time : {time}  </li> 
           <li>price: {price }</li>
    

<h1> Betala nu?</h1>

    <button role="link" onClick={handleClick} >
      Checkout
    </button> 
          
 </div>
    )
}

export default Booking
//kl. 10.00