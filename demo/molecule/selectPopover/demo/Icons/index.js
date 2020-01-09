import React from 'react'
import AtomIcon from '@s-ui/react-atom-icon'

const IconCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.77 20.812l-5-5a.5.5 0 0 0-.707.707l5.417 5.417a.5.5 0 0 0 .76-.062L21.99 2.707a.5.5 0 0 0-.813-.583L7.77 20.812z"
        fillRule="nonzero"
      />
    </svg>
  </AtomIcon>
)

const IconHalfCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M.5 12.5a.5.5 0 010-1h23a.5.5 0 010 1H.5z" />
    </svg>
  </AtomIcon>
)

export {IconCheck, IconHalfCheck}
