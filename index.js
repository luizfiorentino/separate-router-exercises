const express = require("express");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");

const app = express();
const port = 4000;

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.listen(port, () => console.log("Listening on port", port));
