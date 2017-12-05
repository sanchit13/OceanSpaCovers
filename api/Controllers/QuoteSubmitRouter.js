const router = require('express').Router();
const Airtable = require('airtable');
const CONFIG = require("../../config.js")

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: CONFIG.API_KEY
});

var base = Airtable.base(CONFIG.DATABASE_ID);

router.get('/', function(req, res){
    var stringObj = {
        dataString: "Oops! We didn't receive any data from your end!"
        }
    res.status(400).render("formsubmit", stringObj);
});

router.post('/', function (req, res) {
    base('Client Orders').create({
        "Status": "Order Received",
        "Name": req.body.name,
        "Email": req.body.email,
        "Number": req.body.number,
        "Spa Model/Make": req.body.spaModel,
        "Color": req.body.coverColor,
        "Shape": req.body.hotTubShape,
        "Measurement A": Number(req.body.measurementA),
        "Measurement B": Number(req.body.measurementB),
        "Measurement C": Number(req.body.measurementC),
        "Measurement D": Number(req.body.measurementD),
        "Measurement E": Number(req.body.measurementE),
        "Measurement F": Number(req.body.measurementF),
    }, function (err,rec) {
        if (err) { console.error(err); return; }
        console.log(rec.getId());
        let stringObj = {
            dataString: "Your request could not be processed, please try again"
        }
        res.status(404).render("formsubmit", stringObj);

    });
    var stringObj = {
        dataString: "We have received your quote request!"
    }
    res.status(200).render("formsubmit", stringObj);
});

module.exports = router;