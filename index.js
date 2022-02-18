export
function NotyFactory({
  rootClass = '',
  customPosition,
  mount = document.querySelector('body'),
  Content,
  Animation,
  duration = 3000
}) {
  const disposableDur = Disposable()
  const root = document.createElement('div')
  root.className = 'ppz-noty-root ' + rootClass
  if(!customPosition) {
    root.style.position = 'fixed'
    root.style.right = '1em'
    root.style.top = '1em'
  }
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

function Disposable(value) { // 一次性的值
  return function(newValue) {
    const tmp = value
    value = newValue
    return tmp
  }
}

import Animation from './animation/ccz.js'
import Content from './content/jj.js'

export default NotyFactory({
  Animation,
  Content
})