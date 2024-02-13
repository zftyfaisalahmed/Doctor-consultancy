const fileRoute = require("express").Router()
const { readSingleFile, userForm } = require("../controller/userController")

fileRoute.get(`/single/:id`, readSingleFile)

fileRoute.post('/userForm', userForm)

module.exports = fileRoute