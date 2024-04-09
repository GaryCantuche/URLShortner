import 'dotenv/config';
import express from 'express';
import Routes from './routes/routes.js';

const app = express();

app.use('/static', express.static('./src/public'));

//INIT ROUTES
Routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})