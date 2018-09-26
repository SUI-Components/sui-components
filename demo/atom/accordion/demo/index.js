/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import AtomAccordion from '../../../../components/atom/accordion/src'
import MoleculeCollapsible from '../../../../components/molecule/collapsible/src'
import './index.scss'

const icon = GetIcon()
const showText = 'Show'
const hideText = 'Hide'
const height = 70

function Text() {
  return (
    <p style={{margin: 0}}>
      Lorem ipsum dolor sit ametnibus lobort elit condimentum eget pulvinar eu
      lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit
      ac mollis justo. Ut ac sagittis ipsum.
    </p>
  )
}

function GetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="16px"
      height="16px"
      viewBox="0 0 32 32"
    >
      <path d="M30,9l1,1c1,1,1,2,0,2L17,25c-1,1-2,1-2,0 L2,12c-1-1-1-2,0-2l1-1c1-1,2-1,2,0L16,20L28,9 C28,8,29,8,30,9z" />
    </svg>
  )
}

const Demo = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <AtomAccordion>
        <MoleculeCollapsible
          icon={icon}
          showText={showText}
          hideText={hideText}
        >
          <Text />
        </MoleculeCollapsible>
        <MoleculeCollapsible
          icon={icon}
          showText={showText}
          hideText={hideText}
          isCollapsed={false}
        >
          <Text />
        </MoleculeCollapsible>
        <MoleculeCollapsible
          icon={icon}
          showText={showText}
          hideText={hideText}
        >
          <Text />
        </MoleculeCollapsible>
      </AtomAccordion>
    </div>
  )
}

export default Demo
