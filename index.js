const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from minimal Node.js app! v4, my pod: ${process.env.HOSTNAME} ");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
