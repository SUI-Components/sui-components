import {H1, H2, Paragraph, Article} from '@s-ui/documentation-library'

import AtomSpinner from '../src/index.js'
import FullScreenSpinner from './FullScreenSpinner.js'
import SpinnerWrapper from './SpinnerWrapper.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Spinner</H1>
      <Paragraph>
        An animated loop used for giving users feedback while the content of a
        page or section is being loaded.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Infinite spinner</H2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Paragraph>
        <AtomSpinner />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Delayed spinner</H2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Paragraph>
        <AtomSpinner delayed />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Spinner While content is loading</H2>
        <SpinnerWrapper />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Full Screen Spinner</H2>
        <FullScreenSpinner />
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Dark mode Spinner</H2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Paragraph>
        <AtomSpinner noBackground />
      </Article>
    </div>
  )
}

export default Demo
