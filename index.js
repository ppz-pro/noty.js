export default
function NotyFactory({
  rootClass = '',
  mount = document.querySelector('body'),
  Content,
  Animation,
  duration = 3000
}) {
  const disposableDur = Disposable()
  const root = document.createElement('div')
  root.className = 'ppz-noty-root ' + rootClass
  mount.append(root)

  return new Proxy(Content, {
    get(target, method, receiver) {
      return function() {
        const content = Content[method](...arguments)
        Animation.show(content, root)
        
        setTimeout(() => {
          Animation.close(content, root)
        }, disposableDur() ?? duration)
      }
    },
    set(target, propKey, value) {
      if(propKey == 'duration')
        disposableDur(value)
      return true
    }
  })
}

function Disposable(value) {
  return function(newValue) {
    const tmp = value
    value = newValue
    return tmp
  }
}