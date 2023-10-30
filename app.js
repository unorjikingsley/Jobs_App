const express = require('express');
const app = express();

require('express-async-errors')
require('dotenv').config();

//connect to mongoDB
const connectDB = require('./db/connect');

// routes
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs')

// Handles error
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages 

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();
