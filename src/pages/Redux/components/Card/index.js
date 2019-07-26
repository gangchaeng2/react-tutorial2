import React from 'react'

import { Li } from './styled'

export default ({
  id, text,
  onClickCard,
}) => (
  <Li onClick={onClickCard.bind(null, id)}>
    {text}
  </Li>
)
