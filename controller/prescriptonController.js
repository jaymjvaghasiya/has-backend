const prescriptionSchema = require('../models/prescription');
const mailUtil = require('../util/MailUtil');

const getData = async (req, res) => {
    try {
        const result = await prescriptionSchema.find().populate('patientId').populate('doctorId');
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        res.status(501).json({
            message: "Error occured in getData.",
            flag: -1
        })
    }
}

const getById = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await prescriptionSchema.find({ patientId: { _id: id } }).populate('patientId').populate('doctorId');
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        res.status(501).json({
            message: "Error occured in getById.",
            flag: -1
        })
    }
}

const getOneByID = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await prescriptionSchema.findById(id).populate('patientId').populate('doctorId');
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        res.status(501).json({
            message: "Error occured in getOneById.",
            flag: -1
        })
    }
}

const createData = async (req, res) => {
    try {
        const newObj = Object.assign(req.body);
        const result = await prescriptionSchema.create(newObj);
        // console.log(result);
        // console.log(result.email);
        const result2 = await mailUtil.mailSend3(result.email, newObj);
        res.status(200).json({
            message: "Data created successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured in createData.",
            flag: -1
        })
    }
}

module.exports = { getData, getById, createData, getOneByID }