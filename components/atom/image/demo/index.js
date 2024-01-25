import {H1, Paragraph} from '@s-ui/documentation-library'

import DefaultDemo from './DefaultDemo.js'
import FallbackImageDemo from './FallbackImageDemo.js'
import LazyImageDemo from './LazyImageDemo.js'
import LcpImageDemo from './LcpImageDemo.js'
import PlaceHolderDemo from './PlaceHolderDemo.js'
import SkeletonDemo from './SkeletonDemo.js'
import SpinnerDemo from './SpinnerDemo.js'
import ViewportDemo from './ViewportDemo.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Image</H1>
      <Paragraph>
        AtomImage is a component that loads an image inside, maintaining all the accesibility attributes. This component
        can be set to show a placeholder image, a skeleton and/or a spinner while the final image is being loaded. This
        component will also show an Error Box if the image could't be loaded
      </Paragraph>
      <LcpImageDemo />
      <br />
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
      <LazyImageDemo />
      <br />
    </div>
  )
}

export default Demo
