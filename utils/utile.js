// εΊεε
function stringify (data) {
  try {
    return JSON.stringify(data)
  }catch {
    return ''
  }
}

module.exports = {stringify}