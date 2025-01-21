import {Article, Anchor, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleA11y = ({className}: {className?: string}) => {
  return (
    <Article className={className}>
      <H2>
        Accessibility – <Anchor>Guidelines</Anchor>
      </H2>
      <Box style={{backgroundColor: 'color-mix(in srgb, #00FF00 10%, transparent)'}}>
        <Paragraph>
          ✅ This component has been successfully tested for WCAG 2.0 levels A and AA, WCAG 2.1 levels A and AA and for
          common accessibility best practices.
        </Paragraph>
      </Box>
      <Paragraph>
        This component is based on the native label element, it will automatically apply the correct labelling when
        wrapping controls or using the <Code>htmlFor</Code> attribute. For your own custom controls to work correctly,
        ensure they use native elements such as button or input as a base.
      </Paragraph>
    </Article>
  )
}

export default ArticleA11y
