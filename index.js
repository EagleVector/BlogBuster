const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRoute = require('./routes/user')

const app = express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/blogBuster').then(e => console.log('MongoDB Connected!'));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));