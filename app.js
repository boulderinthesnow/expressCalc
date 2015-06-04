// requirements
var express = require('express'),
app = express();
app.set("view engine", "ejs")


// // a "GET" request to "/" will run the function below
// app.get("/", function (request, response) {
// 	// send back the response: Hello John
// 	response.send("Hello World");
// })

// app.get("/Hello/:name", function (request, response) {
// 	response.send( "Hello, " + request.params.name );
// });

// app.get("/hi", function (request, response) {
// 	var name = request.query.name;
// 	response.send("Hello, " + name);
// });

// // start the server
// app.listen(3000, function () {
// 	console.log("Starting a server on localhost:3000");
// })



// app.get("/add/:num1/:num2", function(req, res) {
// 	var sum = Number(req.params.num1) + Number(req.params.num2)
// 	res.render("math", {number:sum});
// });

// app.get("/mult/:num1/:num2", function(req, res) {
// 	var sum = Number(req.params.num1) * Number(req.params.num2)
// 	res.render("math", {number:sum});
// });

// app.get("/sub/:num1/:num2", function(req, res) {
// 	var sum = Number(req.params.num1) - Number(req.params.num2)
// 	res.render("math", {number:sum});
// });

// app.get("/div/:num1/:num2", function(req, res) {
// 	var sum = Number(req.params.num1) / Number(req.params.num2)
// 	res.render("math", {number:sum});
// });
//////////////////////////


app.get("/:whatever/:num1/:num2", function(req, res) {
	sum = Number(req.params.num1) + Number(req.params.num2)
	sub = Number(req.params.num1) - Number(req.params.num2)
	div = Number(req.params.num1) / Number(req.params.num2)
	mult = Number(req.params.num1) * Number(req.params.num2)
	whatever = req.params.whatever

	if (whatever === "add") {
		res.render("math", {number:sum});
	}
	if (whatever === "sub") {
		res.render("math", {number:sub});
	}
	if (whatever === "div") {
		res.render("math", {number:div});
	}
	if (whatever === "mult") {
		res.render("math", {number:mult});
	}
	
});


app.listen(3000, function(){
	console.log("Server starting on port 3000");
})