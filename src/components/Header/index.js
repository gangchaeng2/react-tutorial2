import React from 'react'
import { Link } from 'react-router-dom'

import { 
  Wrap 
} from './styled'

export default () => {
  return (
    <Wrap>
      <Link to="/">홈</Link>
      <Link to="/life-cycle">LifeCycle</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/redux">Redux</Link>
    </Wrap>
  )
}