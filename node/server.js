const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 7000;



// app.listen(port, () => {
//     console.log("server is running on port ${port}");
// })c

app.get("/getAll", async (req, res) => {
    const myData = await salesData.find()
    console.log("mydata", myData);
    res.status(200).json(myData)
})

app.get("/getOne/:id", async (req, res) => {
    console.log(">>", req.params);
    const { id } = req.params
    const myData = await salesData.findOne({ _id: id })
    console.log("mydata", myData)
    res.status(200).json(myData)
})

app.get("/getOne/:id/:name/:ph", async (req, res) => {
    // console.log(">31>", req.params);
    console.log(">>>>32>>>", req.query);
    return
    const { id } = req.query
    const myData = await salesData.findOne({ _id: id })
    console.log("mydata", myData)
    res.status(200).json(myData)
})