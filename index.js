const express = require("express");
const expressHbs = require("express-handlebars");
const router = require("./routes/post");
const port = 3000;
const path = require("path");

const app = express();

app.engine("hbs", expressHbs.engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.json());

app.use((req, _, next) => {
  url = req.host + port + req.baseUrl + req.url;
  console.log("Time: %s Request Type: %s URL: %s", Date.now(), req.method, url);
  next();
});

app.use(router);

app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
