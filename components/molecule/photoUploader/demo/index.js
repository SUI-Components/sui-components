import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import DefaultArticle from './articles/DefaultArticle.js'
import HideBothButtonsArticle from './articles/HideBothButtonsArticle.js'
import HideDeleteButtonArticle from './articles/HideDeleteButtonArticle.js'
import HideRotateButtonArticle from './articles/HideRotateButtonArticle.js'
import InitialPhotosArticle from './articles/InitialPhotosArticle.js'
import WithContentArticle from './articles/WithContentArticle.js'
import {CLASS_DEMO_SECTION} from './config.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Photo Uploader</H1>
      <Paragraph>
        <Code>MoleculePhotoUploader</Code> is a component that lets you drag and drop images on it, or click it to add
        images. Also, on mobile, let you add photos directly taken with the camera.
      </Paragraph>
      <DefaultArticle className={CLASS_DEMO_SECTION} />
      <br />
      <HideDeleteButtonArticle className={CLASS_DEMO_SECTION} />
      <br />
      <HideRotateButtonArticle className={CLASS_DEMO_SECTION} />
      <br />
      <HideBothButtonsArticle className={CLASS_DEMO_SECTION} />
      <br />
      <InitialPhotosArticle className={CLASS_DEMO_SECTION} />
      <br />
      <WithContentArticle className={CLASS_DEMO_SECTION} />
    </div>
  )
}

export default Demo
