const express = require('express');

const routes = require("./routes");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);


mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/dreamy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(console.log(`MongoDB connected ${"local DB"}`))
  .catch(err => console.log(err));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });