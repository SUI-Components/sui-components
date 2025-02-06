import PropTypes from 'prop-types'

import {Anchor, Article, Box, H2, H3, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

const ArticleA11y = ({className}) => {
  return (
    <Article className={className}>
      <H2>
        Accessibility –{' '}
        <Anchor href="https://github.com/SUI-Components/sui-components/blob/master/contributor-docs/Accessibility%20Standards.md">
          <Strong>Guidelines</Strong>
        </Anchor>
      </H2>
      <Paragraph>
        Icons are small images or symbols used to represent an idea, function, or feature in a graphical user interface
        (GUI). They provide a quick, intuitive way to convey information without relying on text.
      </Paragraph>
      <Paragraph>They can represent:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Strong>Actions:</Strong> such as print, save, or delete
        </ListItem>
        <ListItem>
          <Strong>Objects:</Strong> such as files, folders, or applications
        </ListItem>
        <ListItem>
          <Strong>States:</Strong> such as on, off, or warning
        </ListItem>
        <ListItem>
          <Strong>Navigation:</Strong> such as back, forward, or home
        </ListItem>
      </UnorderedList>
      <Paragraph>
        Icons need to be understandable and user-friendly for everyone, including those with disabilities.
      </Paragraph>
      <H3>Key elements of accessible icon design</H3>
      <UnorderedList>
        <ListItem>
          <Strong>Clear visibility</Strong>: The goal is to ensure that every user, regardless of their visual
          abilities, can <Strong>easily identify and understand</Strong> the icons. This involves choosing colours with
          sufficient contrast to ensure that icons are distinguishable for users with colour vision deficiencies or
          visual impairments and maintain clarity in various screen resolutions and sizes
        </ListItem>
        <ListItem>
          <Strong>Universal recognisability</Strong>: An icon’s design should{' '}
          <Strong>communicate clearly and intuitively</Strong> its function, reducing the cognitive load on users. Opt
          for symbols and imagery that are widely understood <Strong>across different cultures and demographics</Strong>
          .
        </ListItem>
        <ListItem>
          <Strong>Appropriate size</Strong>: Icons need to be large enough to be <Strong>easily interacted</Strong> with
          yet balanced enough <Strong>not to overwhelm</Strong> the interface. This entails considering touch targets
          for users on mobile devices to make sure that icons can be tapped without error. This also encompasses
          accommodating users with motor impairments who might find interacting with smaller icons challenging.
        </ListItem>
        <ListItem>
          <Strong>Discoverability with a keyboard, mouse, and screen reader</Strong>: Icon buttons must be navigable
          using a variety of tools like keyboards, mice, and especially screen readers for users with visual
          impairments. This involves proper coding practices, such as including alt text and{' '}
          <Anchor href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">
            ARIA (Accessible Rich Internet Applications)
          </Anchor>{' '}
          labels, to ensure that icons are seen and understood in the way they are intended.
        </ListItem>
      </UnorderedList>

      <Box style={{backgroundColor: 'color-mix(in srgb, #00FF00 10%, transparent)'}}>
        <Paragraph>
          ✅ This component has been successfully tested for{' '}
          <Strong>WCAG 2.0 levels A and AA, WCAG 2.1 levels A and AA</Strong> and for common accessibility best
          practices.
        </Paragraph>
      </Box>
      <Paragraph>
        The accessibility label for a button comes from the visible label text on the button such as Done, Send, or
        Reply.
      </Paragraph>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
