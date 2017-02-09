import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const port = process.env.PORT || 3000;
const app = express();
const jsonParser = bodyParser.json();


app.use(morgan('dev'));

app.get('/', jsonParser, (req, res) => {
  res.json({
    message: 'Responding with json',
  });
});


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`);
});

export default app;
