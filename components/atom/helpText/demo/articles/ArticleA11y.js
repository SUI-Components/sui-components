import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Bold,
  Box,
  Code,
  H2,
  H3,
  Paragraph,
  Strong,
  UnorderedList,
  ListItem,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleA11y = ({className}) => {
  return (
    <>
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
          HelpText provides additional context or clarification about an input field — such as usage hints, validation
          messages, or field descriptions.
        </Paragraph>
        <Paragraph>
          SUI programmatically surfaces both the input’s label and any helper text to assistive technologies such as
          screen readers. Any error messages for text inputs are also accessibly revealed.
        </Paragraph>
        <Paragraph>
          Any descriptions or error messages must be programmatically associated with the field as part of its
          “description” (e.g. on web using aria-describedby), not its label. A field can have multiple descriptive
          elements concatenated together.
        </Paragraph>
      </Article>
      <br />
      <Article className={className}>
        <H3>
          <Bold>Semantic Roles & Attributes</Bold>
        </H3>
        <Grid cols={1} gutter={[8, 0]}>
          <Cell>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>
                <Bold>Element</Bold>
              </Cell>
              <Cell>
                <Bold>Attribute / Role</Bold>
              </Cell>
              <Cell>
                <Bold>Purpose</Bold>
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>HelpText (text element)</Cell>
              <Cell>–</Cell>
              <Cell>Usually a &#60;p&#62; or &#60;span&#62; with an id</Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>Input or Field</Cell>
              <Cell>
                <Code>aria-describedby="help-id"</Code>
              </Cell>
              <Cell>Links the help text to the field so assistive tech reads it</Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>Invalid Input</Cell>
              <Cell>
                <Code>aria-invalid="true"</Code>
              </Cell>
              <Cell>Indicates the input has an error (used together with HelpText for errors).</Cell>
            </Grid>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>Required Field</Cell>
              <Cell>
                <Code>aria-required="true"</Code>
              </Cell>
              <Cell>Optional, but may also be mentioned in help text</Cell>
            </Grid>
          </Cell>
        </Grid>
      </Article>
      <br />
      <Article className={className}>
        <H3>
          <Bold>Screen Reader Experience</Bold>
        </H3>
        <Grid cols={1} gutter={[8, 0]}>
          <Cell>
            <Grid cols={2} gutter={[0, 8]}>
              <Cell>
                <Bold>Scenario</Bold>
              </Cell>
              <Cell>
                <Bold>Behavior</Bold>
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={2} gutter={[0, 8]}>
              <Cell>Field has HelpText</Cell>
              <Cell>
                The screen reader reads the input <Bold>label</Bold>, then the <Bold>HelpText</Bold>.
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={2} gutter={[0, 8]}>
              <Cell>Field is in error state</Cell>
              <Cell>
                The screen reader also reads the <Bold>error message</Bold>, if <Code>aria-invalid="true"</Code> and{' '}
                <Code>aria-describedby</Code> is correctly set.
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid cols={2} gutter={[0, 8]}>
              <Cell>Field is focused again</Cell>
              <Cell>HelpText is read again (if the screen reader re-reads the aria-describedby target).</Cell>
            </Grid>
          </Cell>
        </Grid>
      </Article>
      <br />
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        <Paragraph>
          ⚠️ <Bold>Keep these considerations in mind if you are modifying SUI or creating a custom component.</Bold>
          <UnorderedList>
            <ListItem>Labels are properly associated with inputs using the for attribute.</ListItem>
            <ListItem>Helper text is surfaced to assistive technology through aria-describedby.</ListItem>
          </UnorderedList>
        </Paragraph>
      </Box>
      <Article className={className}>
        <H2>Keyboard navigation</H2>
        <Paragraph>
          HelpText does not have any interactive elements, so it does not require specific keyboard navigation. It is
          read by screen readers when the associated input field is focused.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            <AtomKbd>Tab</AtomKbd>: Skips directly from the input to the next interactive element.
          </ListItem>
          <ListItem>
            HelpText is not <Bold>reachable</Bold> or <Bold>actionable</Bold>, but is <Bold>read aloud</Bold> on focus
            of the input (due to <Code>aria-describedby</Code>).
          </ListItem>
        </UnorderedList>
      </Article>
    </>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
