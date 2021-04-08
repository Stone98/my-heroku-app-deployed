const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/", (_, res) => {
  res.json({ data: "API is accounted for" });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// console.log("It's alive!!!!!!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
