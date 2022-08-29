import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeImageEditor from '../../src/index.js'
import {DEMO_IMAGE} from '../settings.js'

const ArticleDefault = ({className}) => {
  const [croppedImage, setCroppedImage] = useState(DEMO_IMAGE)

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        There are some optional properties that allow to customize the Image
        Editor behavior.
      </Paragraph>

      <MoleculeImageEditor
        onChange={setCroppedImage}
        image={DEMO_IMAGE}
        cropLabelText="Crop"
        rotateLabelText="Rotate"
      />
      <Paragraph>
        By default, the component has a vertical alignment of its inner
        elements. On top, it sets the cropper, and on bottom, the sliders
        editor.
      </Paragraph>
      <H2>Result</H2>
      <img src={croppedImage} style={{width: '300px'}} />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
