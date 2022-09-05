import {useState} from 'react'

import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import File from '../src/component/File/index.js'
import FileModel from '../src/Model/FileModel.js'

import {log} from './settings.js'

const Demo = () => {
  const [files, setFiles] = useState([])
  const changeHandler = async event => {
    const responses = await Promise.allSettled(
      Array.from(event.target.files).map(file => new FileModel(file))
    )
    setFiles(responses.map(response => response.value))
  }
  const onCreateHandler = log('onCreate')
  const onUpdateHandler = log('onUpdate')
  const onDeleteHandler = log('onDelete')

  return (
    <div className="sui-StudioPreview">
      <H1>Photo Uploader</H1>
      <Paragraph>
        <Code>MoleculePhotoUploader</Code> is a component that lets you drag and
        drop images on it, or click it to add images. Also, on mobile, let you
        add photos directly taken with the camera.
      </Paragraph>
      {files.map((file, index) => (
        <File
          key={index}
          status={file.status}
          name={file.name}
          value={file.value}
          onCreate={onCreateHandler}
          onUpdate={onUpdateHandler}
          onDelete={onDeleteHandler}
        />
      ))}
      <input type="file" onChange={changeHandler} />
    </div>
  )
}

export default Demo
