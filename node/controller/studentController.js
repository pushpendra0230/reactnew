const studentModel = require(`../model/studentModel`)


exports.createRecord = async (req, res) => {
    const student = new studentModel(req.body)
    const data = await student.save()
    console.log(`>>>>>`, data);
    res.status(201).json(data)
}


exports.getStudentRecord = async (req, res) => {
    const data = await studentModel.find()
    console.log(`>>>>>`, data);
    res.status(201).json(data)
}