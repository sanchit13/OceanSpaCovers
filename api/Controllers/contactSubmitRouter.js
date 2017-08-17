/*===== DEPENDENCIES ====== */
const nodemailer = require('nodemailer');
const xoauth2 = require("xoauth2");
const router = require('express').Router();


var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user : "dhiman.sanchit@gmail.com",
        pass : "dhimansanchit"
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/', function (req, res) {
    let requestBody = {
        "From " : req.body.name,
        "Email" : req.body.email,
        "Number" : req.body.number,
        "Message" : req.body.message
    };

    let mailOptions = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
        to: 'dhiman.sanchit@gmail.com', // list of receivers
        subject: 'Ocean Spa Covers Contact Form', // Subject line
        text : JSON.stringify(requestBody)

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
});

module.exports = router;