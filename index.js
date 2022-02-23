import Animation from './animation/index.js'
import Content from './content/index.js'

export default Noty({
  Animation, Content
})

export
function Noty({
  rootClass = '',
  customPosition,
  mount = document.querySelector('body'),
  Content,
  Animation,
  duration = 3000
}) {
  const root = document.createElement('div')
  root.className = 'ppz-noty-root ' + rootClass
  if(!customPosition) {
    root.style.position = 'fixed'
    root.style.right = '1em'
    root.style.top = '1em'
  }
  mount.append(root)

  return new Proxy(Content, {
    get(target, method) {
      return function() {
        let closed = false
        const instance = {
          root,
          duration, // 传到“目标方法”里，便于设置 duration（show 之前设置有效，之后无效）
          closed: () => closed, // 防止外部修改
          close() {
            if(closed) throw Error('通知已经关闭')
            if(instance.onClose) instance.onClose()
            closed = true
            Animation.close(content, root)
          }
        }
        var content = instance.content = Content[method].apply(instance, arguments)
        Animation.show(content, root)
        if(instance.duration != 0)
          instance.timeoutID = setTimeout(instance.close, instance.duration)
        return instance
      }
    }
  })
}