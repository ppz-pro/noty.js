export default {
  show(content, container) {
    container.append(content)
  },
  close(content, container) {
    content.remove()
  }
}