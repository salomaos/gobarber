import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Worlds' });
});

app.listen(3333, () => {
  console.log('===> Server listening on port 3333 <===')
});