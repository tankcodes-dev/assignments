const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

function requestCounter(req, res, next) {
    ++requestCount;
	next();
}

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use(requestCounter);

app.get("/user", function (req, res) {
    res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
    res.status(200).json({ requestCount });
});

/* app.listen(3000, (err) => {
	console.log(`Server started at http://localhost:/${3000}`);
	
}) */

module.exports = app;
