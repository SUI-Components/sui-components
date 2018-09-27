/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React from 'react'

import AtomUpload from '../../../../components/atom/upload/src'
import IconUpload from './iconUpload.js'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import './index.scss'

const textPrimary = 'Click or drag file to this area to upload'
const textSecondary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const Demo = () => {
  return (
    <div>
      <h1>AtomCard</h1>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h2>Responsive</h2>
        <LayoutMediaQuery>
          {({XS}) => {
            if (XS)
              return (
                <AtomUpload
                  iconUpload={IconUpload}
                  iconSuccess={IconUpload}
                  textPrimary={textPrimary}
                  textSecondary={textSecondary}
                />
              )
            return (
              <AtomUpload
                iconUpload={IconUpload}
                iconSuccess={IconUpload}
                textPrimary={textPrimary}
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
    </div>
  )
}

export default Demo
