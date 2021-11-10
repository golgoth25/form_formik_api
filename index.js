const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({}));
app.use(express.json());

app.post("/sign-in", (req, res) => {
    const {
        body: {email, password},
    } = req;
    res.send({recevied: {email, password}});
});

app.listen(3001, () => console.log("Listening on : 3000"));