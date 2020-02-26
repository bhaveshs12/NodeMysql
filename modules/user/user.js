const con = require('../database/dbcon');
const util = require('util');
const query = util.promisify(con.query).bind(con);
const functions = require('../common/functions');
const config = require('../../config');
const validator = require('validator');
const code = require('../common/code');
const message = require('../common/message');

class UserService {
    async getUsers(reqData) {
        try {
            const qry = "SELECT * from users";
            const userDetails = await query(qry);
            return {
                code: code.success,
                message: "User details fetched successfully",
                data: userDetails
            }
        }
        catch(e) {
            return {
                code: code.unexceptedError,
                message: message.tryCatch,
                data: e.message
            };
        }
    }

    async getUser(reqData) {
        try {
            if(validator.isEmpty(reqData.id)) {
                return {
                    code: code.invalidDetails,
                    message: message.invalidDetails,
                    data: null
                };
            }
            else {
                const qry = "SELECT * FROM users where id = ?";
                const userDetail = await query(qry, [reqData.id]);
                return {
                    code: code.success,
                    message: "User details fetched successfully",
                    data: userDetail
                }
            }
            
        }
        catch(e) {
            return {
                code: code.unexceptedError,
                message: message.tryCatch,
                data: e.message
            }
        }
    }
}

module.exports = {
    userService: function() {
        return new UserService();
    }
}