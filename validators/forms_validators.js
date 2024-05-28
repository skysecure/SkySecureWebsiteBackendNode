const Joi = require("joi")

const form_validate = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()

})

module.exports = {
    form_validate
}