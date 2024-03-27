const User = require('../models/User')
const { findDistance } = require('./../utils/findDistance')

const getUsers = async () => {
  return User.find()
}

const getUserById = async (userId) => {
  return User.findById(userId)
}

const createUser = async (user) => {
  const newUser = new User(user);
  const savedUser = await newUser.save();
  
  return savedUser;
}

const findRelationshipDistance = async (friend1, friend2) => {
  const users = await getUsers()
  const distance = await findDistance(users, friend1, friend2)

  const { cost } = distance

  switch(cost) {
    case 1:
      return "1st distance relationship";
    case 2:
      return "2nd distance relationship";
    case 3:
      return "3rd distance relationship";
    default:
      return "No direct relationship found";
  }

}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  findRelationshipDistance,
}
