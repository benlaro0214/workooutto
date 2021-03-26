const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("tiny"))

//Connecting to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`Listening on port %s. Visit http://localhost:%s in your browser ${PORT}!`);
});
