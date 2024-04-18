const userModel = require('../models/allUsers');
const mailUtil = require('../util/MailUtil');
const otpModel = require('../models/otp');
const encryptPass = require('../util/Encrypt');
const patientModel = require('../models/patient');
const doctorModel = require('../models/doctor');
const employeeModel = require('../models/employee');

const getAllUsers = async (req, res) => {
    try {
        const result = await userModel.find();
        res.status(200).json({
            message: "User fetched successfully.",
            data:  result,
            flag: 1
        })
    } catch(e) {
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const getOneUser = async (req, res) => {
    try {
        const result = await userModel.findOne({email: req.params.email})
        // console.log(result);
        if(result) {
            const otp = Math.floor(1000 + Math.random() * 9000);
            const result1 = await mailUtil.mailSend4(result.email, otp);
            let otpobj = {
                otp: otp,
                email: result.email,
                status: true
            }
            const result2 = await otpModel.create(otpobj);
            console.log(result1);
        }

        res.status(200).json({
            message: "User fetched successfully.",
            data:  result,
            flag: 1
        })
    } catch(e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const updatepass = async (req, res) => {
    try {
        const hashPassword = await encryptPass.encryptPassword(req.body.pass);
        // console.log(hashPassword);
        const result1 = await userModel.findOneAndUpdate({email: req.params.email}, {$set: {password: hashPassword}});
        let result2;
        if(req.body.role == 'patient') {
            result2 = await patientModel.findOneAndUpdate({email: req.params.email}, {$set: {password: hashPassword}});
        } else if(req.body.role == 'doctor') {
            result2 = await doctorModel.findOneAndUpdate({email: req.params.email}, {$set: {password: hashPassword}});
        } else if(req.body.role == 'receptionist') {
            result2 = await employeeModel.findOneAndUpdate({email: req.params.email}, {$set: {password: hashPassword}});
        }
        const result3 = await otpModel.findOneAndDelete({email: req.params.email});
        res.status(200).json({
            message: "Password updated successfully.",
            data1: result1,
            data2: result2,
            flag: 1
        })
    } catch(e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const getOneUserforPayment = async (req, res) => {
    try {
        const result = await userModel.findOne({email: req.params.email})
        // console.log(result);
        if(result) {
            const otp = Math.floor(1000 + Math.random() * 9000);
            const result1 = await mailUtil.mailSend6(result.email, otp);
            let otpobj = {
                otp: otp,
                email: result.email,
                status: true
            }
            const result2 = await otpModel.create(otpobj);
            console.log(result1);
        }

        res.status(200).json({
            message: "User fetched successfully.",
            data:  result,
            flag: 1
        })
    } catch(e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const getOne = async (req, res) => {
    try {
        const result = await otpModel.findOne({email: req.params.email})
        res.status(200).json({
            message: "User fetched successfully.",
            data:  result,
            flag: 1
        })
    } catch(e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        const result = await otpModel.findOneAndDelete({email: req.params.email});
        res.status(200).json({
            message: "User deleted successfully.",
            data:  result,
            flag: 1
        })
    } catch(e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    getOne,
    deleteOne,
    updatepass,
    getOneUserforPayment
}