import express from 'express';
import morgan from 'morgan';


const port = process.env.PORT || 3000;
const app = express();


app.use(morgan('dev'));


app.get('/', () => {});


// app.get('/:timestamp', (req, res) => {
//   let timestamp = req.params.timestamp;
// });


// Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
