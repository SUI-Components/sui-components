import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Box,
  Code,
  H2,
  H3,
  Bold,
  ListItem,
  Grid,
  Cell,
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
      <H3>
        <Bold>Semantic Roles & Attributes</Bold>
      </H3>
      <Grid cols={1} gutter={[8, 0]}>
        <Cell>
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>
              <Bold>Element</Bold>
            </Cell>
            <Cell>
              <Bold>Tag</Bold>
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
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>Container</Cell>
            <Cell>
              <Code>&#60;nav&#62;</Code>
            </Cell>
            <Cell>
              <Code>aria-label="breadcrumb"</Code>
            </Cell>
            <Cell>Declares a navigation region specifically for breadcrumbs</Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>List</Cell>
            <Cell>
              <Code>&#60;ol&#62;</Code>
            </Cell>
            <Cell>–</Cell>
            <Cell>Provides ordered structure (reflecting navigation hierarchy)</Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>List Item</Cell>
            <Cell>
              <Code>&#60;li&#62;</Code>
            </Cell>
            <Cell>–</Cell>
            <Cell>Each breadcrumb segment, maintains semantic list structure</Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>Link (navigable)</Cell>
            <Cell>
              <Code>&#60;a&#62;</Code>
            </Cell>
            <Cell>–</Cell>
            <Cell>Represents a navigable step in the breadcrumb trail</Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={4} gutter={[0, 8]}>
            <Cell>Current page</Cell>
            <Cell>
              <Code>&#60;li&#62;</Code> or <Code>&#60;span&#62;</Code>
            </Cell>
            <Cell>
              <Code>aria-current="page"</Code>
            </Cell>
            <Cell>Indicates that the item is the current page (non-clickable)</Cell>
          </Grid>
        </Cell>
      </Grid>
      <H3>Screen Reader Experience</H3>
      <UnorderedList>
        <ListItem>Screen readers will announce each link in the breadcrumb trail.</ListItem>
        <ListItem>The current page is announced with emphasis (e.g., "Shoes, current page").</ListItem>
        <ListItem>
          Using an <Code>aria-label</Code> on the nav tag helps clarify the region’s purpose.
        </ListItem>
      </UnorderedList>
      <H3>Screen Reader Behavior</H3>
      <UnorderedList>
        <ListItem>
          Announces: <Code>"Breadcrumb navigation"</Code>.
        </ListItem>
        <ListItem>Reads each breadcrumb item sequentially.</ListItem>
        <ListItem>
          Emphasizes the current item as: <Code>"Shoes, current page"</Code>.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
