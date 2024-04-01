const paymentModel = require('../models/payment');


const getData = async (req, res) => {
    try {
        const result = await paymentModel.find();
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
        const result = await paymentModel.findById(req.params.id);
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
        const result = await paymentModel.create(req.body);
        res.status(201).json({
            message: "Data created successfully.",
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

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await paymentModel.findByIdAndDelete(id);
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
        const result = await paymentModel.findByIdAndUpdate(id, req.body);
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