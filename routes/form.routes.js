const express = require("express")
const { form_controllers } = require("../controllers")
const { mode } = require("crypto-js")
const form_routes = express.Router()

form_routes.get("/list", form_controllers.getFormData)
form_routes.post("/create", form_controllers.addNewFromData)

module.exports = form_routes