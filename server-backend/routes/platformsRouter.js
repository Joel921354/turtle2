var express = require('express');
const router = express.Router()
const platformsRoutes = require('../controllers/platformsController.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', platformsRoutes.test) // testauth, server running?
//------------------------------------------------------------------------------//
//                                WEDGE ROUTES                                  //
//------------------------------------------------------------------------------//
//+                                                                            +//
//+                                                                            +//
router.get('/wedgeAll', platformsRoutes.wedgeAll); // get everything
router.get('/wedgeHead', platformsRoutes.wedgeHead); // get columns?

module.exports = router;
