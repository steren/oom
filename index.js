const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`This app will run ou tof memory when if you hit the <a href="/oom">/oom</a>`);
});

app.get('/oom', (req, res) => {
  let a = [];
  while(true) {
      a.push(Math.random());
  }
  res.send(`I should haveran out of memory before you see this.`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`oom: listening on port ${port}`);
});