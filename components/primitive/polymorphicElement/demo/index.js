import PolymorphicElement from 'components/primitive/polymorphicElement/src'

import {Article, Code, H1, H2, Paragraph} from '@s-ui/documentation-library'

function StrongText(props) {
  return <span style={{fontWeight: 700}} {...props} />
}

function Demo() {
  return (
    <div className="sui-StudioPreview">
      <H1>PolymorphicElement</H1>
      <Paragraph>
        PolymorphicElement is an element capable of rendering a specified html
        tag or component when passed with the <Code>as</Code> property.
      </Paragraph>
      <Article className="DemoPrimitivePolymorphicElement">
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
