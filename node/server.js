// // for all the data you want from mongodb

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 6001;
// app.use(express.json())


// const mongoURL = "mongodb+srv://pushpendra:1234@cluster0.zf1kp.mongodb.net/batchM"

// mongoose.connect(mongoURL)
//     .then(() => console.log("connencted to mongodb..."))
//     .catch(err => console.error("not connect to mongodb..."));



// const Schema = mongoose.Schema

// const students = new Schema({
//     // data: Schema.Types.Mixed
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     phone: {
//         type: Number,
//         require: false
//     },
//     address: {
//         type: String,
//         require: true
//     }
// })


// const studentsData = mongoose.model("students", students);


// app.post("/createRecord", async (req, res) => {
//     console.log("<<<req<<<", req);
//     console.log(">>>>>req body", req.body);

//     // return
//     // const myData = await studentsData.find();
//     // console.log(">>>>>mydata>>>>", myData);
//     // res.status(200).json(myData)
// });




// // app.get("/getAll", async (req, res) => {
// //     const myData = await studentsData.find();
// //     console.log(">>>>>mydata>>>>", myData);
// //     res.status(200).json(myData)
// // });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });






// for only one data you want from mongodb with id of the data in this you have to add data id in the url of the postman


// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 6001;

// const mongoURL = "mongodb+srv://pushpendra:1234@cluster0.zf1kp.mongodb.net/batchM"

// mongoose.connect(mongoURL)
//     .then(() => console.log("connencted to mongodb..."))
//     .catch(err => console.error("not connect to mongodb..."));



// const Schema = mongoose.Schema

// const students = new Schema({
//     data: Schema.Types.Mixed
// })


// const studentsData = mongoose.model("students", students);


// app.get("/getOne/:id", async (req, res) => {
//     console.log(">>", req.params.id);
//     const { id } = req.params
//     const myData = await studentsData.findOne({ _id: id })
//     console.log("mydata", myData)
//     res.status(200).json(myData)
// })



// // app.get("/getOne/:id", async (req, res) => {
// //     console.log(">>", req.params.id);
// //     const { id } = req.params
// //     const myData = await studentsData.findById(id)
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })



// // app.get("/getOne/:name", async (req, res) => {
// //     console.log(">>", req.params.name);
// //     const { name } = req.params
// //     const myData = await studentsData.findOne({ name: name })
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })



// // app.get("/getOne/:age", async (req, res) => {
// //     console.log(">>", req.params.age);
// //     const { age } = req.params
// //     console.log(age)
// //     const myData = await studentsData.findOne({ age })
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });








// for only one data with query you want from mongodb with id name and all the things in the datalike age phone number
// of the data in this you have to add data id name age phone all the thinges you add in the code in the url of the postman


// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 6001;

// const mongoURL = "mongodb+srv://pushpendra:1234@cluster0.zf1kp.mongodb.net/batchM"

// mongoose.connect(mongoURL)
//     .then(() => console.log("connencted to mongodb..."))
//     .catch(err => console.error("not connect to mongodb..."));



// const Schema = mongoose.Schema

// const students = new Schema({
//     data: Schema.Types.Mixed
// })


// const studentsData = mongoose.model("students", students);



// // app.get("/getOne/", async (req, res) => {
// //     console.log(">>>>>", req.query.id)
// //     const { id } = req.query
// //     const myData = await studentsData.findOne({ _id: id })
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })


// // app.get("/getOne/", async (req, res) => {
// //     console.log(">>>>>", req.query.name)
// //     const { name } = req.query
// //     const myData = await studentsData.findOne({ name: name })
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })


// // app.get("/getOne/", async (req, res) => {
// //     console.log(">>>>>", req.query.grade)
// //     const { grade } = req.query
// //     const myData = await studentsData.find({ grade: grade })
// //     console.log("mydata", myData)
// //     res.status(200).json(myData)
// // })



// app.get("/getOne/", async (req, res) => {
//     console.log(">>>>>", req.query.age)
//     const { age } = req.query
//     const myData = await studentsData.find({ age: age })
//     console.log("mydata", myData)
//     res.status(200).json(myData)
// })




// // app.get("/getAll/", async (req, res) => {
// //     const myData = await studentsData.find()
// //     console.log(`>>>>>>>>>>myData`,myData);
// //     res.status(200).json(myData)
// //     console.log('>>>>>myData');
// // })





// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });






// data ko delete karne ke liye





// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 6001;

// const mongoURL = "mongodb+srv://pushpendra:1234@cluster0.zf1kp.mongodb.net/batchM"

// mongoose.connect(mongoURL)
//     .then(() => console.log("connencted to mongodb..."))
//     .catch(err => console.error("not connect to mongodb..."));



// const Schema = mongoose.Schema

// const students = new Schema({
//     data: Schema.Types.Mixed
// })


// const studentsData = mongoose.model("students", students);


// // app.delete("/remove/:id", async (req, res) => {
// //     const { id } = req.params
// //     const removeData = await studentsData.findByIdAndDelete(id)
// //     console.log(">>remove data>>", removeData)
// //     res.status(200).json({ message: `data delete ${id}` })
// // })


// app.delete("/remove/:name", async (req, res) => {
//     const { name } = req.params
//     const removeData = await studentsData.findByIdAndDelete(name)
//     console.log(`>>remove data>>`, removeData)
//     res.status(200).json({ message: `data delete ${name}` })
// })



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// post






// for all the data you want from mongodb

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 6001;
app.use(express.json())


const mongoURL = "mongodb+srv://pushpendra:1234@cluster0.zf1kp.mongodb.net/batchM"

mongoose.connect(mongoURL)
    .then(() => console.log("connencted to mongodb..."))
    .catch(err => console.error("not connect to mongodb..."));



const Schema = mongoose.Schema

const students = new Schema({
    // data: Schema.Types.Mixed
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: false
    },
    address: {
        type: String,
        require: true
    }
},
    { timestamps: true },
)


const studentsData = mongoose.model("students", students);


// url :- http://localhost:6001/createRecord


// app.post("/createRecord", async (req, res) => {
//     console.log(">>>>req>>>>", req);
//     console.log(">>>>>req body", req.body);
//     const students = new studentsData(req.body)
//     const myData = await students.save();
//     console.log(">>>>>mydata>>>>", myData);
//     res.status(201).json(myData)
// });



app.get("/getAll", async (req, res) => {
    const myData = await studentsData.find();
    console.log(">>>>>mydata>>>>", myData);
    res.status(200).json(myData)
});


// url :- http://localhost:6001/getOne/67e3b07b6a8ffa31ae4d7942


// app.get("/getOne/:id", async (req, res) => {
//     console.log(">>", req.params.id);
//     const { id } = req.params
//     const myData = await studentsData.findOne({ _id: id })
//     console.log("mydata", myData)
//     res.status(200).json(myData)
// })



// url :- http://localhost:6001/getOne/?id=67e3b0ed6a8ffa31ae4d7946




// app.get("/getOne/", async (req, res) => {
//     console.log(">>id>>>", req.query.id)
//     const { id } = req.query
//     const myData = await studentsData.findOne({ _id: id })
//     console.log("mydata", myData)
//     res.status(200).json(myData)
// })






// app.delete("/remove/:id", async (req, res) => {
//     const { id } = req.params
//     const removeData = await studentsData.findByIdAndDelete(id)
//     console.log(">>remove data>>", removeData)
//     res.status(200).json({ message: `data delete ${id}` })
// })




// url :- http://localhost:6001/updateRecord



// app.patch("/updateRecord", async (req, res) => {
//     const id = req.body._id
//     console.log(`>>>>>>>id>>>>>>`, id);
//     const data = await studentsData.findByIdAndUpdate(id, req.body)
//     console.log(`>>data>>`, data)
//     res.status(200).json({ message: "update data", data })
// })



app.patch("/updateRecord", async (req, res) => {
    const id = req.body._id
    const myData = req.body
    const update = await studentsData.findByIdAndUpdate(id, myData)
    console.log(`>>data>>`, update)
    res.status(201).json({ message: `update data ${id}` })
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});