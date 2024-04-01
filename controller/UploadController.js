const multer = require('multer');
const path = require('path');
const cloudinary = require('./CloudinaryController');

const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single('docPath');

const fileUpload = async (req, res) => {
    let result;

    upload(req, res, async (err) => {
        if(err) {
            res.status(500).json({
                message: "Error in uploading file."
            })
        } else {
            if(req.file == undefined) {
                res.status(400).json({
                    message: "No file selected."
                })
            } else {
                result = await cloudinary.uploadFile(req.file.path);
    
                res.status(200).json({
                    message: "File uploaded."
                })
            }
        }
    })
    return result?.secure_url;
}

module.exports = {
    fileUpload,
}