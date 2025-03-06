import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Box,
  Code,
  H2,
  H3,
  ListItem,
  Paragraph,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'
import Kbd from '@s-ui/react-atom-kbd'

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
        Adheres to the{' '}
        <Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/switch">Switch WAI-ARIA design pattern</Anchor>.
      </Paragraph>
      <H3>Guidelines</H3>
      <UnorderedList>
        <ListItem>
          This component should always have a label either directly declared through the children prop or inherited from
          the FormField wrapper.
        </ListItem>
        <ListItem>
          If no label is set, the <Code>aria-label</Code> attribute will be required to comply with accessibility
          requirements.
        </ListItem>
      </UnorderedList>
      <H3>Label</H3>
      <UnorderedList>
        <ListItem>
          Required: The Switch must have a <Code>label</Code> to clearly indicate its function.
        </ListItem>
        <ListItem>
          If there’s no visible label, an <Code>aria-label</Code> attribute is required to provide a description.
        </ListItem>
      </UnorderedList>
      <H3>ARIA</H3>
      <UnorderedList>
        <ListItem>
          The switch has the <Code>role="switch"</Code> to indicate to assistive technologies that this is a toggle
          switch.
        </ListItem>
        <ListItem>
          State: Use aria-checked="true" or aria-checked="false" to show the current state (right or left) of the
          Switch. For the select design mode it has aria-checked="true" in both positions.
        </ListItem>
      </UnorderedList>
      <H3>Screen Reader</H3>
      <UnorderedList>
        <ListItem>
          Screen readers should announce the Switch’s state (on/off) and read the label to clarify the component's
          function.
        </ListItem>
        <ListItem>
          The Switch’s state should update live so screen readers notify users of changes in real-time.
        </ListItem>
      </UnorderedList>
      <H3>Responsive</H3>
      <UnorderedList>
        <ListItem>
          Touch Accessibility: On mobile devices, the Switch should be large enough to tap easily without errors,
          following mobile accessibility guidelines (e.g., 44x44 pixels for touch targets).
        </ListItem>
        <ListItem>
          Dynamic Adjustments: Ensure that any label or focus indicators resize appropriately on different screen sizes
          to maintain readability and usability.
        </ListItem>
        <ListItem>
          Consistent Experience: The component should function consistently across all devices, including desktops,
          tablets, and mobile devices, with identical keyboard, touch, and screen reader support.
        </ListItem>
      </UnorderedList>
      <H2>Animation</H2>
      <Paragraph>
        The animation for toggling between colors and bullet position must be subtle and its duration around 200ms. This
        value can be replaced in scss modifying the <Code>$atom-switch-transition-time</Code> token.
      </Paragraph>
      <H2>Behaviour - Interaction</H2>
      <UnorderedList>
        <ListItem>
          Switch component allows the user to activate or deactivate the state of an element or concept. It is usually
          used as an element to add services, activate functionalities or adjust settings. It is also used to control
          binary options (On/Off or True/False).
        </ListItem>
        <ListItem>
          A switch is used instead of a checkbox when the action is run immediately, and doesn't need another action to
          run it.
        </ListItem>
      </UnorderedList>
      <H2>Keyboard Navigation</H2>
      <UnorderedList>
        <ListItem>
          <Kbd>Tab</Kbd>: Focus on the switch.
        </ListItem>
        <ListItem>
          <Kbd>Space</Kbd>: Toggle the switch when its possible (no disabled or read-only).
        </ListItem>
        <ListItem>
          <Kbd>Enter</Kbd>: Toggle the switch when its possible (no disabled or read-only).
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
