const nodemailer = require('nodemailer')

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_EMAIL,
            pass: process.env.SMPT_APP_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.SMPT_EMAIL,
        to: options.email,
        subject: options.subject,
        html: options.html
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendMail