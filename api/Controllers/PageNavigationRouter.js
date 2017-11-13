const router = require('express').Router();

/* ====== MOUNTING MAIN ROUTERS ======*/
router.get('/', function (req, res) {
    res.status(200).redirect('/home');
});

router.get('/home', function (req, res) {
    var link = {
        activeLink: "Home"
    };
    res.status(200).render('home', link);
});

router.get('/warranty', function (req, res) {
    var link = {
        activeLink: "Warranty"
    };
    res.status(200).render('warranty', link);
});

router.get('/colors', function (req, res) {
    var link = {
        activeLink: "Colors"
    };
    res.status(200).render('colors', link);
});

router.get('/orders', function(req,res){
   var link = {
       activeLink: "Orders"
   };
   res.status(200).render('orders',link);
});

module.exports = router; 