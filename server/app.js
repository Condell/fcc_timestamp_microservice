import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';


const port = process.env.PORT || 3000;
const app = express();
const jsonParser = bodyParser.json;


app.use(morgan('dev'));
app.use(jsonParser());


app.param('timestamp', (req, res, next, value) => {
  req.body.timestamp = value; // eslint-disable-line no-param-reassign
  next();
});


app.get('/', () => {

});


app.get('/:timestamp', (req, res) => {
  res.json({
    timestamp: req.body.timestamp,
  });
});

// Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
