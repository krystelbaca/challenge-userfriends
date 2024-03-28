const userService = require('../services/UserService')

const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers()

    return res.status(200).json(response)
  } catch (error) {
    console.error('Error getting users', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    return res.status(201).json(user)

  } catch (error) {
    console.error('Error creating user:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const editUser = async (req, res) => {
  try {
    const userId = req.query.userId
    const user = await userService.editUser(userId, req.body)
    return res.status(200).json(user)

  } catch (error) {
    console.error('Error editing user:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const findRelationshipDistance = async (req, res) => {
  try {
    const user1 = parseInt(req.query.user1)
    const user2 = parseInt(req.query.user2)

    const distance = await userService.findRelationshipDistance(user1, user2)
    return res.status(200).json({ distance })

  } catch (error) {
    console.error('Error getting users distance:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const removeUser = async (req, res) => {
  try {
    const userId = req.query.userId
    const user = await userService.removeUser(userId)
    return res.status(200).json(user)

  } catch (error) {
    console.error('Error removing user:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getUsers,
  createUser,
  editUser,
  findRelationshipDistance,
  removeUser,
}