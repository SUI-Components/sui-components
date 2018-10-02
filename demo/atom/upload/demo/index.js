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

const textActive = 'Click or drag file(s) to this area to upload'
const textSuccess = 'Your file(s) have been uploaded'
const textError = 'Something went wrong!'
const textUpload = 'The file(s) are being uploaded...'
const textExplanation =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

class DynamicStatusContainer extends Component {
  constructor() {
    super()
    this.state = {
      status: uploadStatuses.ACTIVE,
      files: []
    }

    this.onFilesSelection = this.onFilesSelection.bind(this)
  }

  onFilesSelection(files) {
    const fileNames = files.map(({name}) => name)
    this.setState(
      {
        status: uploadStatuses.UPLOAD,
        files: fileNames
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
    const {status, files} = this.state
    const {onFilesSelection} = this
    return (
      <div>
        <AtomUpload
          {...props}
          onFilesSelection={onFilesSelection}
          status={status}
        />
        {!!files.length && (
          <p>Selected file(s) to upload: {files.join(', ')}</p>
        )}
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
        <p>
          Click on the component or drag&drop some files to start upload
          simulation
        </p>
        <DynamicStatusContainer
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
                  status={uploadStatuses.ACTIVE}
                  iconActive={IconActive}
                  textActive={textActive}
                  textExplanation={textExplanation}
                />
              )
            }
            return (
              <AtomUpload
                status={uploadStatuses.ACTIVE}
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
                  status={uploadStatuses.ACTIVE}
                  iconActive={IconActive}
                  textActive={textActive}
                  textExplanation={textExplanation}
                />
              )
            }
            return (
              <AtomUpload
                status={uploadStatuses.ACTIVE}
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
          status={uploadStatuses.UPLOAD}
          iconUpload={AtomSpinner}
          textUpload={textUpload}
        />
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Success</h3>
        <AtomUpload
          status={uploadStatuses.SUCCESS}
          iconSuccess={IconSuccess}
          textSuccess={textSuccess}
        />
      </div>
      <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
        <h3>Error</h3>
        <AtomUpload
          iconError={IconError}
          textError={textError}
          status={uploadStatuses.ERROR}
        />
      </div>
    </div>
  )
}

export default Demo
