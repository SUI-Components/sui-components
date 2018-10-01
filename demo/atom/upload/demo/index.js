/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React from 'react'

import AtomUpload from '../../../../components/atom/upload/src'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import IconActive from './iconActive.js'
import IconSuccess from './iconSuccess.js'
import IconError from './iconError.js'

import './index.scss'

const textActive = 'Click or drag file to this area to upload'
const textSuccess = 'Your file has been uploaded'
const textError = 'Something went wrong!'
const textExplanation =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const Demo = () => {
  return (
    <div>
      <h1>AtomCard</h1>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h2>Active</h2>
        <LayoutMediaQuery>
          {({XS}) => {
            if (XS) {
              return (
                <AtomUpload
                  status="active"
                  iconActive={IconActive}
                  textActive={textActive}
                  textExplanation={textExplanation}
                />
              )
            }
            return (
              <AtomUpload
                status="active"
                iconActive={IconActive}
                textActive={textActive}
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h2>Success</h2>
        <AtomUpload
          status="success"
          iconSuccess={IconSuccess}
          textSuccess={textSuccess}
        />
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h2>Error</h2>
        <AtomUpload
          iconError={IconError}
          textError={textError}
          status="error"
        />
      </div>
    </div>
  )
}

export default Demo
