var express = require('express');
var router = express.Router();


let usersController = require('../controllers/user');


router.get('/login', function(req, res, next) {
   usersController.LogIn(req,res);
})
   


module.exports = router;
