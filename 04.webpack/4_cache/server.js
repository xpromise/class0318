const express = require("express");
const chalk = require("chalk");

const app = express();

app.use(
	express.static("build", {
		maxAge: 3600000,
	})
);

app.listen(5000, "localhost", (err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(
		chalk.green("服务器启动成功：") + chalk.yellow("http://localhost:5000")
	);
});
