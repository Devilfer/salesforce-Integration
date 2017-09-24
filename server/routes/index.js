var express = require('express');
var router = express.Router();



let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', function(req, res, next) {
   indexController.DisplayHome(req,res);
});


module.exports = router;





