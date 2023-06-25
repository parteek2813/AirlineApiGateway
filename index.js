const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3005;

app.get("/home", (req, res) => {
  return res.json({ message: "OK" });
});
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
