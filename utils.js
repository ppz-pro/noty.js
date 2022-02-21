export
function Disposable(value) { // 一次性的值
  return function(newValue) {
    const tmp = value
    value = newValue
    return tmp
  }
}

export
function escapeHtml(target) {
  return target.replace(/[&<>'"]/g, sub => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[sub]))
}