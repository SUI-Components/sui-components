/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import ColorInheritanceDemo from './ColorInheritanceDemo.js'
import ColorsAndSizesDemo from './ColorsAndSizesDemo.js'
import LazyDemo from './LazyDemo.js'
import PolymorphicDemo from './PolymorphicDemo.js'
import SpanDemo from './SpanDemo.js'

import './index.scss'

export default function () {
  return (
    <div className="sui-StudioPreview">
      <H1>Icon</H1>
      <Paragraph>
        <Code>&#60;AtomIcon&#62;</Code> wraps a <Code>&#60;svg&#62;</Code> that follows the rules defined on the UX
        Definition and give you some colors, sizes and interesting features like lazy-load rendering.
      </Paragraph>
      <ColorsAndSizesDemo />
      <br />
      <ColorInheritanceDemo />
      <br />
      <PolymorphicDemo />
      <br />
      <LazyDemo />
      <br />
      <SpanDemo />
    </div>
  )
}
