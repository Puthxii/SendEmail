require('dotenv').config()

const nodemailer = require('nodemailer')
const log = console.log

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: 'teenaputh12@gmail.com',
    to: 'komon.wu@gmail.com',
    subject: 'Helpdesk - Ticket',
    text: 'Your ticket reported was successful. You can tracking your ticket by this link http://localhost:4200/site-ticket'
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs')
    }
    return log('Email sent!!!')
})