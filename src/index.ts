import express from 'express';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
import routes from './routes';

const app = express(); // use the Express middleware

dotenv.config(); // enables .env config file
const port = process.env.port; // set port via .env file

app.use(routes); // Use routes
// Run server
app.listen(port, () => {
  // Check the thumbnails dir
  const thumbdir = path.resolve(__dirname, '../assets/tn/');
  if (!fs.existsSync(thumbdir)) {
    fs.mkdirSync(thumbdir);
  }
  console.log(`WORKING on port [${port}]`);
});

export default app;
