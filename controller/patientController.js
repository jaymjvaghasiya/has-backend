const patientModel = require('../models/patient');
const userModel = require('../models/allUsers');
const encryptPass = require('../util/Encrypt');
const mailUtil = require('../util/MailUtil');
const cloudinary = require('../controller/CloudinaryController');

const multer = require('multer');  

const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single('docPath');

const postData = async(req, res) => {
    upload(req, res, async(err) => {
        if(err) {
            res.status(500).json({
                message: "Error in uploading file."
            })
        } else {
            // console.log(req.body);
            if(req.file == undefined) {
                res.status(400).json({
                    message: "No file selected."
                })
            } else {
                try {
                    const img_url = await cloudinary.uploadFile(req.file.path);
    
                    let newObj = Object.assign(req.body, { docPath: req.body.docPath = img_url});
    
                    const password = req.body.password;
                    const hashPassword = encryptPass.encryptPassword(password);
    
                    newObj = Object.assign(req.body, { password: req.body.password = hashPassword});

                    const result = await patientModel.create(newObj);
                    const user = {
                        email: req.body.email,
                        password: hashPassword,
                        role: req.body.role,
                        id: result._id
                    }
                    const result1 = await mailUtil.mailSend(newObj.email);
                    const result2 = await userModel.create(user);
                    res.status(201).json({
                        message: "Data created successfully.",
                        data: result,
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
        }
    })
}

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
            message: "Error occured in getData.",
            flag: -1
        })
    }
}

const getById = async (req, res) => {
    try {
        const result = await patientModel.findById(req.params.id).populate('role');
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
        })
    } catch(err) {
        console.log(err);
        res.status(501).json({
            message: "Error occured in getById.",
            flag: -1
        })
    }
}

const getByStatus = async (req, res) => {
    try {
        const result = await patientModel.find({status: 'OPD'}).populate('role');
        res.status(200).json({
            message: "Data fetched successfully.",
            data: result,
            flag: 1
        })
    } catch(err) {
        console.log(err);
        res.status(501).json({
            message: "Error occured in getByStatus.",
            flag: -1
        })
    }
}

const createOneData = async (req, res) => {
    try {
        const result = await patientModel.create(req.body);
        result.status(201).json({
            message: "Data created successfully.",
            data: result,
            flag: 1
        });
    } catch(err) {
        res.status(501).json({
            message: "Error occured in createOneData.",
            flag: -1
        })
    }
}
const createData = async (req, res) => {

    try {

        const password = req.body.password;
        const hashPassword = encryptPass.encryptPassword(password);

        const newObj = Object.assign(req.body, { password: req.body.password = hashPassword});
        const result = await patientModel.create(req.body);
        const user = {
            email: req.body.email,
            password: hashPassword,
            role: req.body.role,
            id: result._id
        }
        const result1 = await mailUtil.mailSend(newObj.email);
        const result2 = await userModel.create(user);
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

    try {
    } catch(e) {
        res.statue(501).json({
            message: "Error occured.",
            flag: -1
        })
    }
}

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await patientModel.findByIdAndDelete(id);
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
        const result = await patientModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Data updated successfully.",
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

const login = async(req, res) => {
    // console.log(req.body);
    try {
        const emailFromDb = await patientModel.findOne({email: req.body.email}).populate('role');
        if(req.body.email == emailFromDb.email) {
            const flag = encryptPass.comparePassword(req.body.password, emailFromDb.password);
            if(flag) {
                res.status(200).json({
                    message: "Login successful.",
                    data: emailFromDb,
                    flag: 1,
                    role: emailFromDb.role
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
    login,
    getByStatus,
    createOneData,
    postData
}