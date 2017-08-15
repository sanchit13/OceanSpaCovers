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


/* ====== MOUNTING MAIN ROUTERS ======*/
router.get('/', function (req, res) {
    var link = {
        activeLink: "Home"
    };
    res.render('home', link);
});

router.get('/home', function (req, res) {
    var link = {
        activeLink: "Home"
    };
    res.render('home', link);
});

router.get('/warranty', function (req, res) {
    var link = {
        activeLink: "Warranty"
    };
    res.render('warranty', link);
});

/* ====== MOUNTING OTHER ROUTERS ======*/
router.use('/contactSubmit', controllers.ContactSubmitRouter.router);


module.exports = router;