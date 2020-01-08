import React from 'react'
import Button from '@s-ui/react-atom-button'

export default (
  {className} // eslint-disable-line
) => (
  <header className={className}>
    <Button type="accent">Button 1</Button>
    <Button type="accent">Button 2</Button>
  </header>
)
