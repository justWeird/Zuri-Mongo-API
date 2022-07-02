//require all essential modules
const express = require("express");
const router = require("./router/todoRouter");
const dotenv = require("dotenv").config();
const connectDB = require("./config/todoDB");

//initialize mongodb
connectDB();

//initialize express
const app = express();

//initialize bodyparser for json objects
app.use(express.json());

app.use('/', router)

//set the port to listen for the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at ${PORT}...`));
