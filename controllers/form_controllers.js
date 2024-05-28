const { Forms } = require("../models")
const { form_validate } = require("../validators/forms_validators")
const nodemailer = require("nodemailer")

const getFormData = async (req, res) => {
    try {
        const data = await Forms.findAll()

        return res.send({ code: 200, message: "Successfully Get The Data", data })
    } catch (error) {
        return res.send({ code: 401, message: error.message })
    }
}

const addNewFromData = async (req, res) => {
    try {

        const result = await form_validate.validateAsync(req.body)
        const { fullName, email, subject, message } = result

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'makayla56@ethereal.email',
                pass: 'PGHUXe2wzB18CSkm6d'
            }
        })
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'makayla56@ethereal.email', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
            //  html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

        const data = await Forms.create({
            fullName: fullName,
            email: email,
            subject: subject,
            message: message
        })

        return res.send({ code: 200, message: "Message Send Successfully", data })
    } catch (error) {
        return res.send({ code: 401, message: error.message })
    }
}

module.exports = {
    getFormData, addNewFromData
}