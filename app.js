//@ts-check

const express = require("express");
const app = express();

const cors = require("cors");

const PORT = 400;

app.use(cors());
app.use(express.json());

app.all("/*", (req, res) => {
    res.json({
        success:true,
        description: "AeroExpressJS - An ExpressJS Prouction API Template Developed by AEROTRIX LABS"
    })
})

app.listen(PORT, ()=> {
    console.log(`Listening on Port ${PORT}`);
});