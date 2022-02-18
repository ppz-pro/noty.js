export
function createCCZAnimation({
  duration = 300 // 动画持续时间
} = {}) {
  const list = [] // 存放所有未关闭的 content（用于区别“关闭后”但动画未结束而滞留在文档流里的 content）
  return {
    show(content, container) {
      list.push(content)
      container.append(content)
      content.animate([
        {
          transform: 'translateY(100%)',
          opacity: 0
        },
        {}
      ], duration)
    },
    close(content) {
      // FILP 原理 https://aerotwist.com/blog/flip-your-animations/
      // first
      const firsts = list.map(content => content.getBoundingClientRect())
      // last
      content.style.position = 'fixed' // 1. 目标 content 从文档流移除
      const lasts = list.map(content => {
        content.getAnimations().forEach(ani => ani.cancel()) // 2. 取消所有动画（同时触发下面的 oncancel）
        return content.getBoundingClientRect() // 1 + 2 => 得到 last
      })
      
      list.forEach((ctt, index) => {
        const first = firsts[index]
        ctt.style.left = first.left + 'px'
        if(ctt == content) {
          ctt.animate([
            { top: first.top + 'px' }, // invert
            { // go
              top: first.top - first.height + 'px', // 往上移一个身位
              opacity: 0 // fadeOut
            }
          ], duration)
          .onfinish = function() {
            ctt.remove() // 动画结束时，移出
          }
        } else {
          const last = lasts[index]
          ctt.style.position = 'fixed'
          const ani = ctt.animate([
            { top: first.top + 'px' }, // invert
            { top: last.top + 'px' } // go
          ], duration)
          ani.onfinish = ani.oncancel = function() {
            ctt.style.position = '' // 立刻回归**真实**位置
          }
        }
      })
      // 立刻从 list 中移出 content（此时 content 还因动画未结束而滞留在文档流）
      list.splice(list.indexOf(content), 1)
    }
  }
}

export default createCCZAnimation()