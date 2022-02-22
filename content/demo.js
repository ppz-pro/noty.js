import { escapeHTML } from '../utils.js'

export default {
  success(text) {
    const div = document.createElement('div')
    div.innerHTML = 'success: ' + escapeHTML(text)
    return div
  },
  error(text) {
    const div = document.createElement('div')
    div.innerHTML = 'error: ' + escapeHtml(text)
    return div
  },
  abc(text) {
    // 通常情况下，不应该以 abc 作为函数的名字
    // 这里只是想提醒：方法的名字不是固定的，可以自定
    const div = document.createElement('div')
    div.innerHTML = 'abc: ' + escapeHtml(text)
    return div
  }
}
