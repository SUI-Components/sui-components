/* eslint react/prop-types: 0 */
import SimpleModalStory from './SimpleModalStory'
import SizeModalStory from './SizeModalStory'
import ScrollModalStory from './ScrollModalStory'

import {H1, H2} from '@s-ui/documentation-library'

const Demo = () => (
  <>
    <H1>Modal</H1>

    <H2>Simple</H2>
    <SimpleModalStory />

    <H2>Size</H2>
    <SizeModalStory />

    <H2>Scroll</H2>
    <ScrollModalStory />
  </>
)

export default Demo
