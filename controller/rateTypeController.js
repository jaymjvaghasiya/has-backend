const rateTypetModel = require('../models/rateType');

const getData = async (req, res) => {
    try {
        const result = await rateTypetModel.find();
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
        const result = await rateTypetModel.findById(req.params.id);
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
        const result = await rateTypetModel.create(req.body);
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
        const result = await rateTypetModel.findByIdAndDelete(id);
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
        const result = await rateTypetModel.findByIdAndUpdate(id, req.body);
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