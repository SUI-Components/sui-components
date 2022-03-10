import PolymorphicElement from 'components/atom/polymorphicElement/src'

function StrongText(props) {
  return <span style={{fontWeight: 700}} {...props} />
}

function Demo() {
  return (
    <>
      <PolymorphicElement>
        Polymorphic item rendering a span by default.
      </PolymorphicElement>
      <PolymorphicElement as="h1">
        Polymorphic item rendering as a h1 tag.
      </PolymorphicElement>
      <PolymorphicElement as="div">
        Polymorphic item rendering as a div tag.
      </PolymorphicElement>
      <PolymorphicElement as={StrongText}>
        Polymorphic item rendering as an existing component.
      </PolymorphicElement>
    </>
  )
}

export default Demo
