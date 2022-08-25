import {useState} from 'react'

import MoleculeImageEditor from 'components/molecule/imageEditor/src/index.js'

import {
  Article,
  H1,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

const DEMO_IMAGE =
  'https://lp-cms-production.imgix.net/features/2019/06/panda-d55d15231c4f.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800'

export default () => (
  <main>
    <H1>Image Editor</H1>
    <Paragraph>
      The ImageEditor component offers an interface with which an existing image
      can be cropped, rotated, and then exported to a blob object. In practice,
      this component allows to select an image (both from a existing public url
      and by getting a blob object url from a local file), edit it, and then
      receive the edited image as a blob object to store it or send to any kind
      of service.
    </Paragraph>
    <Component />
  </main>
)

const Component = () => {
  const [croppedImage, setCroppedImage] = useState()
  const [rowLayout, setRowLayout] = useState(false)
  const [helpText, setHelpText] = useState(false)

  return (
    <Article>
      <H2>Component</H2>
      <Paragraph>
        There are some optional properties that allow to customize the Image
        Editor behavior
      </Paragraph>
      <RadioButtonGroup
        value={rowLayout}
        onChange={(ev, value) => {
          setRowLayout(!value)
        }}
      >
        <RadioButton
          label="Default layout"
          checked={rowLayout === false}
          value
        />
        <RadioButton
          label="Column layout"
          checked={rowLayout === true}
          value={false}
        />
      </RadioButtonGroup>

      <RadioButtonGroup
        value={helpText}
        onChange={(ev, value) => {
          setHelpText(!value)
        }}
      >
        <RadioButton label="No help text" checked={helpText === false} value />
        <RadioButton
          label="With help text"
          checked={helpText === true}
          value={false}
        />
      </RadioButtonGroup>

      <MoleculeImageEditor
        onChange={setCroppedImage}
        image={DEMO_IMAGE}
        cropLabelText="Crop"
        rotateLabelText="Rotate"
        useRowLayout={rowLayout}
        helpText={
          helpText &&
          'This is a help text, it offers a space to write a hint or note that users will read'
        }
      />
      <H2>Result</H2>
      <img src={croppedImage} style={{width: '300px'}} />
    </Article>
  )
}
