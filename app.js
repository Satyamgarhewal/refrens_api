const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;
// const ConfigureDB = require('./src/database/index');
const routes = require('./src/routes/index');

app.use(cors());
app.use(express.json());
// ConfigureDB();

app.listen(port, () => {
  console.log('Listening on port:', port);
});

app.get('/', (req, res) => {
  console.log('Welcome to Refrens');
});

app.use('/api', routes);
