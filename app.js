const express = require("express");
const app = express();

app.use(express.static('public'))

const path = require("path")

app.listen(3030, () => console.log("SERVIDOR LEVANTADO CON EXITO"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
})
app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "babbage.html"))
})
app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "berners-lee.html"))
})
app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "clarke.html"))
})
app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "hamilton.html"))
})
app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "hopper.html"))
})
app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "lovelace.html"))
})
app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "turing.html"))
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"))
})