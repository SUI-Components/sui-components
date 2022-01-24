import {H1, Paragraph} from '@s-ui/documentation-library'

import ViewportDemo from './ViewportDemo.js'
import FallbackImageDemo from './FallbackImageDemo.js'
import DefaultDemo from './DefaultDemo.js'
import PlaceHolderDemo from './PlaceHolderDemo.js'
import SkeletonDemo from './SkeletonDemo.js'
import SpinnerDemo from './SpinnerDemo.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Image</H1>
      <Paragraph>
        AtomImage is a component that loads an image inside, maintaining all the
        accesibility attributes. This component can be set to show a placeholder
        image, a skeleton and/or a spinner while the final image is being
        loaded. This component will also show an Error Box if the image could't
        be loaded
      </Paragraph>
      <DefaultDemo />
      <br />
      <PlaceHolderDemo />
      <br />
      <SkeletonDemo />
      <br />
      <FallbackImageDemo />
      <br />
      <SpinnerDemo />
      <br />
      <ViewportDemo />
      <br />
    </div>
  )
}

export default Demo
