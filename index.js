const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const submitroute = require("./routes/submitroute");
const showhomepage = require("./controllers/showhomepage");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(showhomepage);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, password);
  res.send(`Received: Name - ${name}, Password - ${password}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
