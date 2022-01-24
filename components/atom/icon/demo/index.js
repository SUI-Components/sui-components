/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {H1, Paragraph, Code} from '@s-ui/documentation-library'

import ColorsAndSizesDemo from './ColorsAndSizesDemo.js'
import ColorInheritanceDemo from './ColorInheritanceDemo.js'
import LazyDemo from './LazyDemo.js'
import SpanDemo from './SpanDemo.js'

import './index.scss'

export default function() {
  return (
    <div className="sui-StudioPreview">
      <H1>Icon</H1>
      <Paragraph>
        <Code>&#60;AtomIcon&#62;</Code> wraps a <Code>&#60;svg&#62;</Code> that
        follows the rules defined on the UX Definition and give you some colors,
        sizes and interesting features like lazy-load rendering.
      </Paragraph>
      <ColorsAndSizesDemo />
      <br />
      <ColorInheritanceDemo />
      <br />
      <LazyDemo />
      <br />
      <SpanDemo />
    </div>
  )
}
