// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();



//provider
const cors = require("cors");
const bodyParser = require('body-parser')


//Skriv detta i terminalen : npm install body-parser 
require("dotenv").config()

//http://expressjs.com/en/resources/middleware/body-parser.html






//npm i stripe , privat key from stripe dashboard 
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

//middleware
app.use(cors())
//json hantera
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// ========

//provider  / får vi response 
//api som kan hantera stripe-checkput-session

//domain + /endpoint

// www.medieinstitutet.com /endpoints

// http://localhost:4242/create-checkout-session

//const response = axios.get(http://localhost:4242/get-data)

app.get("/", (req, res)=> {
  res.send("it works")
})
app.get("/get-data", (req,res)=>{

  console.log("vi har triggat den här endpoints");

  res.send("Tack för du har skickat request")

})

app.post('/create-checkout-session', async (req, res) => {  
// request from frontend hanteras här. 

console.log("req body" , req.body)
// name och price 
// req.body 

//business logik 
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'sek',
          product_data: {
            name: req.body.name,
          },
          //Number ((9.99 * 100).toFixed(2))
          unit_amount: req.body.price * 100 ,
        },
        quantity: req.body.quantity,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/card',
    cancel_url: 'http://localhost:3000/booking',
  });

  res.json({ id: session.id});
});

app.listen( process.env.PORT || 4242 , () => console.log(`Listening on port ${4242}!`));

// http://localhost:4242


// separera projektet

// git init

// glöm inte .gitignore och lägga till .env filen

// git add .
// git commit -m " msg"

// heroku create din-app-namn (brukar vara unika namn)

// git push din repo och sedan koppla detta till heroku 

      //alternative git push heroku master

  //Glöm inte env var ska läggas i heroku 