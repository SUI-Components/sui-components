import PolymorphicElement from 'components/atom/polymorphicElement/src'

import {H1, H2, Paragraph, Article, Code} from '@s-ui/documentation-library'

function StrongText(props) {
  return <span style={{fontWeight: 700}} {...props} />
}

function Demo() {
  return (
    <div className="sui-StudioPreview">
      <H1>PolymorphicElement</H1>
      <Paragraph>PolymorphicElement is ...</Paragraph>
      <Article className="DemoAtomPolymorphicElement">
        <H2>Default</H2>
        <Paragraph>
          By default, the component assigns an span as a default tag element
        </Paragraph>
        <PolymorphicElement>
          Polymorphic item rendering a span by default.
        </PolymorphicElement>
        <Paragraph>
          User can change its tag using the <Code>as</Code> (elementType) prop
        </Paragraph>
        <PolymorphicElement as="h1">
          Polymorphic item rendering as a h1 tag.
        </PolymorphicElement>
        <PolymorphicElement as="div">
          Polymorphic item rendering as a div tag.
        </PolymorphicElement>
        <PolymorphicElement as={StrongText}>
          Polymorphic item rendering as an existing component.
        </PolymorphicElement>
      </Article>
    </div>
  )
}

export default Demo
