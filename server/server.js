const path = require("path");
const port = process.env.PORT || 3000;
const pathPublic = path.join(__dirname, "../public");
const express = require("express");
const app = express();
//set
app.set("view engine", "hbs");
//midleware
app.use(express.static(pathPublic));
//routes

//server
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
