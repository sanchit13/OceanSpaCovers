const router = require('express').Router();

/* ====== MOUNTING MAIN ROUTERS ======*/
router.get('/', function (req, res) {
    res.redirect('/home');
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

router.get('/colors', function (req, res) {
    var link = {
        activeLink: "Colors"
    };
    res.render('colors', link);
});

module.exports = router; 