import PropTypes from 'prop-types'

import {Anchor, Article, Box, H2, H3, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

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
      <H3>Accessibility Requirements for Checkboxes</H3>
      <UnorderedList>
        <ListItem>Users should be able to navigate to a checkbox using assistive technology.</ListItem>
        <ListItem>
          Users should be able to select either the checkbox itself or its text label to choose an option.
        </ListItem>
        <ListItem>
          There is a brief but important interaction where users change the state of the checkboxes by making a
          selection.
        </ListItem>
      </UnorderedList>
      <H3>Checkbox States</H3>
      <UnorderedList>
        <ListItem>The checkbox component has three possible states: selected, unselected, and indeterminate.</ListItem>
        <ListItem>
          In a group, multiple checkboxes can be selected, and users can independently select or unselect a checkbox
          without affecting the state of others in the group.
        </ListItem>
      </UnorderedList>
      <H3>Parent-Child Checkbox Behavior</H3>
      <UnorderedList>
        <ListItem>The parent checkbox can have three states: selected, unselected, and indeterminate.</ListItem>
        <ListItem>
          If some child checkboxes are selected while others are not, the parent checkbox will enter an "indeterminate"
          state.
        </ListItem>
      </UnorderedList>
      <Paragraph>Selecting an indeterminate parent checkbox will select all child checkboxes.</Paragraph>
      <H3>Label</H3>
      <UnorderedList>
        <ListItem>
          Every checkbox should have a label, either declared directly through the children prop or inherited from a
          FormField wrapper.
        </ListItem>
        <ListItem>
          If no label is available, it is strongly recommended to define an aria-label attribute to meet accessibility
          requirements.
        </ListItem>
      </UnorderedList>
      <H3>Accessibility Compliance</H3>
      <Paragraph>
        This component adheres to the tri-state{' '}
        <Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/">Checkbox WAI-ARIA design pattern</Anchor>,
        ensuring accessibility and proper behavior for users with assistive technologies.
      </Paragraph>
      <H2>KEYBOARD NAVIGATION</H2>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Checks/unchecks the checkbox.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Do NOT Checks/unchecks the checkbox.
        </ListItem>
        <ListItem>
          <AtomKbd>Tab</AtomKbd>: Moves focus to the next focusable element.
        </ListItem>
        <ListItem>
          <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tab</AtomKbd>: Moves focus to the previous focusable element.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
