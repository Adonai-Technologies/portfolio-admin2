const express = require("express");
const app = express();
const connectDB = require("./Config/database");
const portfolioRoute = require("./Routes/portfolioRoute");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./Config/.env" });
connectDB();

// Use body-parser for parsing JSON
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use your API routes
app.use("/api", portfolioRoute);

// Start the server
const path = require("path");
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/client/build/index.html"));
	});
}

app.listen(process.env.PORT, () => {
	console.log("Server is running, you better catch it!");
});
