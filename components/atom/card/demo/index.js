/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {H1, Paragraph} from '@s-ui/documentation-library'

import DefaultDemo from './DefaultDemo.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Card</H1>
        <Paragraph>
          Component that structures two main containers (media & info for
          example), with the purpose of giving information about a
          product/client/article and linking to more detailed information about
          it.
        </Paragraph>
        <DefaultDemo />
        <br />
      </div>
    </div>
  )
}

export default Demo
