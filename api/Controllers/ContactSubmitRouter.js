/*===== DEPENDENCIES ====== */
const nodemailer = require('nodemailer');
const xoauth2 = require("xoauth2");
const router = require('express').Router();
const CONFIG = require("../../config.js")


router.get('/', function (req, res) {
    var stringObj = {
        dataString: "Oops! We didn't receive any data from your end!"
    }
    res.status(400).render("formsubmit", stringObj);
});


router.post('/', function (req, res) {
    var transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        secureConnection: false,
        secure: false,
        port: 80,
        ignoreTLS: true,
        auth: {
            user: CONFIG.EMAIL_ID,
            pass: CONFIG.EMAIL_PW
        }
    }, {
        from: `${req.body.name} <${req.body.email}>`
    });

    let mailOptions = {
        to: "shan@oceanspacovers.com", // list of receivers
        subject: 'Ocean Spa Covers Contact Form', // Subject line
        text: `This Message is from ${req.body.name} at ${req.body.email} with Phone Number : ${req.body.number} \n Message : ${req.body.message}`,
        replyTo: req.body.email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            var stringObj = {
                dataString: "For Some Reason we couldn't process your request - Please try again!!"
            };
            res.status(404).render("formsubmit", stringObj);
        } else {
            var stringObj = {
                dataString: "We have received your contact request!"
            }
            res.status(201).render("formsubmit", stringObj);
        }
    });


});



module.exports = router;