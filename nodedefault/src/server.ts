import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('testando');
});

app.listen(3333, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3333`);
});
