import {
  H2,
  Paragraph,
  Code,
  Article,
  Grid,
  Cell,
  ListItem,
  UnorderedList,
  Label,
  Box
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import AtomTooltip, {AtomTooltipTriggers} from '../src'

const cssStyles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
}

const DefaultArticle = ({className, trigger}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The default <Code>AtomTooltip</Code> component can be targetting text
        and also complex HTML and React elements. Is works wrapping the tackled
        element.
      </Paragraph>

      <Grid cols={2} gutter={[8, 8]} style={{height: 340}}>
        <Cell style={cssStyles}>
          <Paragraph>
            <AtomTooltip content="Tooltip content" trigger={trigger} isVisible>
              Simple text with simple text content
            </AtomTooltip>
          </Paragraph>
        </Cell>
        <Cell style={cssStyles}>
          <Paragraph>
            <AtomTooltip
              content={
                <Box outline>
                  <Label>react element content</Label>
                </Box>
              }
              trigger={trigger}
              isVisible
            >
              Simple text with React Element content
            </AtomTooltip>
          </Paragraph>
        </Cell>
        <Cell style={cssStyles}>
          <AtomTooltip content="Tooltip content" trigger={trigger} isVisible>
            <Box outline>
              <Label>React Element</Label>
            </Box>
          </AtomTooltip>
        </Cell>
        <Cell style={cssStyles}>
          <AtomTooltip
            content={
              <Box outline>
                <Label>react element content</Label>
              </Box>
            }
            trigger={trigger}
            isVisible
          >
            <Box outline>
              <Label>React Element</Label>
            </Box>
          </AtomTooltip>
        </Cell>
      </Grid>
      <Paragraph>
        The placement where the Tooltip is displayed is automatically located
        depending on the referenced element viewport position.
      </Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>It provides 3 different handlers:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>onOpen</Code>: fired every time the tooltip changes its
          isVisible inner state from false to true.
        </ListItem>
      </UnorderedList>
      <UnorderedList>
        <ListItem>
          <Code>onClose</Code>: fired every time the tooltip changes its
          isVisible inner state from true to false.
        </ListItem>
      </UnorderedList>
      <UnorderedList>
        <ListItem>
          <Code>onToogle</Code>: fired every time the tooltip changes its
          isVisible inner state.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

DefaultArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default DefaultArticle
