import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createCompleteTimestamp } from './utilities/calcResponse';

const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';


if (env === 'development') {
  app.use(morgan('dev'));
}


app.use(cors());


app.get('/', (req, res) => {
  res.json(createCompleteTimestamp('928357984'));
});


app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp;
  res.json(createCompleteTimestamp(timestamp));
});


// TODO: Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
