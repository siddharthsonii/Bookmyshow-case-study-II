const express = require('express');
const bodyParser = require('body-parser');
require('./configs/mysql_db')

// ---- Routes -----
const moviesRouter = require('./routes/moviesRoutes');
const showsRouter = require('./routes/showsRoutes');
const theatersRouter = require('./routes/theatersRoutes');
const ticketsRouter = require('./routes/ticketsRoutes');
const usersRouter = require('./routes/usersRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Bookmyshow API");
});

// Routes
app.use('/api/users', usersRouter);
app.use('/api/shows', showsRouter);

app.use('/api/movies', moviesRouter);
app.use('/api/theaters', theatersRouter);
app.use('/api/tickets', ticketsRouter);

// Start the server
app.listen(PORT, (err) => {
  if(!err) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Server is not running due to an error.");
  }
});
