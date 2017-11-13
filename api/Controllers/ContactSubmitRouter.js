/*===== DEPENDENCIES ====== */
const nodemailer = require('nodemailer');
const xoauth2 = require("xoauth2");
const router = require('express').Router();
var EMAIL_ID = "dhiman.sanchit@gmail.com";
var EMAIL_PW = "dhimansanchit";


router.get('/', function (req, res) {
    var stringObj = {
        dataString: "Oops! We didn't receive any data from your end!"
    }
    res.status(400).render("formsubmit", stringObj);
});


router.post('/', function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: EMAIL_ID,
            pass: EMAIL_PW
        },
        tls: {
            rejectUnauthorized: false
        },
        from : `${req.body.name} <${req.body.email}>`
    });

    let mailOptions = {
        from: req.body.email, // sender address
        to: 'dhiman.sanchit@gmail.com', // list of receivers
        subject: 'Ocean Spa Covers Contact Form', // Subject line
        text: `This Message is from ${req.body.name} at ${req.body.email} with Phone Number : ${req.body.number} \n Message : ${req.body.message}`,
        replyTo: req.body.email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
    var stringObj = {
        dataString: "We have received your contact request!"
    }
    res.status(201).render("formsubmit", stringObj);
});



module.exports = router;