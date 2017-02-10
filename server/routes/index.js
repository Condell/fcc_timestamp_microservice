// import function for determining if query string is a string or number

import express from 'express';
import bodyParser from 'body-parser';


const router = express.Router();
const jsonParser = bodyParser.json();


// Set up pre-condition for "queryString"
// to check if it is a number or a string


router.get('/', jsonParser, (req, res) => {
  res.json({
    message: 'Responding with json',
  });
});


export default router;

// GET'/:queryString?' should send a json object to the server for evaluation
