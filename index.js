const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, つねぇぇぇ〜！！（from Express♡）');
});

app.listen(3000, () => {
  console.log('つねのサーバーが立ち上がりました… on port 3000');
});