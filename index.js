const express = require('express');

const PORT = 5050;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Server is working!');
});

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
