// call express and mongoose packages
const express = require("express");
const mongooseDB = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// port
const PORT = process.env.PORT || 3000

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// server routes
app.use(require("./routes/api.js"));
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
