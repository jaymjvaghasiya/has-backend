const cloudinary = require('cloudinary').v2;

const uploadFile = async (file) => {
    cloudinary.config({
        cloud_name: 'dtf1kwemm',
        api_key: '879376249543281',
        api_secret: 'vtzVhbwbd7B6JSmFEU48rs7Ldmc'
    })

    const result = await cloudinary.uploader.upload(file);
    return result?.secure_url;
}

module.exports = {
    uploadFile,
}