const bcrypt = require('bcrypt');
const saltRound = 10;

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRound);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

const comparePassword = (password, hashPassword) => {
    const flag = bcrypt.compareSync(password, hashPassword);
    return flag;
}

module.exports = {
    encryptPassword,
    comparePassword
}