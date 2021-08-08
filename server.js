const express = require('express');

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/members");

app.listen(PORT, function() {
    console.log(`🌎  ==> Backend is now listening on PORT ${PORT}!`);
  });