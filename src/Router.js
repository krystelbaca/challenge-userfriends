const express = require("express")

const router = express.Router()

const UserController = require('./controllers/UserController')

// Get all users
router.get("/users", UserController.getUsers)

// Get Relationship distance between users
router.get("/relationship-distance", UserController.findRelationshipDistance)

// Create user
router.post("/create-user", UserController.createUser)

module.exports = router