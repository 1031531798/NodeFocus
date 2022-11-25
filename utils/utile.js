// 序列化
function stringify (data) {
  try {
    return JSON.stringify(data)
  }catch {
    return ''
  }
}

module.exports = {stringify}