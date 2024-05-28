const { Ebook } = require("../models")

const getEbook = async (req, res) => {
    try {

        const data = await Ebook.findAll()
        return res.send({ code: 200, message: "Get The Data Successfully", data })
    } catch (error) {
        return res.send({ code: 401, message: error.message })
    }
}

const addEquryDetails = async (req, res) => {
    try {

        const { firstName, lastName, official_email, phone_number, company, job_title, country } = req.body

        const data = await Ebook.create({
            firstName,
            lastName,
            official_email,
            phone_number,
            company,
            job_title,
            country,
        })


        return res.send({ code: 200, message: "Request Added Successfully", data })
    } catch (error) {
        return res.send({ code: 401, message: error.message })
    }
}

module.exports = {
    getEbook, addEquryDetails
}