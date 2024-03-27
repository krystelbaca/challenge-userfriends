const User = require('../models/User')
const dijkstra = require('../utils/findDistance')

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

const findRelationshipDistance = async (user1, user2) => {
  // create dictionary to get ids -> letters
  const users = await getUsers()
  const dictionary = Object.fromEntries(
    users.map(({ id }) => [
      id, String.fromCharCode(64 + id)
    ])
  )

  const friend1 = dictionary[user1]
  const friend2 = dictionary[user2]
  
  const distance = dijkstra.findDistance(friend1, friend2)

  return distance

}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  findRelationshipDistance,
}
