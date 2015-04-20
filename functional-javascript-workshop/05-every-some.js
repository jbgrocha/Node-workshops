// This feels like write only code ... :/
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(
      function userValid(submittedUser) {
        return goodUsers.some(
          function compareUsers(goodUser) {
            return goodUser.id === submittedUser.id
          }
        )
      }
    )
  }
}
