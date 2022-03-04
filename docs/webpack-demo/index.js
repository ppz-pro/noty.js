import noty from '@ppzp/noty'
import '@ppzp/noty/content/index.css'

function el(className) {
  return document.querySelector('.' + className)
}

el('info').onclick = function() {
  noty.info('一条普通通知')
}
el('success').onclick = function() {
  noty.success('成了~')
}
el('warn').onclick = function() {
  noty.warn('警告！')
}
el('error').onclick = function() {
  noty.error('出错了')
}
el('loading').onclick = function() {
  noty.loading('加载中...')
}