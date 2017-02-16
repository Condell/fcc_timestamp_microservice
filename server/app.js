import express from 'express';
import morgan from 'morgan';
import { createCompleteTimestamp } from './utilities/calcResponse';

const port = process.env.PORT || 3000;
const app = express();


app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.json(createCompleteTimestamp('928357984'));
});


app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp;
  res.json(createCompleteTimestamp(timestamp));
});


// Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
