// const express = require("express");
// const router = express.Router()
// const studentController = require(`../controller/studentController`)

// router.post(`/createRecord`, studentController.createRecord)

// router.get(`/getAll`, studentController.getStudentRecord)

// module.exports = router;




const express = require("express");
const router = express.Router()
const studentController = require(`../controller/studentController`)

router.post(`/createRecord`, studentController.createRecord)

router.get(`/getAll`, studentController.getStudentRecord)

router.get(`/getOne/:id`, studentController.getOneStudentRecord)

router.get(`/getOne`, studentController.getOneStudentRecordQuery)

router.delete(`/remove/:id`, studentController.deleteStudentRecord)

router.patch(`/updateRecord`, studentController.updateStudentRecord)

router.patch(`/updateRecord`, studentController.updateStudentRecordWithData)

module.exports = router;
