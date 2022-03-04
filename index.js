import Noty from './noty.js'
import CreateAnimation from './animation/index.js'
import CreateContent from './content/index.js'

export default Noty({
  Animation: CreateAnimation(),
  Content: CreateContent()
})