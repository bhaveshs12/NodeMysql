const userObj = require('./user');
const functions = require('../common/functions');

const controller = {
    getUsers: async (req, res) => {
        try {
            const userDetails = await userObj.userService().getUsers(req.query);
            res.send(functions.responseGenerator(
                userDetails.code,
                userDetails.message,
                userDetails.data
            ));
        }
        catch(error) {
            res.send(functions.responseGenerator(error.code, error.message, error.data));
        }
    },
    getUser: async (req, res) => {
        try {
            const userDetail = await userObj.userService().getUser(req.query);
            res.send(functions.responseGenerator(
                userDetail.code,
                userDetail.message,
                userDetail.data
            ));
        }
        catch(error) {
            res.send(functions.responseGenerator(error.code, error.message, error.data));
        }
    }
}

module.exports = controller;