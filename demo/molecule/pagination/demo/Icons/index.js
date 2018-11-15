import React from 'react'

const prevButtonIcon = () => (
  <svg width={16} height={16} style={{background: 'transparent'}}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#4D4D4D"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.889 13.5L4.356 8l6.533-5.5"
      />
    </g>
  </svg>
)
const nextButtonIcon = () => (
  <svg width={16} height={16}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#4D4D4D"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2.5L12 8l-6 5.5h0"
      />
    </g>
  </svg>
)

export {prevButtonIcon, nextButtonIcon}
