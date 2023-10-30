const express = require('express');
const app = express();

require('express-async-errors')
require('dotenv').config();

// Handles error
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages 

// routes
app.get('/', (req, res) => {
  res.send('jobs api')
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();
