// Was I too hardcore? with the recursion? and the binding?
// way too different
// I think the success feels ... accidental
// Neither the load method nor the done callback were used properly
// load is being used as a loadedUsers  array
// done is being used as a counter
// Holy crap, talk about being zoned out...

// function loadUsers(userIds, load, done) {
//   return function loadNextUser(loadedUsers, userIndex) {
//     if (userIndex < loadedUsers.length -1) {
//       return loadNextUser(loadedUsers.push(userIds[userIndex]), userIndex + 1)
//     } else {
//       return
//     }
//   }.bind(this, [], 0)
//
// }

// Oficial solution
// What the hell is load() ?
// RTFM!
// load is the loading method for each user
// it takes a userId and its index in the array
// done is the callback handler
function loadUsers(userIds, load, done) {
  var completed = 0
  var users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++completed === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
