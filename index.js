import { Disposable } from './utils.js'

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
        
        let dur = disposableDur()
        if(dur == undefined)
          dur = duration
        if(dur != 0)
          setTimeout(() => {
            Animation.close(content, root)
          }, dur)
      }
    },
    set(target, propKey, value) {
      if(propKey == 'duration')
        disposableDur(value)
      return true
    }
  })
}

import Animation from './animation/1.js'
import Content from './content/1.js'

export default NotyFactory({
  Animation,
  Content
})