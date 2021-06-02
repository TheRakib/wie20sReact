// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
//Skriv detta i terminalen : npm install body-parser 
require("dotenv").config()
const bodyParser = require('body-parser')
//http://expressjs.com/en/resources/middleware/body-parser.html
const app = express();
const cors = require("cors");

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.use(cors())
//json hantera
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/create-checkout-session', async (req, res) => {



  
// request from frontend hanteras här. 


console.log("req body" , req.body)
// name och price 
// req.body 



  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: req.body.name,
          },
          //Number ((9.99 * 100).toFixed(2))
          unit_amount: req.body.price*100 ,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/card',
    cancel_url: 'http://localhost:4242/cancel.html',
  });

  res.json({ id: session.id});
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

// http://localhost:4242