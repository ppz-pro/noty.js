// 想用这个 content 的样式，只引用 css 就可以了

export default {
  info: createShow('info'),
  success: createShow('success'),
  warn: createShow('warn'),
  error: createShow('error'),
  loading: createShow('loading', {
    duration: 0
  })
}

function createShow(className, defaults) {
  return function(text, options = {}) {
    if(defaults)
      Object.assign(options, defaults)
    if(options.duration != undefined)
      this.duration = options.duration
    this.onClose = options.onClose
    
    const div = Div('', // content 部分再包一层，避免之上的样式影响动画效果
      `<div class='ppz-noty-item1 ppz-noty-item1-${className}'>
        <i class='ppz-noty-icon ppz-noty-icon-${className}'></i>
        <span class='text'></span>
      </div>`
    )
    div.querySelector('.text').append(text) // 使用 append 方法，省去 escape 操作
    if(options.closeBtn) {
      const btn = Div('close-btn', 'x')
      btn.onclick = this.close
      div.querySelector('.ppz-noty-item1').prepend(btn)
    }
    return div
  }
}

function Div(className, innerHTML) {
  const div = document.createElement('div')
  div.className = className
  div.innerHTML = innerHTML
  return div
}