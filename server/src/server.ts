import express, { Application, Express, Router } from 'express';
import { config } from 'dotenv';

config({ path: new URL('../../.env', import.meta.url) });
const app = express();
const port = 3000;

const router = Router();
router.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

router.get('/', (req, res) => {
  res.send('Welcome to the Snake Modern Server!');
});

app.use('/',router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("hello")
  console.log(process.env.DATABASE_URL)
});