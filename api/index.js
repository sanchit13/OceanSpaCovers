/* ====== DEPENDENCIES ======*/
const router = require("express").Router();
const controllers = require('./Controllers');
const bodyParser = require("body-parser");


/* ====== GLOBAL MIDDLEWARE ======*/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());
router.use(bodyParser.urlencoded({
    extended: true
}));


/* ====== MOUNTING ROUTERS ======*/
router.use('/', controllers.PageNavigationRouter);
router.use('/contactSubmit', controllers.ContactSubmitRouter);


module.exports = router;