// app.js

const express = require('express');
const app = express();

app.use(express.static(__dirname));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});