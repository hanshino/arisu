const express = require("express");
const roomRouter = require("./src/routes/room");

const app = express();

app.use("/room", roomRouter);
app.listen(process.env.PORT || 5000);
