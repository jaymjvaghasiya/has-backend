const appointmentModel = require('../models/appointment');
const mailUtil = require('../util/MailUtil');
const patientModel = require('../models/patient');
const doctorModel = require('../models/doctor');
const whatsappUtil = require('../util/WhatsappUtil');

const getData = async (req, res) => {
    try {
        const result = await appointmentModel.find().populate('doctor').populate('patient');
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

const getById = async (req, res) => {
    try {
        const result = await appointmentModel.findById(req.params.id);
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
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
        const result = await appointmentModel.create(req.body);
        const result2 = await patientModel.findById(req.body.patient);
        const result3 = await doctorModel.findById(req.body.doctor);

        let newObj = {
            patient_id: req.body.patient,
            patient_name: result2.firstName + ' ' + result2.lastName,
            doctor_name: result3.firstName + ' ' + result3.lastName,
            appointment_date: req.body.appointmentDate,
            status: 'Pending'
        }

        const result4 = await mailUtil.mailSend5(result2.email, newObj);
    
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
        const result = await appointmentModel.findByIdAndDelete(id);
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

const updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await appointmentModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Data updated successfully.",
            flag: 1
        })
    } catch(err) {
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

module.exports = {
    getData,
    getById,
    createData,
    deleteData,
    updateData
}