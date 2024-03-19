import express from "express";
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/cstej", (req, res) => {
  res.json({ name: "cstej" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port" + process.env.PORT);
});
