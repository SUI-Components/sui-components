import {Article, H1, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSpinner, {atomSpinnerOverlayTypes} from '../src/index.js'
import CustomChildren from './CustomChildren.js'
import CustomLoader from './CustomLoader.js'
import FullScreenSpinner from './FullScreenSpinner.js'
import {CLASS_SECTION} from './settings.js'
import SpinnerWrapper from './SpinnerWrapper.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Spinner</H1>
      <Paragraph>
        An animated loop used for giving users feedback while the content of a page or section is being loaded.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Infinite spinner</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Delayed spinner</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner isDelayed />
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

      <H2>Overlay types</H2>
      <Paragraph>Different background overlay types. Also the colors of the loader are modified.</Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Light overlay type, the default one</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.LIGHT} />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Accent overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.ACCENT} />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Dark overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.DARK} />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Primary overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.PRIMARY} />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Transparent overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.TRANSPARENT} />
      </Article>

      <br />
      <H2>Overlay types over a dark content</H2>
      <Paragraph>Different background overlay types.</Paragraph>
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Light overlay type, the default one</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.LIGHT} />
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Accent overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.ACCENT} />
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Dark overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.DARK} />
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Primary overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.PRIMARY} />
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Transparent overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.TRANSPARENT} />
      </Article>

      <H2>With children</H2>
      <Paragraph>Children receives the same props from AtomSpinner, to fully customize the component.</Paragraph>
      <Paragraph>
        Take a look on the children text color. It changes depending of the AtomSpinner overlayType prop value, because
        our custom component is also receiving the overlayType prop.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>With custom text children</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner>
          <CustomChildren>With custom text children</CustomChildren>
        </AtomSpinner>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>With custom text children and dark overlay type</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner overlayType={atomSpinnerOverlayTypes.DARK}>
          <CustomChildren>With custom text children and dark overlay type</CustomChildren>
        </AtomSpinner>
      </Article>
      <br />
      <Article className={CLASS_SECTION} style={{height: '400px'}}>
        <H2>With children</H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner>
          <CustomChildren>
            <img src="https://upload.wikimedia.org/wikipedia/en/d/df/BJ_Blazkowicz.png" />
          </CustomChildren>
        </AtomSpinner>
      </Article>
      <br />
      <Article className={CLASS_SECTION} style={{height: '400px'}}>
        <H2>With custom loader as children </H2>
        <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Paragraph>
        <AtomSpinner>
          <CustomLoader>
            <img src="https://upload.wikimedia.org/wikipedia/en/d/df/BJ_Blazkowicz.png" />
          </CustomLoader>
        </AtomSpinner>
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="dark">
        <H2>Full Screen Spinner with children and primary overlay</H2>
        <FullScreenSpinner overlayType={atomSpinnerOverlayTypes.PRIMARY}>
          <CustomChildren>With custom text children and primary colored overlay</CustomChildren>
        </FullScreenSpinner>
      </Article>
      <br />
    </div>
  )
}

export default Demo
