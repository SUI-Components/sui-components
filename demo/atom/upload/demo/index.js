/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React, {Component} from 'react'

import AtomUpload, {
  uploadStatuses
} from '../../../../components/atom/upload/src'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'
import AtomSpinner from '@s-ui/react-atom-spinner'

import IconActive from './icons/iconActive.js'
import IconSuccess from './icons/iconSuccess.js'
import IconError from './icons/iconError.js'

import './index.scss'

const textActive = 'Click or drag file to this area to upload'
const textSuccess = 'Your file has been uploaded'
const textError = 'Something went wrong!'
const textUpload = 'The file is being uploaded...'
const textExplanation =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

console.log(uploadStatuses)

class StatusContainer extends Component {
  constructor() {
    super()
    this.state = {status: uploadStatuses.ACTIVE}

    this.onFilesSelection = this.onFilesSelection.bind(this)
  }

  onFilesSelection(files) {
    console.log('StatusContainer → onFilesSelection')
    console.log(files)
    this.setState(
      {
        status: uploadStatuses.UPLOAD
      },
      () => {
        setTimeout(() => {
          this.setState({
            status: Math.round(Math.random())
              ? uploadStatuses.SUCCESS
              : uploadStatuses.ERROR
          })
        }, 3000)
      }
    )
  }

  render() {
    const {textExplanation, ...props} = this.props
    const {status} = this.state
    const {onFilesSelection} = this
    return (
      <div>
        <AtomUpload
          {...props}
          onFilesSelection={onFilesSelection}
          status={status}
        />
      </div>
    )
  }
}

const Demo = () => {
  return (
    <div>
      <h1>AtomUpload</h1>
      <h2>Dynamic Behaviour</h2>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <StatusContainer
          iconActive={IconActive}
          textActive={textActive}
          textExplanation={textExplanation}
          iconUpload={AtomSpinner}
          textUpload={textUpload}
          iconSuccess={IconSuccess}
          textSuccess={textSuccess}
          iconError={IconError}
          textError={textError}
        />
      </div>
      <h2>Use Cases</h2>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Active</h3>
        <LayoutMediaQuery>
          {({XS}) => {
            if (XS) {
              return (
                <AtomUpload
                  status="active"
                  iconActive={IconActive}
                  textActive={textActive}
                  onFilesSelection={console.log}
                  textExplanation={textExplanation}
                />
              )
            }
            return (
              <AtomUpload
                status="active"
                onFilesSelection={console.log}
                iconActive={IconActive}
                textActive={textActive}
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive DemoAtomUpload-section--responsive-large">
        <h3>Active</h3>
        <LayoutMediaQuery>
          {({XS}) => {
            if (XS) {
              return (
                <AtomUpload
                  status="active"
                  iconActive={IconActive}
                  textActive={textActive}
                  onFilesSelection={console.log}
                  textExplanation={textExplanation}
                />
              )
            }
            return (
              <AtomUpload
                status="active"
                onFilesSelection={console.log}
                iconActive={IconActive}
                textActive={textActive}
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Upload</h3>
        <AtomUpload
          status="upload"
          iconUpload={AtomSpinner}
          textUpload={textUpload}
        />
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Success</h3>
        <AtomUpload
          status="success"
          iconSuccess={IconSuccess}
          textSuccess={textSuccess}
        />
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Error</h3>
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
