const Graph = require('node-dijkstra')

const findDistance = async (users, user1, user2) => {
  const friends = new Graph()

  users.forEach(({ id, friendList }) => {
    // creating the graph
      const nodeName = String.fromCharCode(64 + id)
      const neighbors = {}
  
      friendList.forEach(friendId => {
          neighbors[String.fromCharCode(64 + friendId)] = 1
      })

      friends.addNode(nodeName, neighbors)
  })

  const path = friends.path(
    String.fromCharCode(64 + user1), 
    String.fromCharCode(64 + user2),
    { cost: true }
  )

  return path
}

module.exports = {
  findDistance
}