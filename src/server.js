//require all essential modules
const express = require("express");
const router = require("./router/todoRouter");
const dotenv = require("dotenv").config();

//initialize express
const app = express();

//initialize bodyparser for json objects
app.use(express.json());

//test request
app.get('/', (req, res) => {
  res.status(200).json({
    Message: "Moshi moshi",
  });
});

// app.use('/', router)

//set the port to listen for the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at ${PORT}...`));
