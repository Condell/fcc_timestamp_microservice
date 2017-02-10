import express from 'express';
import morgan from 'morgan';
import router from './routes/index';


const port = process.env.PORT || 3000;
const app = express();


app.use(morgan('dev'));

app.use('/', router);


// Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`);
});

export default app;
