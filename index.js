require('dotenv').config();
const express = require('express');
const {
  fetchCoordinates,
  findNearest
} = require('./helpers');

const app = express();
const api = express();


api.get('/', (req, res) => {
  fetchCoordinates(req.query.address)
  .then((result) => {
    return {
      longitude: result.data.features[0].center[0],
      latitude: result.data.features[0].center[1],
    }
  })
  .then(findNearest)
  .then(res.send.bind(res));
});

app.use('/', express.static(`${__dirname}/`));
app.use('/axios',
  express.static(`${__dirname}/node_modules/axios/dist/axios.min.js`));
app.use('/fetch', api);

const port = process.env.PORT || 8888;
app.listen(port, console.log('Listening on port 8888'));
