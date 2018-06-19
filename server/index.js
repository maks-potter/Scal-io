const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.get('/', cors(), (req, res) => {
  res.send({body: 'Hello Index!', status: 200});
});

app.get('/login', cors(), (req, res) => {
  res.send({body: 'please login', status: 200});
});

app.post('/login', cors(), (req, res) => {
  // Return random response
  const rnd = Math.random();
  return rnd > 0.5
    ? res.send({body: 'success', status: 200})
    : res.send({body: 'bad login or password', status: 403});
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
