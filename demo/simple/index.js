import Factory from '../../index.js'

export
const Animation = {
  show(content, container) {
    container.append(content)
  },
  close(content, container) {
    content.remove()
  }
}

export
const Content = {
  info(text) {
    return Div(text, 'info')
  },
  success(text) {
    return Div(text, 'success')
  },
  warn(text) {
    return Div(text, 'warn')
  },
  error(text) {
    return Div(text, 'error')
  }
}
function Div(text, className = '') {
  const content = document.createElement('div')
  content.innerHTML = text
  content.className = className
  return content
}

export default Factory({
  Animation,
  Content
})