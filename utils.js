export
function escapeHTML(target) {
  return target.replace(/[&<>'"]/g, sub => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[sub]))
}