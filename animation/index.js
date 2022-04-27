export default
function CreateAnimation({
  duration = 300 // 动画持续时间
} = {}) {
  const list = [] // 存放所有未关闭的 content（用于区别“关闭后”但动画未结束而滞留在文档流里的 content）
  return {
    show(content, container) {
      list.push(content) // 加入 list
      container.append(content) // 加入文档流
      content.animate([ // 动画
        {
          transform: 'translateY(100%)',
          opacity: 0
        },
        {}
      ], {
        duration,
        easing: 'ease'
      })
    },
    close(content) {
      // FILP 原理 https://aerotwist.com/blog/flip-your-animations/
      // first: 原来的位置
      const firsts = list.map(content => content.getBoundingClientRect())
      // last:
      content.style.position = 'fixed' // (1)从文档流中移除目标 content
      const lasts = list.map(content => {
        content.getAnimations().forEach(ani => ani.cancel()) // (2)取消（停止）一切动画（得到最终“形态”）（同时触发下面的 oncancel）
        return content.getBoundingClientRect() // 1 + 2 => 得到 last
      })
      
      list.forEach((ctt, index) => {
        const first = firsts[index]
        ctt.style.left = first.left + 'px'
        if(ctt == content) { // 待关闭的 content，只要往上移动一个身位就行了（不需要 last）
          ctt.animate([
            { top: first.top + 'px' }, // 回到 first（此时处于“最终形态”）
            {
              top: first.top - first.height + 'px', // 往上移一个身位
              opacity: 0 // fadeOut
            }
          ], {
            duration,
            easing: 'ease'
          })
          .onfinish = function() {
            ctt.remove() // 动画结束时，移出文档流
          }
        } else {
          const last = lasts[index]
          ctt.style.position = 'fixed'
          const ani = ctt.animate([
            { top: first.top + 'px' }, // 回到：first
            { top: last.top + 'px' } // 去向：last
          ], {
            duration,
            easing: 'ease'
          })
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