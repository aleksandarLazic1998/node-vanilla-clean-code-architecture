const express = require("express");
const { SECRETS } = require("./src/config/index.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(SECRETS.PORT, () => {
	console.log("Listening on port 3000");
});
