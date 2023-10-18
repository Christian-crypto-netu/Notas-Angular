const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');

const app = express();
const port = 4000;

conectDB();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log('>> listening on port ' + port);
});

