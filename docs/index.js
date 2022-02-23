import noty from '../index.js'

el('.basic .info').onclick = function() {
  noty.info('一条普通通知')
}
el('.basic .success').onclick = function() {
  noty.success('成了~')
}
el('.basic .warn').onclick = function() {
  noty.warn('警告！')
}
el('.basic .error').onclick = function() {
  noty.error('出错了')
}
el('.basic .loading').onclick = function() {
  noty.loading('加载中...')
}

el('.duration button').onclick = function() {
  noty.info('停留 1 秒', {
    duration: 1000 // 单位：毫秒
  })
}

el('.hold button').onclick = function() {
  noty.info('我将永存', {
    duration: 0
  })
}

el('.closable button').onclick = function() {
  noty.info('注意右上', {
    closeBtn: true
  })
}

function el(selector) {
  return document.querySelector(selector)
}