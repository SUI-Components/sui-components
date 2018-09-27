/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React from 'react'

import AtomUpload from '../../../../components/atom/upload/src'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import IconUpload from './iconUpload.js'
import IconSuccess from './iconSuccess.js'

import './index.scss'

const textActive = 'Click or drag file to this area to upload'
const textSuccess = 'Your file has been uploaded'
const textExplanation =
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
                  textActive={textActive}
                  textExplanation={textExplanation}
                />
              )
            return (
              <AtomUpload iconUpload={IconUpload} textActive={textActive} />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h2>Success</h2>
        <LayoutMediaQuery>
          {({XS}) => {
            if (XS)
              return (
                <AtomUpload
                  iconSuccess={IconSuccess}
                  textSuccess={textSuccess}
                  status="success"
                />
              )
            return (
              <AtomUpload
                status="success"
                iconSuccess={IconSuccess}
                textSuccess={textSuccess}
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
    </div>
  )
}

export default Demo
