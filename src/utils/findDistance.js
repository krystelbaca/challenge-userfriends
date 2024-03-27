const Graph = require('node-dijkstra')

const findDistance = (friend1, friend2) => {
  const friends = new Graph()

  friends.addNode('A', {B: 1})
  friends.addNode('B', {A:1, C:1})
  friends.addNode('C', {B: 1, D:1})
  friends.addNode('D', {C: 1})

  const distance = friends.path(friend1, friend2, { cost: true })

  const { cost } = distance
    switch (cost) {
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

module.exports = { findDistance }