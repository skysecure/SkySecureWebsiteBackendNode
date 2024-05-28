const express = require("express")
const { ebook_controllers } = require("../controllers")
const ebook_routers = express.Router()

ebook_routers.get("/list", ebook_controllers.getEbook)
ebook_routers.post("/request", ebook_controllers.addEquryDetails)

module.exports = ebook_routers