import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

const app = express(); // use the Express middleware

dotenv.config(); // enables .env config file
const port = process.env.port; // set port via .env file

app.use(routes); // Use routes
// Run server 
app.listen(port, () => {
  
  console.log(`WORKING on port [${port}]`);
});

export default app;
