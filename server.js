const express = require("express");
const app = express();
require("./src/models/index");
const personRoute = require("./src/routes/person.routes")

app.get("/", (req, res) => {
    res.send("Lets Learn Sequelize");
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/api/person', personRoute);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Listening to server at http://localhost:${PORT}`);
});