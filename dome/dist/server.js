"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import React from "react";
// import App from "./src/app"
var app = (0, _express["default"])();
app.use("/", function (req, res) {
  res.send("123456");
});
app.listen(9000);