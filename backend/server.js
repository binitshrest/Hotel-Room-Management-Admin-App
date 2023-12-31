const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require('./routes/users');
const app = express();

// enable cors
app.use(cors());

// parse application/json
app.use(bodyParser.json());

const url = "mongodb+srv://binitshrest16:79KY0hMDqjUEMQq5@cluster0.ovpsn2o.mongodb.net/"
// connect to the database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

// define routes
app.use('/users',users);


// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});