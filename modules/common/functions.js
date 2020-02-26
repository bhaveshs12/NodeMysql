const config = require('../../config');
const CryptoJS = require('crypto-js');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const randomstring = require('randomstring');

function encryptData(data) {
    let encryptedData = CryptoJS.AES.encrypt(data, config.encKey);
    return encryptedData.toString();
}

function decryptData(data) {
    let decryptedData = CryptoJS.AES.decrypt(data, config.encKey);
    return decryptedData.toString(CryptoJS.enc.Utf8);
}

function responseGenerator(code, message, data = '') {
    var details = {
        code: code,
        message: message,
        data: data
    }

    if(config.env == 'development')
        return details;
    else {
        details = JSON.stringify(details);
        return encryptData(details);
    }
}

module.exports = {
    encryptData,
    decryptData,
    responseGenerator
}