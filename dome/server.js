import React from "react";
import { renderToString } from "react-dom/server"
import App from "./src/app"
import express from "express";
import fs from "fs";
const app = express();
app.use(express.static(__dirname + '/build'));


app.use("/", (req, res) => {
  const html = fs.readFileSync("./build/index.html", "utf-8")
  console.log(html);
  const content = renderToString(<App />)
  res.send(html.replace('<div id="app"></div>', `<div id="app">${content}</div>`))
})

app.listen(9000)
