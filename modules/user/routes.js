const router = require('express').Router();
const api = require('./controller');
const auth = require('../common/authentication');

router.get('/getUsers', api.getUsers);
router.get('/getUser', api.getUser);

module.exports = router;
