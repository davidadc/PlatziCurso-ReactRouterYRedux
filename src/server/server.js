import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const { ENV, PORT } = process.env;

const app = express();

if (ENV === 'development') {
  console.log('Development config');
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Server running on port ${PORT}`);
});
