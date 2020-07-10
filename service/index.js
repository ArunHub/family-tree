const express = require("express");
const app = express();
const api = require('./api');
const { ALLOWED_ORIGIN, PORT, ACCESS_CONTROL_ALLOW_ORIGIN, } = require('./constants');

app.get("/data", function (req, res) {
  res.append(ACCESS_CONTROL_ALLOW_ORIGIN, ALLOWED_ORIGIN);
  // api.insertDocument();
  const data = api.getData();
  data.then((response) => {
    res.send(response);
  })
});

app.listen(PORT, function () {
  console.log(`Express app started on port ${PORT}`);
});
