const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb://0.0.0.0:27017/cygbitPractical")

//api creation
app.get("/", () => {
    resizeBy.send("Express app is running..")
})

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port " + port)
    } else {
        console.log("Error" + error)
    }
})