const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Helloworld, Node.js!');
});

app.listen(3156, () => {
  console.log('Server running on port 3156');
});
