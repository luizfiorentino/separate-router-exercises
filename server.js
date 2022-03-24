const express = require("express");
const { Router } = express;
const router = require("./router");
const app = express();

app.use(router);

const port = 4000;
app.listen(port, () => console.log("Listening on port", port));
