/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {Component} from 'react'

import AtomUpload, {uploadStatuses} from 'components/atom/upload/src'

import {Button} from '@s-ui/documentation-library'
import AtomSpinner from '@s-ui/react-atom-spinner'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import IconActive from './icons/iconActive.js'
import IconError from './icons/iconError.js'
import IconSuccess from './icons/iconSuccess.js'

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
    const status = files.length ? uploadStatuses.SUCCESS : uploadStatuses.ERROR
    this.setState({
      status,
      files: fileNames
    })
  }

  render() {
    const {textExplanation, ...props} = this.props
    const {status, files} = this.state
    const {onFilesSelection} = this
    return (
      <div>
        <AtomUpload
          {...props}
          status={status}
          onFilesSelection={onFilesSelection}
          textExplanation={textExplanation}
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
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
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
            iconUpload={<AtomSpinner noBackground />}
            textUpload={textUpload}
            iconSuccess={IconSuccess}
            textSuccess={textSuccess}
            iconError={IconError}
            textError={textError}
          />
        </div>
        <h2>With action button</h2>
        <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
          <p>
            Click on the component or drag&drop some files to start upload
            simulation
          </p>
          <DynamicStatusContainer
            iconActive={IconActive}
            textActive={textActive}
            textExplanation={textExplanation}
            iconUpload={<AtomSpinner noBackground />}
            textUpload={textUpload}
            iconSuccess={IconSuccess}
            textSuccess={textSuccess}
            iconError={IconError}
            textError={textError}
            actionButton={<Button>Click to upload your files</Button>}
          />
        </div>
        <h2>Accept only one file</h2>
        <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
          <p>
            Click on the component or drag&drop some files to start upload
            simulation
          </p>
          <DynamicStatusContainer
            iconActive={IconActive}
            textActive={textActive}
            textExplanation={textExplanation}
            iconUpload={<AtomSpinner noBackground />}
            textUpload={textUpload}
            iconSuccess={IconSuccess}
            textSuccess={textSuccess}
            iconError={IconError}
            textError={textError}
            multiple={false}
            actionButton={<Button>Click to upload your files</Button>}
          />
        </div>
        <h2>accept prop = ".pdf" -> Only PDF files</h2>
        <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
          <p>
            Click on the component or drag&drop some files to start upload
            simulation
          </p>
          <DynamicStatusContainer
            iconActive={IconActive}
            textActive={textActive}
            textExplanation={textExplanation}
            iconUpload={<AtomSpinner noBackground />}
            textUpload={textUpload}
            iconSuccess={IconSuccess}
            textSuccess={textSuccess}
            iconError={IconError}
            textError={textError}
            accept=".pdf"
          />
        </div>
        <h2>MaxSize 60000 bytes</h2>
        <div className="DemoAtomUpload-section DemoAtomUpload-section--responsive">
          <p>
            Click on the component or drag&drop some files to start upload
            simulation
          </p>
          <DynamicStatusContainer
            iconActive={IconActive}
            textActive={textActive}
            textExplanation={textExplanation}
            iconUpload={<AtomSpinner noBackground />}
            textUpload={textUpload}
            iconSuccess={IconSuccess}
            textSuccess={textSuccess}
            iconError={IconError}
            textError={textError}
            maxSize={60000}
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
            iconUpload={<AtomSpinner noBackground />}
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
    </div>
  )
}

export default Demo
