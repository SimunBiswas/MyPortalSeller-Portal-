const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected")
        app.listen(PORT, () => {
            console.log(`server running on port${PORT}`)
        });
    })
    .catch((err) => { console.log(err) })
