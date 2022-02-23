export default {
  success(text) {
    const div = document.createElement('div')
    div.append('success: ' + text)
    return div
  },
  error(text) {
    const div = document.createElement('div')
    div.append('error: ' + text)
    return div
  },
  abc(text) {
    // 通常情况下，不应该以 abc 作为函数的名字
    // 这里只是想提醒：方法的名字不是固定的，可以自定
    const div = document.createElement('div')
    div.append('abc: ' + text)
    return div
  }
}
