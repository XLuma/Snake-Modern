import express, { Application, Express, Router } from 'express';

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
});