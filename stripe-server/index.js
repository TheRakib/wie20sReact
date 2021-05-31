// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');

const app = express();
const cors = require("cors");

const stripe = require('stripe')('sk_test_51Ix6UrF51NUoOGwBNqtFsnzuLhQ207pYXelVmU2E7Vpi5RRgpVg2q2qXrVk2aYiJw8uYUEBcoyxKl80fijhQLh3m00vnKV9Q5E')

app.use(cors())


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/card',
    cancel_url: 'http://localhost:4242/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

// http://localhost:4242