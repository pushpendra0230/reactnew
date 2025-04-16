// const express = require("express");
// const router = express.Router()
// const studentController = require(`../controller/studentController`)

// router.post(`/createRecord`, studentController.createRecord)

// router.get(`/getAll`, studentController.getStudentRecord)

// module.exports = router;




const express = require("express");
const router = express.Router()
const studentController = require(`../controller/studentController`)
const auth = require(`../middleware/auth`)

router.post(`/createRecord`, auth, studentController.createRecord)

router.get(`/getAll`, auth, studentController.getStudentRecord)

module.exports = router;
