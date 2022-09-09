import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeImageEditor from '../../src/index.js'
import {DEMO_IMAGE} from '../settings.js'
import CustomChildren from './CustomChildren.js'

const ArticleCustomChildren = ({className}) => {
  const [croppedImage, setCroppedImage] = useState(DEMO_IMAGE)

  return (
    <Article className={className}>
      <H2>Customise the layout using a custom Children</H2>
      <Paragraph>
        The developer is able to change the default layout giving a custom
        children. It had to contain the <Code>MoleculeImageEditorSliders</Code>{' '}
        and <Code>MoleculeImageEditorCropper</Code>
      </Paragraph>

      <MoleculeImageEditor
        onChange={setCroppedImage}
        image={DEMO_IMAGE}
        cropLabelText="Crop"
        rotateLabelText="Rotate"
      >
        <CustomChildren />
      </MoleculeImageEditor>
      <H2>Result</H2>
      <img src={croppedImage} style={{width: '300px'}} />
    </Article>
  )
}

ArticleCustomChildren.displayName = 'ArticleCustomChildren'

ArticleCustomChildren.propTypes = {
  className: PropTypes.string
}

export default ArticleCustomChildren
