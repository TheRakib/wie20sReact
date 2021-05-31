import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ix6UrF51NUoOGwBeJKofEacEehk3bci5bhtgPYZBjo4D7FzQbAfxiAMkQvr7w1odNcyvmpiE16rlqUVuOvNflwR00qtJcp5GI');

function Booking({name, time, price}) {
    return (
        <div>
          <li> name: {name}</li> 
           <li>time : {time}  </li> 
           <li>price: {price }</li>


<h1> Betala nu?</h1>

    <button role="link">
      Checkout
    </button> 
          
 </div>
    )
}

export default Booking
//kl. 10.00