import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Box,
  Code,
  H2,
  H3,
  H4,
  ListItem,
  Paragraph,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'

const ArticleA11y = ({className}) => {
  return (
    <Article className={className}>
      <H2>
        Accessibility –{' '}
        <Anchor href="https://github.com/SUI-Components/sui-components/blob/master/contributor-docs/Accessibility%20Standards.md">
          <Strong>Guidelines</Strong>
        </Anchor>
      </H2>
      <Box style={{backgroundColor: 'color-mix(in srgb, #00FF00 10%, transparent)'}}>
        <Paragraph>
          ✅ This component has been successfully tested for{' '}
          <Strong>WCAG 2.0 levels A and AA, WCAG 2.1 levels A and AA</Strong> and for common accessibility best
          practices.
        </Paragraph>
      </Box>
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
      <H3>Summary of rules for proper A11y criteria on Icons:</H3>
      <H4>1.- Is this image purely decorative?</H4>
      <Article style={{padding: '0 16px'}}>
        <Paragraph>
          Some examples of icons are <Strong>not relevant for the content</Strong>, and they are just decorative. In
          this case, you should use the <Code>aria-hidden="true"</Code> attribute. At the same time, you{' '}
          <Strong>
            should never add a <Code>label</Code> or an <Code>alt</Code>
          </Strong>{' '}
          to the icon.
        </Paragraph>
        <Paragraph>
          Ask yourself, if this image wasn’t present on the page, what would the user miss out on? If the answer is
          purely that it wouldn’t look as nice, then it sounds like{' '}
          <Strong>you don’t need alternative text and the aria-hidden has to be added</Strong>.
        </Paragraph>
        <Paragraph>Examples:</Paragraph>
        <UnorderedList>
          <ListItem>Images used for layout purposes only</ListItem>
          <ListItem>Images used as bullet points</ListItem>
          <ListItem>Images where the surrounding text is descriptive enough already</ListItem>
        </UnorderedList>
      </Article>
      <H4>2.- Does this image have a function, or is it purely content?</H4>
      <Article style={{padding: '0 16px'}}>
        <Paragraph>
          If the icon is associated with an interactive element, such as a <Code>link</Code> or a <Code>Button</Code>,
          then we can add an <Code>‘aria-label’</Code> to the interactive element, while hiding the icon itself as in
          Step 1.
        </Paragraph>
      </Article>
      <H4>3.- What content would the user miss out on if the image was missing?</H4>
      <Article style={{padding: '0 16px'}}>
        <Paragraph>
          As we cannot add alternative text to the icon itself, what we can do is add some actual text, but display it
          in a way to make it only visible to assistive technology users. This can be done using CSS and displaying the
          text off screen. As before, we will add <Code>‘aria-hidden’</Code> to the icon itself.
        </Paragraph>
      </Article>
      <Paragraph>
        The final question is the most difficult one to answer, but by taking a little time over this, you can improve
        the experience for all of all users as well as SEO!
      </Paragraph>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
