const { Router } = require("express");
const router = new Router();

const students = ["Dario", "Luiz", "Johan", "Yiezin", "Thais"];
router.get("/", (req, res) => res.send(students));
module.exports = router;
