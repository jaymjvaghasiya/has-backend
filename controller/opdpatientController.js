const opdpatient = require('../models/opdpatient');
const patientModel = require('../models/opdpatient');
const mailUtil = require('../util/MailUtil')

const getData = async (req, res) => {
    try {
        const result = await patientModel.find().populate('role');
        res.status(200).json({
            message: "Data fectched successfully.",
            data: result,
            flag : 1
        })
    } catch(err) {
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const createData = async (req, res) => {
    try {
        const result = await patientModel.create(req.body);
        res.status(201).json({
            message: "Data created successfully.",
            data: result,
            flag: 1
        })


    } catch(err) {
        console.log(err);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await opdpatient.findByIdAndDelete(id);
        res.status(200).json({
            message: "Data deleted successfully.",
            flag: 1
        })
    } catch(err) {
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const sentMail = async (req, res) => {
    try {
        const data = await opdpatient.findById(req.params.id);
        const result = await mailUtil.mailSend2(data.email);
        res.status(200).json({
            message: "Mail sent successfully.",
            data: data,
            flag: 1
        })
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    getData,
    createData,
    deleteData,
    sentMail
}