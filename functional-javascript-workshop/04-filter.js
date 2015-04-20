function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(filterAux).map(mapAux)
}

function filterAux(item) {
  if(item.message.length < 50) {
    return true
  } else {
    return false
  }
}

function mapAux(item) {
  return item.message
}

module.exports = getShortMessages
