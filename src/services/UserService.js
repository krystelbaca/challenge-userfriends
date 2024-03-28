const User = require('../models/User')
const { findDistance } = require('./../utils/findDistance')

const getUsers = async () => {
  return User.find()
}

const findOne = async (userId) => {  
  return User.findOne({ id: userId })
}

const createUser = async (user) => {
  const newUser = new User(user)
  const savedUser = await newUser.save()
  
  return savedUser
}

const editUser = async (userId, body) => {
  const user = await findOne(userId)

  if (!user) {
    throw new Error('User not found')
  }

  return user.save(body)
}

const findRelationshipDistance = async (friend1, friend2) => {
  const users = await getUsers()
  const distance = await findDistance(users, friend1, friend2)

  const { cost } = distance

  switch(cost) {
    case 1:
      return "1st distance relationship"
    case 2:
      return "2nd distance relationship"
    case 3:
      return "3rd distance relationship"
    default:
      return "No direct relationship found"
  }

}

const removeUser = async (userId) => {
  const user = await findOne(userId)

  return User.deleteOne(user)

}

module.exports = {
  getUsers,
  findOne,
  createUser,
  editUser,
  findRelationshipDistance,
  removeUser,
}
