import {useState} from 'react'

import MoleculeImageEditor from 'components/molecule/imageEditor/src/index.js'

const DEMO_IMAGE =
  'https://lp-cms-production.imgix.net/features/2019/06/panda-d55d15231c4f.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800'

export default () => {
  const [croppedImage, setCroppedImage] = useState()

  return (
    <div>
      <h1>Component</h1>
      <MoleculeImageEditor
        onChange={setCroppedImage}
        image={DEMO_IMAGE}
        cropLabelText="Crop"
        rotateLabelText="Rotate"
      />
      <h1>Result</h1>
      <img src={croppedImage} style={{width: '300px'}} />
    </div>
  )
}
