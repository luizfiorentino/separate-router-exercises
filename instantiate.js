const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/hi/:name", (req, res) => res.send(`Hi ${req.params.name}`));
module.exports = router;

const app = express();
app.use(router);

const port = 4000;
app.listen(port, () => console.log(port));
