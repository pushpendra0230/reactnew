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

exports.getOneStudentRecord = async (req, res) => {
    const { id } = req.params;
    const data = await studentModel.findOne({ _id: id });
    console.log("mydata", data);
    res.status(200).json(data);
}

exports.getOneStudentRecordQuery = async (req, res) => {
    const { id } = req.query
    console.log(">>id>>>", id)
    const data = await studentModel.findOne({ _id: id })
    console.log("mydata", data)
    res.status(200).json(data)
}


exports.deleteStudentRecord = async (req, res) => {
    const { id } = req.params
    const removeData = await studentModel.findByIdAndDelete(id)
    console.log(">>remove data>>", removeData)
    res.status(200).json({ message: `data deleted with id: ${id}` })
}


exports.updateStudentRecord = async (req, res) => {
    const id = req.body._id
    console.log(`>>>>>>>id>>>>>>`, id)
    const data = await studentModel.findByIdAndUpdate(id, req.body, { new: true })
    console.log(`>>data>>`, data)
    res.status(200).json({ message: "data updated", data })
}


exports.updateStudentRecordWithData = async (req, res) => {
    const id = req.body._id
    const myData = req.body
    const update = await studentModel.findByIdAndUpdate(id, myData, { new: true })
    console.log(`>>data>>`, update)
    res.status(201).json({ message: `updated data for id ${id}`, updatedData: update })
}
