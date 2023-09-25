const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes");

app.use(express.json());

app.use((req, _, next) => {
  url = req.host + port + req.baseUrl + req.url;
  console.log(
    `Time: ${Date.now().toString()} Request Type: ${req.method} URL: ${url}`
  );
  next();
});

app.use(router);

app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
