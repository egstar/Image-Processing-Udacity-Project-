import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

const app = express(); // use the Express middleware

dotenv.config(); // enables .env config file
const port = process.env.port || 3000; // set port via .env file or use the 3000 port instead if not available

app.use(routes); // Use routes
// Run server
app.listen(port, () => {
  console.log(`WORKING on port [${port}]`);
});

export default app;
