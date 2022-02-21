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