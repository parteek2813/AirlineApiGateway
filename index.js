const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 3005;

app.use(morgan("combined"));
app.use(
  "/bookingservice/api/v1/home",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);

app.get("/home", (req, res) => {
  return res.json({ message: "OK" });
});
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
