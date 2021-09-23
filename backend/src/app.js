const express = require("express");
const app = express();
const userRoutes = require("../routes/userRoutes")
const connectMongo = require("../config/db/db.js")

const PORT = process.env.PORT || 8000;
const URL = "http://localhost:8000/"


connectMongo();

app.use(express.json());

app.get("/" , (req,res) => {
    res.json({message : "Hello, from ISOI-HITK"});
})

app.use("/api/users" , userRoutes);

app.listen(PORT , () => {
   console.log(`Server Listening on ${URL}`);
})