const router = require('express').Router();
const {loginUser} = require('../../controllers/autoController/auth.controller')

router.route('/login').get(loginUser)

module.exports = router