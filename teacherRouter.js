const { Router } = require("express");

const router = new Router();
const teachers = ["Karla", "Swen", "Andre", "Matias"];
router.get("/", (req, res) => res.send(teachers));
module.exports = router;
