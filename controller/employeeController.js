const employeeModel = require('../models/employee');
const encryptPass = require('../util/Encrypt');
const userModel = require('../models/allUsers');


const getData = async (req, res) => {
    try {
        const result = await employeeModel.find();
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
        const result = await employeeModel.findById(req.params.id);
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

        let password = req.body.password;
        let hashPassword = encryptPass.encryptPassword(password);
        let newObj = Object.assign(req.body, { password: req.body.password = hashPassword});

        const result = await employeeModel.create(newObj);

        const user = {
            email: req.body.email,
            password: hashPassword,
            role: req.body.role
        }
        const result1 = await userModel.create(user);

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
        const result = await employeeModel.findByIdAndDelete(id);
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
        const result = await employeeModel.findByIdAndUpdate(id, req.body);
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

const login = async(req, res) => {
    try {
        const emailFromDb = await employeeModel.findOne({email: req.body.email}).populate('role');
        if(req.body.email == emailFromDb.email) {
            const flag = encryptPass.comparePassword(req.body.password, emailFromDb.password);
            if(flag) {
                res.status(200).json({
                    message: "Login successful.",
                    data: emailFromDb,
                    flag: 1
                })
            } else {
                res.status(404).json({
                    message: "Password is incorrect.",
                    flag: -1
                })
            }
        } else {
            res.status(404).json({
                message: "Email is incorrect.",
                flag: -1
            })
        }
    } catch(e) {
        console.log(e);
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
    updateData,
    login
}