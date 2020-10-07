const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`This app will run out of memory when you hit the <a href="/oom">/oom</a> path`);
});

app.get('/oom', (req, res) => {
  let a = [];
  while(true) {
      a.push(Math.random());
  }
  res.send(`I should have ran out of memory before you see this.`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`oom: listening on port ${port}`);
});
