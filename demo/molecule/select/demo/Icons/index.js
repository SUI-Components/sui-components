import React from 'react'

const IconCloseTag = () => (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const IconArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M14.5 18.5a1 1 0 0 1-.71-.29l-4.08-4.08a3 3 0 0 1 0-4.24l4.09-4.1a1 1 0 0 1 1.41 1.41l-4.09 4.1a1 1 0 0 0 0 1.41l4.08 4.08a1 1 0 0 1-.71 1.71h.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use
        fill="#666"
        fillRule="nonzero"
        transform="matrix(0 -1 -1 0 24.189 24.189)"
        xlinkHref="#a"
      />
    </g>
  </svg>
)

export {IconCloseTag, IconArrowDown}
