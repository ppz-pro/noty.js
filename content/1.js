import { escapeHtml } from '../utils.js'

export default {
  info(text) {
    return YYZ('info', text)
  },
  success(text) {
    return YYZ('success', text)
  },
  warn(text) {
    return YYZ('warn', text)
  },
  error(text) {
    return YYZ('error', text)
  },
  loading(text) {
    return YYZ('loading', text)
  }
}

function YYZ(className, text) {
  const div = document.createElement('div')
  div.className = 'ppz-noty-item1 ppz-noty-item1-' + className
  div.innerHTML = `
    <i class = 'ppz-noty-icon ppz-noty-icon-${className}'></i>
    <span>${escapeHtml(text)}</span>
  `
  return div
}