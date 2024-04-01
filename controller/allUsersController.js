const userModel = require('../models/allUsers');

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

module.exports = {
    getAllUsers
}