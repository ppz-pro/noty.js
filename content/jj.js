export default {
  info(text) {
    return Div('info: ' + text)
  },
  success(text) {
    return Div('success: ' + text)
  },
  warn(text) {
    return Div('warn: ' + text)
  },
  error(text) {
    return Div('error: ' + text)
  }
}

function Div(text) {
  const div = document.createElement('div')
  div.innerHTML = text // 未做 escape
  return div
}